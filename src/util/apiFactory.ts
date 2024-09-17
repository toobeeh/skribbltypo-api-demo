import {BaseAPI, Configuration} from "../api";
import {get, writable} from "svelte/store";

type Type<T> = new (...args: any[]) => T;

export class ApiFactory {

    /* value which will be used for api base url in created configs */
    static baseUrl = writable<string | undefined>();

    /* value which will be used for authentification in created configs */
    static authToken = writable<string | undefined>(sessionStorage.getItem("typoAccessToken") ?? undefined);

    static createApiConfig() {
        return new Configuration({
            basePath: get(this.baseUrl),
            accessToken: get(this.authToken)
        });
    }

    static createApi<TApi extends BaseAPI>(apiClass: Type<TApi>): TApi {
        return new apiClass(this.createApiConfig());
    }
}

ApiFactory.authToken.subscribe(value =>  value ? sessionStorage.setItem("typoAccessToken", value) : sessionStorage.removeItem("typoAccessToken"));