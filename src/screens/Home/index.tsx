import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import Icon from "@expo/vector-icons/Feather";

import { Logo } from "../../components/Logo";

import { styles } from "./styles";

export function Home() {
  const [focusInput, setFocusInput] = useState(false)

  return (
    <View style={styles.container}>
      <Logo />

      <View style={styles.formContainer}>
        <TextInput
          style={[styles.formInput, { borderColor: focusInput ? "#5E60CE" : "#0D0D0D" }]}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onFocus={() => setFocusInput(true)}
        />
        <TouchableOpacity style={styles.formButton} activeOpacity={0.7}>
          <Icon
            name="plus-circle"
            size={16}
            color="#FFFFFF"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tasksContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.infoBox}>
            <Text style={[styles.infoText, { color: "#4EA8DE" }]}>
              Criadas
            </Text>
            <Text style={styles.infoNumber}>0</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={[styles.infoText, { color: "#8284FA" }]}>
              Concluídas
            </Text>
            <Text style={styles.infoNumber}>0</Text>
          </View>
        </View>

        <View style={styles.tasksList}>
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
      </View>
    </View>
  )
}
