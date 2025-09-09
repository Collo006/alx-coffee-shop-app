import { Sora_400Regular, Sora_700Bold, useFonts, Sora_600SemiBold } from "@expo-google-fonts/sora";
import { useRouter } from "expo-router";
import {  View, ImageBackground, StyleSheet, Dimensions, Text, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
const styles = StyleSheet.create({
  background:{
    flex:1,
    height:Dimensions.get("window").height,
    width: Dimensions.get("window").width
  }
})


export default function Index() {

  const[fontsLoaded]= useFonts({Sora_400Regular,Sora_700Bold, Sora_600SemiBold});

  const router= useRouter()

  if(!fontsLoaded){
    return null; //or a splash screen while fonts load
  }

  return (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",backgroundColor:"black"}}>

      <SafeAreaProvider>
        <SafeAreaView style={{flex:1}}>
         <ImageBackground source={require('@/assets/images/background-image.png')} resizeMode="cover" style={styles.background} >
         
         <View className="bg-transparent" style={{height:700,marginTop:100}}>
         <Text className="bg-transparent text-[#F9F2ED] text-center tracking-wider leading-normal pr-5" style={{ fontFamily: "Sora_600SemiBold", fontSize: 32, marginTop:430 }}>Fall in Love With{"\n"}Coffee in Blissful{"\n"}Delight!</Text> 
        
         <Text className="bg-transparent  text-[#A2A2A2] tracking-wide leading-normal text-center " style={{fontFamily:"Sora_400Regular",fontSize:14,marginTop:2}}>Welcome to our cozy coffee corner, where {"\n"} every cup is a delightful for you.</Text>
        
         <TouchableOpacity className="bg-[#C67C4E] border rounded-xl self-center" style={{marginTop:50}} onPress={()=>{router.push("/home")}}>
          <Text className="text-[#F9F2ED] leading-normal text-center pt-4" style={{fontFamily:"Sora_600SemiBold",fontSize:16,width:370,height:50}}>Get Started</Text>
         </TouchableOpacity>

         </View>

          </ImageBackground>
        </SafeAreaView>
      </SafeAreaProvider>
    </View>

    ) 
}
