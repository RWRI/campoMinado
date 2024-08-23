import { Colors } from "@/constants/Colors";
import { StyleSheet, View } from "react-native";

export const Square = () => {
  return <View style={styles.square}></View>;
};

const styles = StyleSheet.create({
  square: {
    width: 50,
    height: 50,
    backgroundColor: Colors.background,
    margin: 5,
  },
});
