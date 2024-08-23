import { StyleSheet, View } from "react-native";
import { Square } from "./Square";

type FieldProps = {
  amount: number;
};

export const Field = ({ amount }: FieldProps) => {
  const styles = StyleSheet.create({
    field: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  });

  return (
    <View style={styles.field}>
      {Array(amount)
        .fill(0)
        .map((_, index) => (
          <Square />
        ))}
    </View>
  );
};
