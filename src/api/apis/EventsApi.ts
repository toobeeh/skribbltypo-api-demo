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
  EventDropDto,
  EventDto,
} from '../models/index';
import {
    EventDropDtoFromJSON,
    EventDropDtoToJSON,
    EventDtoFromJSON,
    EventDtoToJSON,
} from '../models/index';

export interface GetEventByIdRequest {
    id: number;
}

export interface GetEventDropRequest {
    id: number;
}

export interface GetEventDropsOfEventRequest {
    id: number;
}

/**
 * 
 */
export class EventsApi extends runtime.BaseAPI {

    /**
     *   Required Role: None  Rate limit default: 10 Requests / 60000 ms TTL
     * Get all event drops
     */
    async getAllEventDropsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<EventDropDto>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/events/drops`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EventDropDtoFromJSON));
    }

    /**
     *   Required Role: None  Rate limit default: 10 Requests / 60000 ms TTL
     * Get all event drops
     */
    async getAllEventDrops(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<EventDropDto>> {
        const response = await this.getAllEventDropsRaw(initOverrides);
        return await response.value();
    }

    /**
     *   Required Role: None  Rate limit default: 10 Requests / 60000 ms TTL
     * Get all events
     */
    async getAllEventsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<EventDto>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/events`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EventDtoFromJSON));
    }

    /**
     *   Required Role: None  Rate limit default: 10 Requests / 60000 ms TTL
     * Get all events
     */
    async getAllEvents(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<EventDto>> {
        const response = await this.getAllEventsRaw(initOverrides);
        return await response.value();
    }

    /**
     *   Required Role: None  Rate limit default: 10 Requests / 60000 ms TTL
     * Get an event by ID
     */
    async getEventByIdRaw(requestParameters: GetEventByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EventDto>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getEventById().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/events/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EventDtoFromJSON(jsonValue));
    }

    /**
     *   Required Role: None  Rate limit default: 10 Requests / 60000 ms TTL
     * Get an event by ID
     */
    async getEventById(requestParameters: GetEventByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EventDto> {
        const response = await this.getEventByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     *   Required Role: None  Rate limit default: 10 Requests / 60000 ms TTL
     * Get an event drop by ID
     */
    async getEventDropRaw(requestParameters: GetEventDropRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EventDropDto>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getEventDrop().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/events/drops/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EventDropDtoFromJSON(jsonValue));
    }

    /**
     *   Required Role: None  Rate limit default: 10 Requests / 60000 ms TTL
     * Get an event drop by ID
     */
    async getEventDrop(requestParameters: GetEventDropRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EventDropDto> {
        const response = await this.getEventDropRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     *   Required Role: None  Rate limit default: 10 Requests / 60000 ms TTL
     * Get all event drops of an event
     */
    async getEventDropsOfEventRaw(requestParameters: GetEventDropsOfEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<EventDropDto>>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getEventDropsOfEvent().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/events/{id}/drops`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EventDropDtoFromJSON));
    }

    /**
     *   Required Role: None  Rate limit default: 10 Requests / 60000 ms TTL
     * Get all event drops of an event
     */
    async getEventDropsOfEvent(requestParameters: GetEventDropsOfEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<EventDropDto>> {
        const response = await this.getEventDropsOfEventRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
