import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {

//cart State (example:1 item in cart)
const [cart,setCart]= useState([
    {
    id:1,
    productName:"Coffee Mocha",
    description:"Deep Foam",
    quantity:1,
    price:3.45,
    image: require("@/assets/images/coffee2.png"),
    }
])

//INCREASE quantity
const increaseQty=(id:number)=>{
    setCart((prev)=> prev.map((item)=> item.id === id ? {...item,quantity: item.quantity + 1}:item))
}

//Decrease Quantity
const decreaseQty=(id:number)=>{
    setCart((prev)=> prev.map((item)=> item.id === id && item.quantity > 1 ? {...item,quantity:item.quantity - 1}:item).filter((item)=> item.quantity>0));
}
//calculate total price
const totalPrice = cart.reduce((sum,item)=> sum + item.price * item.quantity,0);


    return(
  <View style={{flex:1,justifyContent: "center",
        alignItems: "center"}} >
    <SafeAreaProvider>
        <SafeAreaView style={{flex:1}}>
        {/** header */}
    <View className="bg-inherit  flex-row justify-between top-68 pt-3 mt-20" style={{width:327,height:44}}>
        <Ionicons name="arrow-back" size={20} color="black" />
        <Text className="text-black leading-normal" style={{fontFamily:"Sora_600SemiBold",fontSize:16}}>Order</Text>
    </View>
        {/** deliver and pickup */}
    <View className="bg-[#EDEDED]  flex-row mt-10 border justify-between border-[#A2A2A2] rounded-xl" style={{width:327,height:44}}>
        <Text className="text-[#FFFF] bg-[#C67C4E] leading-normal border-[#C67C4E] rounded-xl pl-14 pt-3" style={{fontFamily:"Sora_600SemiBold",fontSize:16, width:160}}>Deliver</Text>
        <Text className="text-black leading-normal pl-14 pt-3" style={{fontFamily:"Sora_400Regular",fontSize:16,width:160}}>Pickup</Text>  
    </View>
    {/**Delivery address*/}
    <View className=" mt-4 " style={{width:350}}>
      <Text style={{fontFamily:"Sora_600SemiBold",fontSize:20}}>Delivery Address</Text>
      <Text style={{fontFamily:"Sora_400Regular",fontSize:14,color:"#A2A2A2",paddingBottom:2}} >JL. Kipyego</Text>
      <Text style={{fontFamily:"Sora_400Regular",fontSize:14,color:"#A2A2A2"}}>Mk. Sutoyo No.620 Bilzan Tan</Text>
      <View className="flex-row gap-20 mt-2">
      <Ionicons name="create-outline" size={20} color="#A2A2A2" className="border border-[#A2A2A2] w-20 rounded-2xl pl-2"/>
      <Ionicons name="document" size={20} color="#A2A2A2" className="border border-[#A2A2A2] w-20 rounded-2xl pl-2"/>
      </View>
    </View>

    <View style={{width:350,height:1,borderColor:"black",marginTop:15,marginBottom:6,marginLeft:5,backgroundColor:"black"}}></View>
    {/** place order section*/}
    {cart.map((item)=>(

   
    <View key={item.id} className=" mt-4 mb-6 flex-row justify-between">
        <View className= " mt-1  flex-row gap-5 ">
            <Image source={item.image} style={{width:54,height:54,borderRadius:16}}/>
            <View className="pt-3">
            <Text style={{fontFamily:"Sora_600SemiBold",fontSize:18}}>{item.productName}</Text>
            <Text style={{fontFamily:"Sora_400Regular",fontSize:12,color:"#A2A2A2"}}>{item.description}</Text>
            </View>
        </View>

        <View className=" mt-1 mr-6 pt-4 flex-row">
            <TouchableOpacity onPress={()=>increaseQty(item.id)}>
            <Ionicons name="add" size={20}/>
          </TouchableOpacity>
          <Text style={{fontFamily:"Sora_600SemiBold",fontSize:20}}>{item.quantity}</Text>
          <TouchableOpacity onPress={()=>decreaseQty(item.id)}>
             <Ionicons name="remove" size={20}/></TouchableOpacity>
         
        </View>

    </View> ))}
        <View style={{width:350,height:1,borderColor:"black",marginTop:15,marginLeft:5,backgroundColor:"black"}}></View>
        {/**Discount */}
        <View style={{width:350,height:44}} className="border border-[#A2A2A2] rounded-xl flex-row gap-5 mt-8 pt-2">
            <Ionicons name="pricetag" size={20} style={{marginLeft:10}} color="#C67C4E"/>
            <Text style={{fontFamily:"Sora_600SemiBold",fontSize:18,color:"#A2A2A2"}} >1 Discount is Applied</Text>
            <Ionicons name="arrow-forward" size={20} style={{marginLeft:80}}/>
        </View>

        {/**Payment Summary */}
        <View className="mt-8 ">
            <Text className="" style={{fontFamily:"Sora_600SemiBold",fontSize:20}}>Payment Summary</Text>
            <View className="flex-column gap-5">
                <View className="flex-row gap-48 pt-3 ">
                    <Text style={{fontFamily:"Sora_400Regular",fontSize:16}}>Price</Text>
                    <Text style={{fontFamily:"Sora_600SemiBold",fontSize:16,marginLeft:100}}>${totalPrice.toFixed(2)}</Text>
                </View>
                <View className="flex-row gap-32">
                    <Text style={{fontFamily:"Sora_400Regular",fontSize:16}}>Delivery Fee</Text>
                    <Text style={{fontFamily:"Sora_600SemiBold",fontSize:16,marginLeft:100}}> $2.0 $1.0</Text>
                </View>
            </View>
        </View>
        {/** Wallet Section */}
        <View className="mt-16 flex-row gap-20" style={{width:350,height:64}}>
           
            <Ionicons name="wallet" size={20} color="#C67C4E" style={{paddingTop:15}}/>
            <View className="flex-column gap-1 ">
            <Text style={{fontFamily:"Sora_600SemiBold",fontSize:18}}>Cash/wallet</Text>
            <Text style={{fontFamily:"Sora_600SemiBold",fontSize:18,color:"#C67C4E"}}>${(totalPrice + 1).toFixed(2)}</Text>
            </View>
            <Ionicons name="arrow-down" size={20} color="black" style={{marginLeft:80}}/>

        </View>
        {/** Order button */}
        <TouchableOpacity className="bg-[#C67C4E]  flex-row mt-10 border justify-between border-[#C67C4E] rounded-3xl" style={{width:350,height:54}}>
              <Text style={{fontFamily:"Sora_600SemiBold",fontSize:20,color:"white"}} className="self-center ml-44">Order</Text>
        </TouchableOpacity>


        </SafeAreaView>   
    </SafeAreaProvider>
  </View> 
    )
}