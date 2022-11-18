import { _Location } from "./Location"
import { Farm } from "./Farm"
export interface CoffeeBean {
    id:number
    name: string
    location?: _Location
    farm?: Farm
    harvest_date?: Date
}