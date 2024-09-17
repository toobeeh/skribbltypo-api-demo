/* tslint:disable */
/* eslint-disable */
/**
 * Skribbl Typo API
 * Skribbl Typo API for resources, admin tools and authentification.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AccessTokenDto,
  MemberDto,
  MemberSearchDto,
  UpdateDiscordID,
} from '../models/index';
import {
    AccessTokenDtoFromJSON,
    AccessTokenDtoToJSON,
    MemberDtoFromJSON,
    MemberDtoToJSON,
    MemberSearchDtoFromJSON,
    MemberSearchDtoToJSON,
    UpdateDiscordIDFromJSON,
    UpdateDiscordIDToJSON,
} from '../models/index';

export interface ClearMemberDropboostRequest {
    login: number;
}

export interface ConnectMemberToGuildRequest {
    login: number;
    token: number;
}

export interface FindMembersWildcardSearchRequest {
    content: string;
}

export interface GetMemberAccessTokenRequest {
    login: number;
}

export interface GetMemberByDiscordIDRequest {
    id: string;
}

export interface GetMemberByLoginRequest {
    login: number;
}

export interface RemoveConnectedGuildRequest {
    login: number;
    token: number;
}

export interface UpdateMemberDiscordIDRequest {
    login: number;
    updateDiscordID: UpdateDiscordID;
}

/**
 * 
 */
export class MembersApi extends runtime.BaseAPI {

