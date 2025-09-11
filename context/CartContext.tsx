import { CartContextType, CartItem, CoffeeTypesProps } from "@/interfaces";
import { createContext, ReactNode, useContext, useState } from "react";




const CartContext = createContext<(CartContextType | undefined)>(undefined);

export const CartProvider=({children}:{children:ReactNode})=>{
    const[cart,setCart] = useState<CartItem[]>([]);

const addToCart = (item: CoffeeTypesProps) => {
    setCart((prevCart) => {
      const existing = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existing) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

    const removeFromCart = (id:string)=>{
        setCart((prevCart)=>prevCart.filter((item)=> item.id !== id))
    };

    const increaseQuantity = (id:string)=>{
        setCart((prevCart)=> prevCart.map((item)=> item.id === id ? {...item,quantity:item.quantity+1}:item));
    };

    const decreaseQuantity = (id:string) =>{
        setCart((prevCart)=> prevCart.map((item)=> item.id === id && item.quantity>1 ? {...item,quantity:item.quantity-1}:item ));
    };

    const getTotal = () =>{
        return cart.reduce((sum,item)=>sum + item.price * item.quantity,0);
    };

    return(
        <CartContext.Provider value={{cart,addToCart,removeFromCart,increaseQuantity,decreaseQuantity,getTotal}}>{children}</CartContext.Provider>
    );
};

export const useCart=()=>{
    const context = useContext(CartContext);
    if(!context) throw new Error("useCart must be used inside CartProvider");
    return context;
}