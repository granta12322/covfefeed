import {CoffeeBean} from './CoffeeBean'
export interface RoastedBean {
    id: bigint
    coffeeBean: CoffeeBean
    hexCode: string
    roastDate: Date
}

