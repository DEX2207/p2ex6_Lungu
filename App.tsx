import Navi from "./components/Navi";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font"

const fonts=()=>
  Font.loadAsync({
    "mt-bolt":require('./assets/Fonts/Montserrat/Montserrat-Bold.ttf'),
    "mt-light":require('./assets/Fonts/Montserrat/Montserrat-Light.ttf'),
    "lora":require('./assets/Fonts/Lora/Lora-MediumItalic.ttf'),
  })


export default function App() {
  const [font,setfont]=useState(false);
  
  const jsxnavi=<Navi/>;

  const jsxLoading=(
  <AppLoading 
  startAsync={fonts}
  onFinish={()=>setfont(true)}
  onError={()=>{}}
  />
  );
  return font ? jsxnavi:jsxLoading;
}
