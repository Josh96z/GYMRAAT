import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font"; 
import LoginScreen from "./screens/Login";
import SignUpScreen from "./screens/Cadastre-Se";
import UserProfileScreen from "./screens/InformacoesDoUsuaRio";
import HomeScreen from "./screens/Home"


const Stack = createStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  
  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  
  if (error) {
    console.error("Erro ao carregar fontes:", error);
  }

 
  if (!fontsLoaded) {
    
    return null;
  }

  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
};

export default App;
