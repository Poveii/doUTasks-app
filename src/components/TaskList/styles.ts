import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tasksParent: {
    flex: 1,
    width: "100%",
    backgroundColor: "#1A1A1A",
    marginTop: -32,
    paddingHorizontal: 24,
    zIndex: -1,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    marginBottom: 20,
  },
  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  infoText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  infoNumber: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    fontWeight: "bold",
    fontSize: 12,
    backgroundColor: "#333333",
    color: "#D9D9D9",
    borderRadius: 9999,
  },
  tasksContainer: {
    marginTop: 20,
  },
  emptyTasksContainer: {
    alignItems: "center",
    gap: 16,
    paddingVertical: 48,
    borderTopWidth: 1,
    borderColor: "#333333",
  },
  emptyTasksListText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#808080",
  },
  tasksList: {
    gap: 8,
  },
  taskItem: {
    width: "100%",
    maxHeight: 64,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#262626",
    padding: 12,
    paddingRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 8,
  },
  taskText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    color: "#F2F2F2",
  },
  completedTaskText: {
    textDecorationLine: "line-through",
    color: "#808080",
  },
})
