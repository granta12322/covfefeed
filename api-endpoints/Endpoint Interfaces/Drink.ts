import {BrewingDevice} from './BrewingDevice'
import {RoastedBean} from './RoastedBean'
export interface Drink {
    drinkNumber: bigint,
    mass: number,
    brewingDevice: BrewingDevice,
    roastedBean: RoastedBean,
    rating: bigint,
    cost: bigint,
    consumptionDateTime: string
}