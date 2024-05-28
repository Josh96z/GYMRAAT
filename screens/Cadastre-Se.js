import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TextInput, TouchableOpacity } from "react-native";
import CheckBox from "../components/CheckBox";
import { useNavigation } from "@react-navigation/native"; 

export default (props) => {
    const [isChecked, setChecked] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigation = useNavigation(); 

    const handleCadastroPress = () => {
        
        navigation.navigate("UserProfile");
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
                    paddingTop: 12,
                    paddingBottom: 72,
                }}>
                <Image
                    source={require("../assets/XFechar.png")}
                    resizeMode="stretch"
                    style={{
                        width: 21,
                        height: 21,
                        marginBottom: 33,
                        marginHorizontal: 12,
                    }}
                />
                <Text 
                    style={{
                        color: "#000000",
                        fontSize: 40,
                        marginBottom: 60,
                        marginHorizontal: 78,
                    }}>
                    {"CADASTRO\n"}
                </Text>
                <Text 
                    style={{
                        color: "#000000",
                        fontSize: 12,
                        marginBottom: 8,
                        marginHorizontal: 28,
                    }}>
                    {"NOME DE USUÁRIO "}
                </Text>
                <TextInput 
                    style={{
                        width: 294,
                        height: 31,
                        backgroundColor: "#F0ECE3",
                        borderColor: "#000000",
                        borderRadius: 12,
                        borderWidth: 1,
                        marginBottom: 27,
                        marginHorizontal: 20,
                        paddingHorizontal: 10,
                        shadowColor: "#00000040",
                        shadowOpacity: 0.3,
                        shadowOffset: {
                            width: 0,
                            height: 4
                        },
                        shadowRadius: 4,
                        elevation: 4,
                    }}
                    placeholder="Digite seu nome de usuário"
                    placeholderTextColor="#757575"
                    value={username}
                    onChangeText={setUsername}
                />
                <Text 
                    style={{
                        color: "#000000",
                        fontSize: 12,
                        marginBottom: 6,
                        marginHorizontal: 28,
                    }}>
                    {"E-MAIL"}
                </Text>
                <TextInput 
                    style={{
                        width: 294,
                        height: 31,
                        backgroundColor: "#F0ECE3",
                        borderColor: "#000000",
                        borderRadius: 12,
                        borderWidth: 1,
                        marginBottom: 27,
                        marginHorizontal: 20,
                        paddingHorizontal: 10,
                        shadowColor: "#00000040",
                        shadowOpacity: 0.3,
                        shadowOffset: {
                            width: 0,
                            height: 4
                        },
                        shadowRadius: 4,
                        elevation: 4,
                    }}
                    placeholder="Digite seu e-mail"
                    placeholderTextColor="#757575"
                    value={email}
                    onChangeText={setEmail}
                />
                <Text 
                    style={{
                        color: "#000000",
                        fontSize: 12,
                        marginBottom: 6,
                        marginHorizontal: 28,
                    }}>
                    {"SENHA"}
                </Text>
                <TextInput 
                    style={{
                        width: 294,
                        height: 31,
                        backgroundColor: "#F0ECE3",
                        borderColor: "#000000",
                        borderRadius: 12,
                        borderWidth: 1,
                        marginBottom: 20,
                        marginHorizontal: 20,
                        paddingHorizontal: 10,
                        shadowColor: "#00000040",
                        shadowOpacity: 0.3,
                        shadowOffset: {
                            width: 0,
                            height: 4
                        },
                        shadowRadius: 4,
                        elevation: 4,
                    }}
                    secureTextEntry={true}
                    placeholder="Digite sua senha"
                    placeholderTextColor="#757575"
                    value={password}
                    onChangeText={setPassword}
                />
                <Text 
                    style={{
                        color: "#000000",
                        fontSize: 12,
                        marginBottom: 12,
                        marginHorizontal: 28,
                    }}>
                    {"CONFIRMAR SENHA"}
                </Text>
                <TextInput 
                    style={{
                        width: 294,
                        height: 31,
                        backgroundColor: "#F0ECE3",
                        borderColor: "#000000",
                        borderRadius: 12,
                        borderWidth: 1,
                        marginBottom: 32,
                        marginHorizontal: 20,
                        paddingHorizontal: 10,
                        shadowColor: "#00000040",
                        shadowOpacity: 0.3,
                        shadowOffset: {
                            width: 0,
                            height: 4
                        },
                        shadowRadius: 4,
                        elevation: 4,
                    }}
                    secureTextEntry={true}
                    placeholder="Confirme sua senha"
                    placeholderTextColor="#757575"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                <View 
    style={{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 43,
        marginHorizontal: 50,
    }}>
    <CheckBox
        label="ACEITAR TERMOS E CONDIÇÕES"
        isChecked={isChecked}
        onChange={() => setChecked(!isChecked)}
    />
    <Text style={{ marginLeft: 8 }}>
        ACEITAR TERMOS E CONDIÇÕES
    </Text>
</View>

               
                <TouchableOpacity onPress={handleCadastroPress}>
                    <View 
                        style={{
                            alignItems: "center",
                            backgroundColor: "#CE45458A",
                            borderColor: "#000000",
                            borderRadius: 12,
                            borderWidth: 1,
                            paddingVertical: 13,
                            marginHorizontal: 82,
                            shadowColor: "#00000040",
                            shadowOpacity: 0.3,
                            shadowOffset: {
                                width: 0,
                                height: 4
                            },
                            shadowRadius: 4,
                            elevation: 4,
                        }}>
                        <Text 
                            style={{
                                color: "#000000",
                                fontSize: 16,
                            }}>
                            {"CADASTRAR"}
                        </Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}
