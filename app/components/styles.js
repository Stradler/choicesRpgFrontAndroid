import { StyleSheet, Dimensions } from "react-native";
export const styles = StyleSheet.create({
  gamewindow: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: Dimensions.get("window").width,
    marginTop: Dimensions.get("window").height / 5
  },
  choiceButton: {
    flexGrow: 1,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  choiceButton__text: {
    fontSize: 40
  }
});
