import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0D0D0D",
    paddingTop: 72,
  },
  formContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 24,
    marginTop: 40,
    marginHorizontal: 24,
  },
  formInput: {
    backgroundColor: "#262626",
    color: "#F2F2F2",
    padding: 16,
    paddingRight: 0,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 6,
    flex: 1,
  },
  formButton: {
    width: 58,
    height: 58,
    padding: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
  },
})
