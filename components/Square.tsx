import { Colors } from "@/constants/colors";
import {
  countClosed,
  countCorrectFlags,
  createField,
  openMines,
  openSquare,
  quantMines,
} from "@/constants/functions";
import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Field } from "./Field";

export type Square = {
  row: number;
  column: number;
  state: "open" | "flag" | "closed";
  hasMine: boolean;
  nearMines: number;
};

type SquareProps = {
  square: Square;
  field: Field;
  setField: (field: Field) => void;
};

export const Square = ({ square, field, setField }: SquareProps) => {
  const verifyWin = (newField: Field) => {
    if (countClosed(newField) + countCorrectFlags(newField) === quantMines) {
      setField(newField);
      Alert.alert("Olha só!😱", "Parabéns 🥳🥳🥳 você venceu 💙💙💙", [
        {
          text: "Jogar Novamente",
          onPress: () => setField(createField(15, 10)),
        },
      ]);
    } else setField(newField);
  };

  return (
    <Pressable
      onPress={() => {
        const newField = [...field];
        if (newField[square.row][square.column].hasMine) {
          openMines(newField);
          setField(newField);
          Alert.alert("THE END!🥺", "Ihhh você EXplodiu! 😂😂😂", [
            {
              text: "Jogar Novamente",
              onPress: () => setField(createField(15, 10)),
            },
          ]);
        } else {
          openSquare(newField, square.row, square.column);
          verifyWin(newField);
        }
      }}
      onLongPress={() => {
        const newField = [...field];
        newField[square.row][square.column].state =
          square.state === "flag" ? "closed" : "flag";
        verifyWin(newField);
      }}
      style={[styles.square, square.state === "open" ? styles.open : {}]}
    >
      {square.state === "open" ? (
        square.hasMine ? (
          <Image
            source={require("@/assets/images/react-logo.png")}
            style={styles.image}
          />
        ) : (
          <View>
            {square.nearMines == 0 ? (
              <View></View>
            ) : (
              <Text style={styles.text}>{square.nearMines}</Text>
            )}
          </View>
        )
      ) : square.state === "flag" ? (
        <Image
          source={require("@/assets/images/bandeirex.png")}
          style={styles.image}
        />
      ) : (
        <View></View>
      )}
    </Pressable>
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
  open: {
    backgroundColor: Colors.bgopen,
  },
});
