import { ImageSourcePropType } from "react-native";

export interface CoffeeTypesProps{
    id: string,
    name: string,
    description: string,
    price: number,
    image: ImageSourcePropType,
}