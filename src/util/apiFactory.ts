import {BaseAPI, Configuration} from "../api";
import {get, writable} from "svelte/store";

type Type<T> = new (...args: any[]) => T;

export class ApiFactory {

    /* value which will be used for api base url in created configs */
    static baseUrl = writable<string | undefined>();

    /* value which will be used for authentication in created configs */
    static authToken = writable<string | undefined>(sessionStorage.getItem("typoAccessToken") ?? undefined);

    /*whenever the auth token changes, save it to the session storage*/
    private static unsubscriber = ApiFactory.authToken
        .subscribe(value => value ? sessionStorage.setItem("typoAccessToken", value) : sessionStorage.removeItem("typoAccessToken"));

    /* creates a new api config based on set options*/
    private static createApiConfig() {
        return new Configuration({
            basePath: get(this.baseUrl),
            accessToken: (n, a) => get(this.authToken) ?? ""
        });
    }

    /*create a new api client of given type*/
    static createApi<TApi extends BaseAPI>(apiClass: Type<TApi>): TApi {
        return new apiClass(this.createApiConfig());
    }
}

