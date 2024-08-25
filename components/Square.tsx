import { Colors } from "@/constants/Colors";
import { Image, StyleSheet, View } from "react-native";

export const Square = () => {
  return (
    <View style={styles.square}>
      {Math.random() > 0.5 ? (
        <Image
          source={require("@/assets/images/bandeirex.png")}
          style={styles.image}
        />
      ) : (
        <Image
          source={require("@/assets/images/react-logo.png")}
          style={styles.image}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    width: "10%",
    aspectRatio: 1,
    backgroundColor: Colors.background,
    borderColor: Colors.bluex,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "80%",
    width: "80%",
  },
});
