import {
  Alert,
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import Icon from "@expo/vector-icons/Feather";

import { Logo } from "../../components/Logo";

import { styles } from "./styles";

interface taskModel {
  text: string
  isCompleted: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<taskModel[]>([
    {
      text: "Teste",
      isCompleted: false,
    },
    {
      text: "Mais um teste",
      isCompleted: false,
    },
    {
      text: "Me complete",
      isCompleted: false,
    },
  ])
  const [focusInput, setFocusInput] = useState(false)
  const [textInput, setTextInput] = useState("")

  function addTask(taskText: string) {
    const task = {
      text: taskText,
      isCompleted: false,
    }
    setTasks((state) => [...state, task])
    setTextInput("")
    setFocusInput(false)
    Keyboard.dismiss()
  }

  function removeTask(taskId: number) {
    Alert.alert(
      "Excluir tarefa",
      "Deseja deletar a tarefa?",
      [
        {
          text: "Não",
        },
        {
          text: "Sim",
          onPress: () => {
            setTasks((state) => (
              state.filter((_, index) => {
                return index !== taskId
              })
            ))
            Alert.alert("Tarefa excluída", "A tarefa foi deletada.")
          },
        },
      ]
    )
  }

  function completeTask(taskId: number) {
    setTasks((state) => (
      state.map((item, index) => {
        if (index === taskId) {
          item.isCompleted = !item.isCompleted
        }
        return item
      })
    ))
  }

  const tasksCreated = tasks.length
  const tasksCompleted = tasks.filter((item) => {
    return item.isCompleted === true
  }).length

  return (
    <View style={styles.container}>
      <Logo />

      <View style={styles.formContainer}>
        <TextInput
          style={[
            styles.formInput,
            {
              borderColor: focusInput ? 
                "#5E60CE" : 
                "#0D0D0D"
            },
          ]}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onFocus={() => setFocusInput(true)}
          onChangeText={(text) => setTextInput(text)}
          value={textInput}
        />
        <TouchableOpacity 
          style={styles.formButton} 
          activeOpacity={0.7}
          onPress={() => addTask(textInput)}
        >
          <Icon
            name="plus-circle"
            size={16}
            color="#FFFFFF"
          />
        </TouchableOpacity>
      </View>

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
                    onPress={() => completeTask(index)}
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
                  <Text style={styles.taskText}>{item.text}</Text>
                  <TouchableOpacity
                    onPress={() => removeTask(index)}
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
    </View>
  )
}
