import { Pressable, StyleSheet, Text, View,Image,ScrollView } from "react-native";

type FullInfoProps = {
  navigation: any;
  route: any
};

export default function FullInfo(props: FullInfoProps) {
  const goBack = () => {
    props.navigation.goBack();
  };

  return (
    <ScrollView>
      <Text style={styles.item}>Имя: {props.route.params.name}</Text>
      <Text style={styles.item}>Почта: {props.route.params.email}</Text>
      <Text style={styles.item}>ID: {props.route.params.id}</Text>
      <Text style={styles.item}>Пол: {props.route.params.gender}</Text>
      <View style={styles.container}>
      <Pressable onPress={goBack}>Назад</Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  disc:{
    fontFamily: "mt-light",
  },
  item:{
    padding: 10,
    fontFamily: "mt-bolt",
  },
  img:{
    width: "100%",
    height: 250 
  }
});
