import { SAMPLE_DATA } from "@/constants/home";
import { CoffeeTypesProps } from "@/interfaces";
import { Sora_400Regular, Sora_600SemiBold, Sora_700Bold, useFonts } from "@expo-google-fonts/sora";
import { Ionicons } from "@expo/vector-icons";
import { RelativePathString, useRouter } from "expo-router";
import React from "react";
import { Dimensions, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Home :React.FC<CoffeeTypesProps> =()=>{
  
  const router=useRouter()
  
  const[fontsLoaded]= useFonts({Sora_400Regular,Sora_700Bold, Sora_600SemiBold});


    if(!fontsLoaded){
    return null; //or a splash screen while fonts load
  }


    return(
        <View style={{flex:1,justifyContent: "center",
        alignItems: "center"}} >
            <SafeAreaProvider>
                <SafeAreaView style={{flex:1}}>
                
                 <View style={{height:300, width: Dimensions.get("window").width}} className="bg-[#111111] -mt-8">
               {/* Location Tab*/}
              <View className="w-52 h-11 top-20 left-6 ">
                <Text className="text-[##A2A2A2] leading-relaxed tracking-wider" style={{fontFamily:"Sora_400Regular",fontSize:14}}>Location</Text>
              </View>
              {/*Search Bar*/ }
              <View className="flex-row bg-[#2A2A2A] border border-[#2A2A2A] rounded-2xl w-4/5 h-14 top-32 left-6 -ml-3">
                <Ionicons name="search" size={20} color="white" className="mt-3 ml-1"/>
               <TextInput placeholder="Search coffee"  placeholderTextColor="#A2A2A2" className="bg-[#2A2A2A] text-[#A2A2A2] rounded-xl w-52 h-12 pt-1 leading-normal pl-2 mt-1" style={{fontFamily:"Sora_400Regular",fontSize:14}} />
              
               <View className="bg-[#C67C4E] rounded-xl w-12 h-12 ml-40 mt-1">
               <Ionicons name="filter" size={20} color="white" className=" mt-3 text-center"/>

               </View>

              </View>
            </View>
            {/* Banner */}
          <Image source={require('@/assets/images/Banner-1.png')}  style={{ width: 380, height: 150 }} className="-mt-24 self-center  rounded-xl"/>
            {/*Bottom Section */}

            {/* All Coffee*/}
        
              <View className="flex flex-row h-10 mt-2" >
               <TouchableOpacity className="bg-[#EDEDED] ml-6 pl-2 pt-2  rounded-lg " style={{width:71, height:30}}>
                <Text style={{fontFamily:"Sora_600SemiBold", fontSize:14}} className="color-[#313131]">All Coffee</Text>
              </TouchableOpacity>
              {/*Machiato*/}
              <TouchableOpacity className="bg-[#EDEDED] ml-6 pl-2 pt-2  rounded-lg " style={{width:71, height:30}}>
                <Text style={{fontFamily:"Sora_600SemiBold", fontSize:14}} className="color-[#313131]">Machiato</Text>
              </TouchableOpacity>
              {/*Latte*/}
              <TouchableOpacity className="bg-[#EDEDED] ml-6 pl-2 pt-2  rounded-lg " style={{width:71, height:30}}>
                <Text style={{fontFamily:"Sora_600SemiBold", fontSize:14}} className="color-[#313131]">Latte</Text>
              </TouchableOpacity>
              {/*Americano*/}
              <TouchableOpacity className="bg-[#EDEDED] ml-6 pl-2 pt-2  rounded-lg " style={{width:73, height:30}}>
                <Text style={{fontFamily:"Sora_600SemiBold", fontSize:14}} className="color-[#313131]">Americano</Text>
              </TouchableOpacity>
              </View>
              
              {/*Image Section*/}

              <ScrollView className=" flex-1 p-4">
            <View className="flex-row flex-wrap justify-between mt-3 ">

            {SAMPLE_DATA.map((item)=>(

          <View key={item.id} className="mb-6 w-[48%]" >
                {/*Image 1*/}
                <View className=" h-64 w-auto">
                  <TouchableOpacity onPress={() => router.push(`/details/${item.id}` as RelativePathString)}>
                <Image source={item.image} style={{width:160, height:148}} className=" rounded-xl self-center"/>

                <Text style={{fontFamily:"Sora_600SemiBold", fontSize:16}} className=" leading-normal ml-3">{item.name}</Text>
                <Text style={{fontFamily:"Sora_400Regular", fontSize:12}} className="leading-normal ml-3 text-[#A2A2A2]">{item.description}</Text>
                </TouchableOpacity>
                <View className=" h-auto w-42 flex flex-row ">
                  <Text style={{fontFamily:"Sora_600SemiBold",fontSize:18}} className="leading-normal text-[#050505] ml-3">${item.price}</Text>
                <View style={{backgroundColor: "#C67C4E",borderRadius: 8,padding: 6,marginLeft:100}}><Ionicons name="add" size={18} color="white" /></View>                
                </View>
                
                </View>


                 
              </View> ))}
            </View>
             </ScrollView>

            {/* Footer */}
            <View className="absolute bottom-0 left-0 right-0 flex-row justify-around bg-[#FFFFFF] border-gray-300 h-32 items-center">
          <Ionicons name="home" color="#A2A2A2" size={20} className="-mt-8"/>
          <Ionicons name="heart" color="#A2A2A2" size={20}  className="-mt-8"/>
          <Ionicons name="bag" color="#A2A2A2" size={20} className="-mt-8"/>
          <Ionicons name="notifications" color="#A2A2A2" size={20} className="-mt-8"/>

        </View>
        </SafeAreaView>
            </SafeAreaProvider>
        </View>
    );
};
export default Home;