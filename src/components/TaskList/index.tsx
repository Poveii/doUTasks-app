import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Icon from "@expo/vector-icons/Feather";

import { TaskModel } from "../../screens/Home";

import { styles } from "./styles";

interface TaskListProps {
  tasks: TaskModel[]
  onCompleteTask: (taskId: number) => void
  onRemoveTask: (taskId: number) => void
}

export function TaskList({
  tasks,
  onCompleteTask,
  onRemoveTask,
}: TaskListProps) {
  const tasksCreated = tasks.length
  const tasksCompleted = tasks.filter((item) => {
    return item.isCompleted === true
  }).length

  return (
    <View style={styles.tasksParent}>
      <View style={styles.tasksContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.infoBox}>
            <Text style={[styles.infoText, { color: "#FDC221" }]}>
              Criadas
            </Text>
            <Text style={styles.infoNumber}>{tasksCreated}</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={[styles.infoText, { color: "#E28B28" }]}>
              Concluídas
            </Text>
            <Text style={styles.infoNumber}>{tasksCompleted}</Text>
          </View>
        </View>
        <FlatList
          data={tasks}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <View
                key={index}
                style={styles.taskItem}
              >
                <TouchableOpacity
                  onPress={() => onCompleteTask(index)}
                >
                  {item.isCompleted ? (
                    <Icon
                      name="check-circle"
                      size={20}
                      color="#E28B28"
                    />
                  ) : (
                    <Icon
                      name="circle"
                      size={20}
                      color="#FDC221"
                    />
                  )}
                </TouchableOpacity>
                <Text style={[
                  styles.taskText,
                  item.isCompleted && styles.completedTaskText
                ]}>
                  {item.text}
                </Text>
                <TouchableOpacity
                  onPress={() => onRemoveTask(index)}
                >
                  <Icon
                    name="trash-2"
                    size={18}
                    color="#787068"
                  />
                </TouchableOpacity>
              </View>
            )
          }}
          ListEmptyComponent={() => (
            <View style={styles.emptyTasksContainer}>
              <Icon
                name="clipboard"
                size={64}
                color="#3C3834"
              />
              <View>
                <Text style={[styles.emptyTasksListText, { fontWeight: "bold" }]}>
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.emptyTasksListText}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  )
}
