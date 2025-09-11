import { ImageSourcePropType } from "react-native";

export interface CoffeeTypesProps{
    id: string,
    productName: string,
    description: string,
    price: number,
    image: ImageSourcePropType,
    details?:string
}

export interface CartItem extends CoffeeTypesProps{
    quantity:number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CoffeeTypesProps) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  getTotal: () => number;
}