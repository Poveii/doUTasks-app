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
        <FlatList
          data={tasks}
          ListHeaderComponent={() => (
            <View style={styles.infoContainer}>
              <View style={styles.infoBox}>
                <Text style={[styles.infoText, { color: "#4EA8DE" }]}>
                  Criadas
                </Text>
                <Text style={styles.infoNumber}>{tasksCreated}</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={[styles.infoText, { color: "#8284FA" }]}>
                  Concluídas
                </Text>
                <Text style={styles.infoNumber}>{tasksCompleted}</Text>
              </View>
            </View>
          )}
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
                      color="#4EA8DE"
                    />
                  ) : (
                    <Icon
                      name="circle"
                      size={20}
                      color="#4EA8DE"
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
                    color="#808080"
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
                color="#3D3D3D"
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
