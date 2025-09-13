import { Sora_400Regular, Sora_600SemiBold, Sora_700Bold, useFonts } from "@expo-google-fonts/sora";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { encode } from "base64-arraybuffer";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function MapScreen() {

  const [mapUrl, setMapUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    const fetchMap = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://maptoolkit.p.rapidapi.com/staticmap",
          params: {
            center: "48.20835,16.3725", // Vienna example
            zoom: "11",
            size: "640x480",
            maptype: "toursprung-terrain",
            format: "png",
          },
          headers: {
            "x-rapidapi-key": "2cc3d33939msh96d55ba56ee4fddp149d56jsn707dbe6419cb", 
            "x-rapidapi-host": "maptoolkit.p.rapidapi.com",
          },
          responseType: "arraybuffer"  as const, // important for image data
        };

        const response = await axios.request(options);

        // Convert the response to a base64 image
        
const base64Image = `data:image/png;base64,${encode(response.data)}`;
setMapUrl(base64Image);

        setMapUrl(base64Image);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMap();
  }, []);

      const[fontsLoaded]= useFonts({Sora_400Regular,Sora_700Bold, Sora_600SemiBold}); //fonts
  
  
      if(!fontsLoaded){
      return null; //or a splash screen while fonts load
    }



  if (loading) {
    return <ActivityIndicator size="large" color="#C67C4E" />;
  }


  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <SafeAreaProvider>
            <SafeAreaView>
                      {mapUrl && (
        <Image
          source={{ uri: mapUrl }}
          style={{ width: 520, height: 570, borderRadius: 10 }}
        />
      )}
      <View className=" self-center mt-1">
        <View className="text-red-600 flex justify-center">
            <Text style={{fontFamily:"Sora_600SemiBold",fontSize:16}}>10 Minutes Left</Text>
            <Text style={{fontFamily:"Sora_400Regular", fontSize:14}} className="-ml-4 " >Delivery to JL.Kipyego</Text>
        </View>
      </View>

              {/** Bars */}
        <View className=" mt-4 h-7 w-96 self-center flex flex-row gap-5">
          <View className="border border-[#36C07E] rounded-md mt-2 h-1 w-20 bg-[#36C07E]"></View>
          <View className="border border-[#36C07E] rounded-md mt-2 h-1 w-20 bg-[#36C07E]"></View>
          <View className="border border-[#36C07E] rounded-md mt-2 h-1 w-20 bg-[#36C07E]"></View>
          <View className="border border-[#000] rounded-md mt-2 h-1 w-20"></View>
        </View>
        {/** delivery message */}
        <View className="mt-5 pl-14 pr-2 flex flex-row border border-[#A2A2A2] rounded-xl gap-3 self-center h-20 w-96 ">
          <View className="mt-3 border border-[#A2A2A2] rounded-xl h-12 w-12 -ml-12 "><Ionicons name="bicycle" size={35} color="#C67C4E"/></View>
          <View className="mt-2">
            <Text style={{fontFamily:"Sora_600SemiBold",fontSize:16}}>Delivered your Order</Text>
            <Text style={{fontFamily:"Sora_400Regular",fontSize:14,color:"#A2A2A2"}}>We will deliver your goods to you in{"\n"} the shortest time possible</Text>
          </View>
        </View>

        <View className="mt-4 ml-16 pl-16 pt-2 flex-row justify-between gap-5 2] rounded-xl h-20 w-96">
          <View className="border border-[#A2A2A2] rounded-lg h-14 w-14 -ml-5"><Ionicons name="person" size={40} color="#A2A2A2"/></View>
          <View className=" pl-10 ">
            <View><Text style={{fontFamily:"Sora_600SemiBold",fontSize:16}}>Brooklyn Simmons</Text></View>
            <View><Text  style={{fontFamily:"Sora_400Regular",fontSize:12,color:"#A2A2A2"}}>Personal Courier</Text></View>
          </View>
          <View className="border border-[#A2A2A2] rounded-lg h-14 w-14 ml-12 "><Ionicons name="call" size={40} color="#A2A2A2"/></View>
        </View>


            </SafeAreaView>
        </SafeAreaProvider>
    </View>
  );
}
