import {
  Alert,
  Keyboard,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import Icon from "@expo/vector-icons/Feather";

import { Logo } from "../../components/Logo";
import { TaskList } from "../../components/TaskList";

import { styles } from "./styles";

export interface TaskModel {
  text: string
  isCompleted: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<TaskModel[]>([])

  const [focusInput, setFocusInput] = useState(false)
  const [textInput, setTextInput] = useState("")

  function handleAddTask(taskText: string) {
    if (textInput.length <= 0) return Alert.alert(
      "Você não digitou o nome da tarefa",
      "Digite o nome da tarefa antes de adicionar."
    )

    const task = {
      text: taskText,
      isCompleted: false,
    }
    setTasks((state) => [...state, task])
    setTextInput("")
    setFocusInput(false)
    Keyboard.dismiss()
  }

  function handleRemoveTask(taskId: number) {
    const selectedTask = tasks.filter((_, index) => index === taskId)[0]

    Alert.alert(
      "Excluir tarefa",
      `Deseja deletar a tarefa "${selectedTask.text}"?`,
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
            Alert.alert("Tarefa excluída", `A tarefa "${selectedTask.text}" foi deletada.`)
          },
        },
      ]
    )
  }

  function handleCompleteTask(taskId: number) {
    setTasks((state) => (
      state.map((item, index) => {
        if (index === taskId) {
          item.isCompleted = !item.isCompleted
        }
        return item
      })
    ))
  }

  return (
    <View style={styles.container}>
      <Logo />

      <View style={styles.formContainer}>
        <TextInput
          style={[
            styles.formInput,
            {
              borderColor: focusInput ? 
                "#FDC221" : 
                "#0B0A09"
            },
          ]}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#787068"
          onFocus={() => setFocusInput(true)}
          onChangeText={(text) => setTextInput(text)}
          value={textInput}
        />
        <TouchableOpacity 
          style={styles.formButton} 
          activeOpacity={0.7}
          onPress={() => handleAddTask(textInput)}
        >
          <Icon
            name="plus-circle"
            size={18}
            color="#F5F5F5"
          />
        </TouchableOpacity>
      </View>

      <TaskList
        tasks={tasks}
        onRemoveTask={handleRemoveTask}
        onCompleteTask={handleCompleteTask}
      />
    </View>
  )
}
