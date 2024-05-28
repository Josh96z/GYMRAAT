import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import CheckBox from '../components/CheckBox'; 
import { useNavigation } from "@react-navigation/native";

export default (props) => {
    const [gender, setGender] = useState(null); 
    const navigation = useNavigation(); 

    
    const handleFinishPress = () => {
        navigation.navigate('Home'); 
    };

    return (
        <SafeAreaView 
            style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
            }}>
            <ScrollView  
                style={{
                    flex: 1,
                    backgroundColor: "#757373",
                    paddingTop: 59,
                    paddingBottom: 72,
                }}>
                <Text 
                    style={{
                        color: "#000000",
                        fontSize: 24,
                        marginBottom: 79,
                        marginHorizontal: 27,
                    }}>
                    {"INFORMAÇÕES DO USUÁRIO"}
                </Text>
                <View 
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 7,
                        marginHorizontal: 70,
                    }}>
                    <Text 
                        style={{
                            color: "#000000",
                            fontSize: 12,
                            marginRight: 4,
                            flex: 1,
                        }}>
                        {"ALTURA"}
                    </Text>
                    <Text 
                        style={{
                            color: "#000000",
                            fontSize: 12,
                        }}>
                        {"PESO"}
                    </Text>
                </View>
                <View style={{ flexDirection: "row", marginBottom: 19, paddingHorizontal: 45 }}>
                    <TextInput
                        style={{ 
                            backgroundColor: "#F0ECE3",
                            borderColor: "#000000",
                            borderRadius: 12,
                            borderWidth: 1,
                            width: 93,
                            height: 29,
                            paddingVertical: 0,
                            paddingHorizontal: 10,
                            marginRight: 90,
                        }}
                        placeholder="Cm"
                    />
                    <TextInput
                        style={{ 
                            backgroundColor: "#F0ECE3",
                            borderColor: "#000000",
                            borderRadius: 12,
                            borderWidth: 1,
                            width: 93,
                            height: 29,
                            paddingVertical: 0,
                            paddingHorizontal: 10,
                        }}
                        placeholder="Kg"
                    />
                </View>
                <View 
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 9,
                        marginHorizontal: 66,
                    }}>
                    <Text 
                        style={{
                            color: "#000000",
                            fontSize: 12,
                        }}>
                        {"IDADE"}
                    </Text>
                    <Text 
                        style={{
                            color: "#000000",
                            fontSize: 12,
                            width: 48,
                        }}>
                        {"META DE PESO"}
                    </Text>
                </View>
                <View style={{ flexDirection: "row", marginBottom: 19, paddingHorizontal: 45 }}>
                    <TextInput
                        style={{ 
                            backgroundColor: "#F0ECE3",
                            borderColor: "#000000",
                            borderRadius: 12,
                            borderWidth: 1,
                            width: 93,
                            height: 29,
                            paddingVertical: 0,
                            paddingHorizontal: 10,
                            marginRight: 90,
                        }}
                        placeholder="anos"
                    />
                    <TextInput
                        style={{ 
                            backgroundColor: "#F0ECE3",
                            borderColor: "#000000",
                            borderRadius: 12,
                            borderWidth: 1,
                            width: 93,
                            height: 29,
                            paddingVertical: 0,
                            paddingHorizontal: 10,
                        }}
                        placeholder="Kg"
                    />
                </View>
                
                <Text 
                    style={{
                        color: "#000000",
                        fontSize: 12,
                        marginBottom: 17,
                        marginHorizontal: 116,
                    }}>
                    {"GÊNERO À NASCENÇA"}
                </Text>
                <View 
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 39,
                        marginHorizontal: 68,
                    }}>
                    <CheckBox isChecked={gender === 'FEMININO'} onChange={() => setGender('FEMININO')} />
                    <Text 
                        style={{
                            color: "#000000",
                            fontSize: 12,
                        }}>
                        {"FEMINIMO"}
                    </Text>
                    <View 
                        style={{
                            flex: 1,
                            alignSelf: "stretch",
                        }}>
                    </View>
                    <CheckBox isChecked={gender === 'MASCULINO'} onChange={() => setGender('MASCULINO')} />
                    <Text 
                        style={{
                            color: "#000000",
                            fontSize: 12,
                        }}>
                        {"MASCULINO"}
                    </Text>
                </View>
                <Text 
                    style={{
                        color: "#000000",
                        fontSize: 12,
                        marginBottom: 15,
                        marginHorizontal: 121,
                    }}>
                    {"OBJETIVO PRINCIPAL"}
                </Text>
                <TextInput
                    style={{ 
                        backgroundColor: "#F0ECE3",
                        borderColor: "#000000",
                        borderRadius: 12,
                        borderWidth: 1,
                        width: 325,
                        height: 50,
                        paddingVertical: 0,
                        paddingHorizontal: 10,
                        marginBottom: 19,
                        marginHorizontal: 20
                    }}
                    placeholder="EX: Emagrecer; Ganhar massa magra; etc"
                />
                
                <TouchableOpacity onPress={handleFinishPress} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>CONCLUIR</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = {
    buttonContainer: {
        alignItems: 'center',
        backgroundColor: '#CE4545',
        borderColor: '#000000',
        borderRadius: 12,
        borderWidth: 1,
        paddingVertical: 11,
        marginHorizontal: 81,
        shadowColor: "#00000040",
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 10,
            height: 4
        },
        shadowRadius: 4,
        elevation: 4,
    },
    buttonText: {
        color: '#000000',
        fontSize: 16,
    },
};
