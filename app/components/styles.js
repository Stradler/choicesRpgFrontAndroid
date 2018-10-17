import { StyleSheet, Dimensions } from "react-native";
export const styles = StyleSheet.create({
  gamewindow: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    width: Dimensions.get("window").width,
    marginTop: Dimensions.get("window").height / 3
  }
});