    /**
     *   Required Role: Moderator  Rate limit default: 10 Requests / 60000 ms TTL
     * Delete a dropboost of a member
     */
    async clearMemberDropboostRaw(requestParameters: ClearMemberDropboostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['login'] == null) {
            throw new runtime.RequiredError(
                'login',
                'Required parameter "login" was null or undefined when calling clearMemberDropboost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/members/{login}/dropboost`.replace(`{${"login"}}`, encodeURIComponent(String(requestParameters['login']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     *   Required Role: Moderator  Rate limit default: 10 Requests / 60000 ms TTL
     * Delete a dropboost of a member
     */
    async clearMemberDropboost(requestParameters: ClearMemberDropboostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.clearMemberDropboostRaw(requestParameters, initOverrides);
    }

    /**
     *   Required Role: Moderator - Role override if {login} matches the client login.  Rate limit default: 10 Requests / 60000 ms TTL
     * Connect a user to a guild with given server token
     */
    async connectMemberToGuildRaw(requestParameters: ConnectMemberToGuildRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['login'] == null) {
            throw new runtime.RequiredError(
                'login',
                'Required parameter "login" was null or undefined when calling connectMemberToGuild().'
            );
        }

        if (requestParameters['token'] == null) {
            throw new runtime.RequiredError(
                'token',
                'Required parameter "token" was null or undefined when calling connectMemberToGuild().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/members/{login}/guilds/{token}`.replace(`{${"login"}}`, encodeURIComponent(String(requestParameters['login']))).replace(`{${"token"}}`, encodeURIComponent(String(requestParameters['token']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     *   Required Role: Moderator - Role override if {login} matches the client login.  Rate limit default: 10 Requests / 60000 ms TTL
     * Connect a user to a guild with given server token
     */
    async connectMemberToGuild(requestParameters: ConnectMemberToGuildRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.connectMemberToGuildRaw(requestParameters, initOverrides);
    }

    /**
     *   Required Role: Moderator  Rate limit default: 10 Requests / 60000 ms TTL
     * Find members that contain a string
     */
    async findMembersWildcardSearchRaw(requestParameters: FindMembersWildcardSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<MemberSearchDto>>> {
        if (requestParameters['content'] == null) {
            throw new runtime.RequiredError(
                'content',
                'Required parameter "content" was null or undefined when calling findMembersWildcardSearch().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['content'] != null) {
            queryParameters['content'] = requestParameters['content'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/members/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MemberSearchDtoFromJSON));
    }

    /**
     *   Required Role: Moderator  Rate limit default: 10 Requests / 60000 ms TTL
     * Find members that contain a string
     */
    async findMembersWildcardSearch(requestParameters: FindMembersWildcardSearchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<MemberSearchDto>> {
        const response = await this.findMembersWildcardSearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     *   Required Role: Member  Rate limit default: 10 Requests / 60000 ms TTL
     * Get the currently authenticated member
     */
    async getAuthenticatedMemberRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MemberDto>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/members/me`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MemberDtoFromJSON(jsonValue));
    }

    /**
     *   Required Role: Member  Rate limit default: 10 Requests / 60000 ms TTL
     * Get the currently authenticated member
     */
    async getAuthenticatedMember(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MemberDto> {
        const response = await this.getAuthenticatedMemberRaw(initOverrides);
        return await response.value();
    }

    /**
     *   Required Role: Moderator - Role override if {login} matches the client login.  Rate limit default: 10 Requests / 60000 ms TTL
     * Get an access token of a member
     */
    async getMemberAccessTokenRaw(requestParameters: GetMemberAccessTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccessTokenDto>> {
        if (requestParameters['login'] == null) {
            throw new runtime.RequiredError(
                'login',
                'Required parameter "login" was null or undefined when calling getMemberAccessToken().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/members/{login}/token`.replace(`{${"login"}}`, encodeURIComponent(String(requestParameters['login']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccessTokenDtoFromJSON(jsonValue));
    }

    /**
     *   Required Role: Moderator - Role override if {login} matches the client login.  Rate limit default: 10 Requests / 60000 ms TTL
     * Get an access token of a member
     */
    async getMemberAccessToken(requestParameters: GetMemberAccessTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccessTokenDto> {
        const response = await this.getMemberAccessTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     *   Required Role: Moderator  Rate limit default: 10 Requests / 60000 ms TTL
     * Get a member by their discord id
     */
    async getMemberByDiscordIDRaw(requestParameters: GetMemberByDiscordIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MemberDto>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getMemberByDiscordID().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/members/discord/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MemberDtoFromJSON(jsonValue));
    }

    /**
     *   Required Role: Moderator  Rate limit default: 10 Requests / 60000 ms TTL
     * Get a member by their discord id
     */
    async getMemberByDiscordID(requestParameters: GetMemberByDiscordIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MemberDto> {
        const response = await this.getMemberByDiscordIDRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     *   Required Role: Moderator - Role override if {login} matches the client login.  Rate limit default: 10 Requests / 60000 ms TTL
     * Get a member by their login
     */
    async getMemberByLoginRaw(requestParameters: GetMemberByLoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MemberDto>> {
        if (requestParameters['login'] == null) {
            throw new runtime.RequiredError(
                'login',
                'Required parameter "login" was null or undefined when calling getMemberByLogin().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/members/{login}`.replace(`{${"login"}}`, encodeURIComponent(String(requestParameters['login']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MemberDtoFromJSON(jsonValue));
    }

    /**
     *   Required Role: Moderator - Role override if {login} matches the client login.  Rate limit default: 10 Requests / 60000 ms TTL
     * Get a member by their login
     */
    async getMemberByLogin(requestParameters: GetMemberByLoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MemberDto> {
        const response = await this.getMemberByLoginRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     *   Required Role: Moderator - Role override if {login} matches the client login.  Rate limit default: 10 Requests / 60000 ms TTL
     * Delete a server from a member\'s connected guilds
     */
    async removeConnectedGuildRaw(requestParameters: RemoveConnectedGuildRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['login'] == null) {
            throw new runtime.RequiredError(
                'login',
                'Required parameter "login" was null or undefined when calling removeConnectedGuild().'
            );
        }

        if (requestParameters['token'] == null) {
            throw new runtime.RequiredError(
                'token',
                'Required parameter "token" was null or undefined when calling removeConnectedGuild().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/members/{login}/guilds/{token}`.replace(`{${"login"}}`, encodeURIComponent(String(requestParameters['login']))).replace(`{${"token"}}`, encodeURIComponent(String(requestParameters['token']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     *   Required Role: Moderator - Role override if {login} matches the client login.  Rate limit default: 10 Requests / 60000 ms TTL
     * Delete a server from a member\'s connected guilds
     */
    async removeConnectedGuild(requestParameters: RemoveConnectedGuildRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.removeConnectedGuildRaw(requestParameters, initOverrides);
    }

    /**
     *   Required Role: Moderator  Rate limit default: 10 Requests / 60000 ms TTL
     * Update a member\'s discord ID and merge with other if present
     */
    async updateMemberDiscordIDRaw(requestParameters: UpdateMemberDiscordIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MemberDto>> {
        if (requestParameters['login'] == null) {
            throw new runtime.RequiredError(
                'login',
                'Required parameter "login" was null or undefined when calling updateMemberDiscordID().'
            );
        }

        if (requestParameters['updateDiscordID'] == null) {
            throw new runtime.RequiredError(
                'updateDiscordID',
                'Required parameter "updateDiscordID" was null or undefined when calling updateMemberDiscordID().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/members/{login}/discord`.replace(`{${"login"}}`, encodeURIComponent(String(requestParameters['login']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateDiscordIDToJSON(requestParameters['updateDiscordID']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MemberDtoFromJSON(jsonValue));
    }

    /**
     *   Required Role: Moderator  Rate limit default: 10 Requests / 60000 ms TTL
     * Update a member\'s discord ID and merge with other if present
     */
    async updateMemberDiscordID(requestParameters: UpdateMemberDiscordIDRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MemberDto> {
        const response = await this.updateMemberDiscordIDRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
