import { Ionicons } from "@expo/vector-icons";
import { Image, SafeAreaView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
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
    <View className=" mt-4 mb-6 flex-row justify-between">
        <View className= " mt-1  flex-row gap-5 ">
            <Image source={require('@/assets/images/coffee2.png')} style={{width:54,height:54,borderRadius:16}}/>
            <View className="pt-3">
            <Text style={{fontFamily:"Sora_600SemiBold",fontSize:18}}>Coffee Mocha</Text>
            <Text style={{fontFamily:"Sora_400Regular",fontSize:12,color:"#A2A2A2"}}>Deep Foam</Text>
            </View>
        </View>

        <View className=" mt-1 mr-6 pt-4 flex-row">
          <Ionicons name="add" size={20}/>
          <Text style={{fontFamily:"Sora_600SemiBold",fontSize:20}}>1</Text>
          <Ionicons name="remove" size={20}/>
        </View>

    </View>

        <View style={{width:350,height:1,borderColor:"black",marginTop:15,marginLeft:5,backgroundColor:"black"}}></View>
        {/**Discount */}
        <View style={{width:350,height:44}} className="border border-[#A2A2A2] rounded-xl flex-row gap-5 mt-4 pt-2">
            <Ionicons name="pricetag" size={20} style={{marginLeft:10}} color="#C67C4E"/>
            <Text style={{fontFamily:"Sora_600SemiBold",fontSize:18,color:"#A2A2A2"}} >1 Discount is Applied</Text>
            <Ionicons name="arrow-forward" size={20} style={{marginLeft:80}}/>
        </View>


        </SafeAreaView>   
    </SafeAreaProvider>
  </View> 
    )
}