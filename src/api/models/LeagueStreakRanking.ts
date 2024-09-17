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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface LeagueStreakRanking
 */
export interface LeagueStreakRanking {
    /**
     * The palantir username of the participant
     * @type {string}
     * @memberof LeagueStreakRanking
     */
    name: string;
    /**
     * The maximum streak of caught league drops
     * @type {number}
     * @memberof LeagueStreakRanking
     */
    maxStreak: number;
}

/**
 * Check if a given object implements the LeagueStreakRanking interface.
 */
export function instanceOfLeagueStreakRanking(value: object): value is LeagueStreakRanking {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('maxStreak' in value) || value['maxStreak'] === undefined) return false;
    return true;
}

export function LeagueStreakRankingFromJSON(json: any): LeagueStreakRanking {
    return LeagueStreakRankingFromJSONTyped(json, false);
}

export function LeagueStreakRankingFromJSONTyped(json: any, ignoreDiscriminator: boolean): LeagueStreakRanking {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'maxStreak': json['maxStreak'],
    };
}

export function LeagueStreakRankingToJSON(value?: LeagueStreakRanking | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'maxStreak': value['maxStreak'],
    };
}

