import { Field } from "@/components/Field";
import { Colors } from "@/constants/colors";
import { quantCols, quantRows } from "@/constants/functions";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.headerImg}>
        <Image
          source={require("@/assets/images/headerEx.png")}
          style={{ height: "100%", width: "100%" }}
        />
      </View>
      <Text style={styles.h1}>Campo minadex</Text>
      <View style={styles.field}>
        <Field rows={quantRows} cols={quantCols} />
      </View>
      <Text style={styles.footer}>by Ryan Wyllyan Ribeiro Inácio - 2024</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImg: {
    height: "25%",
    width: "100%",
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.background,
    height: "100%",
    width: "100%",
  },
  h1: {
    fontSize: 32,
    color: Colors.bluelogo,
    margin: 5,
    textAlign: "center",
    maxHeight: "5%",
  },
  field: {
    maxWidth: "90%",
    maxHeight: "65%",
    paddingHorizontal: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  footer: {
    width: "100%",
    textAlign: "center",
    padding: 10,
    fontStyle: "italic",
    color: Colors.gray,
  },
});
