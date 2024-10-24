import { FlatList, StyleSheet, View, Modal,Text,ScrollView,Pressable} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState,useEffect } from "react";
type MainProps = {
  navigation: any;
};

export type users={
  id: string;
  name: string;
  email: string;
  gender: string;
  status?: string;
}
export default function Main(props: MainProps) {
  const [modelisVisible, setmodelisVisible]=useState(false)

  const [isLoading, setLoading] = useState(true);
  
  const [data, setData] = useState(null);
  const getDataFromServer = async () => {
    try {
        const response = await fetch('https://gorest.co.in/public/v2/users');
        const data = await response.json();
        setData(data);
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
}

useEffect(() => {
  getDataFromServer();
}, []);

  const ListInitial:users[]=[
    { name: 'Ivanov', email: 'q1@q.ru', id: '1', gender: 'Male' },
    { name: 'Petrov', email: 'q2@q.ru', id: '2', gender: 'Male' },
    { name: 'Sidorov', email: 'q3@q.ru', id: '3', gender: 'Male' },

  ]
  const [usersArray,setusersArray]=useState(ListInitial)

  const loadScene = (item:users) => {
    props.navigation.navigate("FullInfoScreenName",item);
  };

  //const loadingJSX = <ActivityIndicator />;
  //return isLoading ? loadingJSX : returnJSX;
  return (
    <View style={styles.container}>
     <FlatList data={usersArray} renderItem={({item})=>
        <ScrollView style={styles.itemName}>
          <Pressable onPress={()=>loadScene(item)}>{item.name}</Pressable>
        </ScrollView>
      }/>
      <FlatList data={data} renderItem={({item})=>
        <ScrollView style={styles.itemName}>
          <Pressable onPress={()=>loadScene(item)}>{item.name}</Pressable>
        </ScrollView>
      }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  item:{
    padding: 10,
    fontFamily: "mt-bolt",
  },
  itemName:{
    padding: 10,
    fontFamily: "lora",
  },
  img:{
    width: "100%",
    height: 250
  }
});
