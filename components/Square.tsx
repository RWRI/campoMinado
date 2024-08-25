import { Colors } from "@/constants/colors";
import { Image, StyleSheet, Text, View } from "react-native";

export type Square = {
  row: number;
  column: number;
  state: "open" | "flag" | "closed";
  hasMine: boolean;
  nearMines: number;
};

export const Square = ({ state, hasMine, nearMines }: Square) => {
  return (
    <View style={styles.square}>
      {state === "open" ? (
        hasMine ? (
          <Image
            source={require("@/assets/images/react-logo.png")}
            style={styles.image}
          />
        ) : (
          <View>
            {nearMines == 0 ? (
              <View></View>
            ) : (
              <Text style={styles.text}>{nearMines}</Text>
            )}
          </View>
        )
      ) : state === "flag" ? (
        <Image
          source={require("@/assets/images/bandeirex.png")}
          style={styles.image}
        />
      ) : (
        <View></View>
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
  text: {
    color: Colors.bluelogo,
    fontSize: 20,
  },
});
