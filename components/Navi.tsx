import { StyleSheet} from "react-native";
import Main from "./Main";
import FullInfo from "./Detail";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navi() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreenName"
          component={Main}
          options={{ title: "Главная" }}
        />
        <Stack.Screen
          name="FullInfoScreenName"
          component={FullInfo}
          options={{ title: "Полная информация" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
