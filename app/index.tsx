import { Field } from "@/components/Field";
import { Colors } from "@/constants/Colors";
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
      <Text style={styles.h1}>Campo minado</Text>
      <View style={styles.field}>
        <Field amount={77} />
      </View>
      <Text style={styles.footer}>by Ryan Wyllyan Ribeiro Inácio - 2024</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImg: {
    height: 300,
    width: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.background,
    height: "100%",
    width: "100%",
  },
  h1: {
    fontSize: 30,
    color: Colors.bluelogo,
    marginVertical: 15,
  },
  field: {
    flex: 1,
    width: "88%",
    backgroundColor: Colors.bluex,
    marginBottom: 40,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    textAlign: "center",
    padding: 10,
    fontStyle: "italic",
    color: Colors.gray,
  },
});
