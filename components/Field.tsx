import { StyleSheet, View } from "react-native";
import { Square } from "./Square";
import { createField } from "@/constants/functions";
import { useState } from "react";

type FieldProps = {
  rows: number;
  cols: number;
};

export type Field = Square[][];

export const Field = ({ rows, cols }: FieldProps) => {
  const [field, setField] = useState<Field>(createField(rows, cols));

  return (
    <View style={styles.field}>
      {field.map((row, i) =>
        row.map((square, j) => (
          <Square
            key={`${i}-${j}`}
            square={square}
            field={field}
            setField={setField}
          />
        ))
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
