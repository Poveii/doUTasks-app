import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tasksParent: {
    flex: 1,
    width: "100%",
    backgroundColor: "#1F1D20",
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
    backgroundColor: "#38332E",
    color: "#D9D9D9",
    borderRadius: 9999,
  },
  tasksContainer: {
    flex: 1,
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
    color: "#787068",
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
    backgroundColor: "#2C2926",
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#38332E",
    borderRadius: 8,
  },
  taskText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    color: "#F5F5F5",
  },
  completedTaskText: {
    textDecorationLine: "line-through",
    color: "#787068",
  },
})
