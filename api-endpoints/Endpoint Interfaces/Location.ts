import { Country } from "./Country"
export interface _Location {
    id: bigint
    country: Country
    latitude?: number
    longitude?: number
    altitude_metres?: number
    season_start?: Date
    season_end?: Date

}