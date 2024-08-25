import { StyleSheet, View } from "react-native";
import { Square } from "./Square";
import { Colors } from "react-native/Libraries/NewAppScreen";

type FieldProps = {
  amount: number;
};

export const Field = ({ amount }: FieldProps) => {
  return (
    <View style={styles.field}>
      {Array(amount)
        .fill(0)
        .map((_, i) => (
          <Square key={i} />
        ))}
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
