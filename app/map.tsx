import { Sora_400Regular, Sora_600SemiBold, Sora_700Bold, useFonts } from "@expo-google-fonts/sora";
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
          style={{ width: 520, height: 440, borderRadius: 10 }}
        />
      )}
      <View className=" self-center mt-1">
        <View className="text-red-600 flex justify-center">
            <Text style={{fontFamily:"Sora_600SemiBold",fontSize:16}}>10 Minutes Left</Text>
            <Text style={{fontFamily:"Sora_400Regular", fontSize:14}}>Delivery to JL.Kipyego</Text>
        </View>

      </View>

            </SafeAreaView>
        </SafeAreaProvider>
    </View>
  );
}
