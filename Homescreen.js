import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Keyboard, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import Task from './Task';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import LoginScreen from './DetailScreen'
export default function HomeScreen({ navigation }) {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const getTodo = async () => {
        try {
            let jsonValue = await AsyncStorage.getItem('index');
            let getvalue = JSON.parse(jsonValue)


            // return (setTaskItems([...taskItems, getvalue]));
        } catch (e) { alert(e) }

    }
    useEffect(() => getTodo)
    //thinking of using useEffect to update

    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null);
        AsyncStorage.setItem('index', JSON.stringify(taskItems));
        console.log('the stored items are', taskItems);
    }

    const completeTask = (index) => {
        let itemCopy = [...taskItems];
        itemCopy.splice(index, 1);
        setTaskItems(itemCopy);
    }

    return (
        <View style={styles.container}>

            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1
                }}
                keyboardShouldPersistTaps='handled'
            >
                <View style={styles.tasksWrapper}>
                    {/* <TouchableOpacity onPress={() => navigation.navigate("Details")}>
                        <Text style={styles.sectionTitle}> Today's tasks </Text>
                    </TouchableOpacity> */}
                    <View style={styles.items}>
                        {
                            taskItems.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                        <Task text={item} />
                                    </TouchableOpacity>
                                )
                            })
                        }

                    </View>
                </View>
            </ScrollView>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeWrapper}
            >
                <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebd6f5',
    },
    tasksWrapper: {
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    items: {
        marginTop: 30,
    },
    writeWrapper: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,

    },
    addText: {
    },
});
