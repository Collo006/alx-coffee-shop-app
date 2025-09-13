import { SAMPLE_DATA } from "@/constants/home";
import { useCart } from "@/context/CartContext";
import { CoffeeTypesProps } from "@/interfaces";
import { Sora_400Regular, Sora_600SemiBold, Sora_700Bold } from "@expo-google-fonts/sora";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


//Read more and Read Less text
const ReadMoreText = ({text}:{text:any})=>{



const [expand,setExpand]=useState(false); //used to toggle the read more 

const limit=100; // characters before "Read more" shows

return(
    <View >
        <Text style={{fontFamily:"Sora_400Regular",fontSize:16}} className="text-[#A2A2A2] mt-2 leading-relaxed flex flex-row">
            {expand ? text: text.slice(0,limit)}
            {text.length > limit && !expand && "..."}{/** If the text is longer than limit and not expanded, add "..." at the end */} 
        </Text>
        {/** This on;y renders if text is longer than limit*/}
        {text.length > limit && (
            <TouchableOpacity onPress={()=> setExpand(!expand)}>
                <Text className=" text-[#C67C4E]" style={{fontFamily:"Sora_600SemiBold",width:80}}>
                    {expand ? "Read less": "Read more"}
                </Text>
            </TouchableOpacity>
        )}
    </View>
)

} //reusable component which takes a mandatory "text

const CoffeeDetails :React.FC<CoffeeTypesProps> =()=>{
    const {addToCart} = useCart()
   
    const routes=useRouter()


    const { id } = useLocalSearchParams<{id:string}>(); //capture id from URL

      const[fontsLoaded]= useFonts({Sora_400Regular,Sora_700Bold, Sora_600SemiBold});
    
    
        if(!fontsLoaded){
        return null; //or a splash screen while fonts load
      }
    

  // Find the coffee from your SAMPLE_DATA by id
    const coffee = SAMPLE_DATA.find(item=>item.id===id);



    if(!coffee){
        return(
            <View>
                <Text>
                    Coffee not Found
                </Text>
            </View>
        )
    }

    return(
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <SafeAreaProvider>
                <SafeAreaView>
            {/** Header Section */}
            <View className="bg-inherit  flex-row justify-between top-68 pt-3 mt-20" style={{width:327,height:44}}>
                <Ionicons name="arrow-back" size={20} color="black" />
                <Text className="text-black leading-normal" style={{fontFamily:"Sora_600SemiBold",fontSize:16}}>Details</Text>
                          <Ionicons name="heart" color="black" size={20}  />
             </View>
             {/** image */}
             <View className="mt-10">
                <Image source={require('@/assets/images/coffee2.png')} style={{width:360, height:202}} className="rounded-xl" />
             </View>
             {/** Title part */}
             <View className=" mt-4 flex-row" style={{width:360}}>
                
                <View className="" style={{width:150}}>
                <Text style={{fontFamily:"Sora_600SemiBold",fontSize:20}}>{coffee.productName}</Text>
                <Text style={{fontFamily:"Sora_400Regular",fontSize:12}} className="text-[#A2A2A2] mb-4">Ice/Hot</Text>
                <Text>Ratings</Text> 
                </View>
                <View className="ml-20 flex-row gap-10 items-center pt-6 " >
                 <Ionicons name="home" color="#A2A2A2" size={20} className="-mt-8"/>
                <Ionicons name="heart" color="#A2A2A2" size={20}  className="-mt-8"/>
                <Ionicons name="bag" color="#A2A2A2" size={20} className="-mt-8"/>
                </View>

             </View>
             
             <View style={{width:350,height:1,borderColor:"black",marginTop:10,marginLeft:5,backgroundColor:"black"}}></View>

            {/** Details */}
            <View className=" mt-4  " style={{width:360}}>
                <Text style={{fontFamily:"Sora_600SemiBold",fontSize:20}}>Description</Text>
                <Text  style={{fontFamily:"Sora_400Regular",fontSize:14}} className="text-[#A2A2A2] mt-2 leading-relaxed flex flex-row">
                    <ReadMoreText text={coffee.details}/>
                    </Text>
            </View>

            {/** Sizes */}
            <View className=" mt-6" style={{width:360,height:102}}>
             <Text style={{fontFamily:"Sora_600SemiBold",fontSize:20,paddingLeft:2,paddingTop:5}}>Size</Text>
             <TouchableOpacity className="flex flex-row mt-4 gap-10 ml-4">
                <Text className="bg-[#ffff] text-black border border-[#A2A2A2] rounded-xl pt-3 pl-10" style={{fontFamily:"Sora_600SemiBold",fontSize:18,width:88,height:41}}>S</Text>
                <Text className="bg-[#ffff] text-black border border-[#A2A2A2] rounded-xl pt-3 pl-10" style={{fontFamily:"Sora_600SemiBold",fontSize:18,width:88,height:41}}>M</Text>
                <Text className="bg-[#ffff] text-black border border-[#A2A2A2] rounded-xl pt-3 pl-10" style={{fontFamily:"Sora_600SemiBold",fontSize:18,width:88,height:41}}>L</Text>
             </TouchableOpacity>
            </View>

            {/** buy */}

            <View className=" mt-3 flex flex-row gap-8 pt-8" style={{width:360,height:102}}>
            <View className=" -mt-6 ml-4">
               <Text style={{fontFamily:"Sora_400Regular", fontSize: 14,  }} className="text-[#A2A2A2]">Price</Text>
               <Text style={{fontFamily:"Sora_600SemiBold", fontSize: 20,  }} className="text-[#C67C4E]">${coffee.price}</Text>
            </View>

               <TouchableOpacity onPress={()=>{addToCart(coffee); routes.push('/order')}}>
                <Text className="bg-[#C67C4E] text-white  border-[#A2A2A2] rounded-2xl -mt-6 ml-14 pt-4 pl-20" style={{fontFamily:"Sora_700Bold",fontSize:18,width:217,height:56}}>Buy Now</Text>
               </TouchableOpacity>

            </View>

                
                      {/** <Image source={coffee.image} style={{ width: 200, height: 200, borderRadius: 12 }} />
      <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 16 }}>{coffee.name}</Text>
      <Text style={{ fontSize: 16, color: "#666" }}>{coffee.description}</Text>
      <Text style={{ fontSize: 18, marginTop: 8 }}>${coffee.price}</Text> */}       
           

                </SafeAreaView>
            </SafeAreaProvider>
        </View>
    )
}
export default CoffeeDetails;