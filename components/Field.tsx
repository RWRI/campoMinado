import { StyleSheet, View } from "react-native";
import { Square } from "./Square";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { createField } from "@/constants/functions";

type FieldProps = {
  rows: number;
  cols: number;
};

export type Field = Square[][];

export const Field = ({ rows, cols }: FieldProps) => {
  const field = createField(rows, cols);
  return (
    <View style={styles.field}>
      {field.map((row, i) =>
        row.map((square, j) => <Square key={`${i}-${j}`} {...square} />)
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
