import React from 'react';
import { SafeAreaView, ScrollView, Image, Text, TouchableOpacity, TextInput, StyleSheet, View } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleSignUpPress = () => {
    navigation.navigate('SignUp'); 
  };

  const handleEntrarPress = () => {
    navigation.navigate('Home'); 
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView style={{ flex: 1, backgroundColor: '#757373', paddingTop: 28, paddingBottom: 41 }}>
        <Image source={require('../assets/gymraatlogofonte.png')} resizeMode="stretch" style={{ height:50, width:340 , marginBottom: -2, marginHorizontal: 15 }} />
        <Image source={require('../assets/gymraatlogo.png')} resizeMode="stretch" style={{ height: 180, width:180 , marginBottom: 21, marginHorizontal: 90 }} />
        <Text style={{ color: '#000000', fontSize: 12, marginBottom: 2, marginHorizontal: 43 }}>{"E-MAIL"}</Text>
        <TextInput
          style={{ backgroundColor: '#F0ECE3', borderColor: '#000000', borderRadius: 12, borderWidth: 1, paddingVertical: 5, paddingHorizontal: 12, marginBottom: 19, marginHorizontal: 20 }}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#757575"
        />
        <Text style={{ color: '#000000', fontSize: 12, marginBottom: 3, marginHorizontal: 43 }}>{"SENHA"}</Text>
        <TextInput
          style={{ backgroundColor: '#F0ECE3', borderColor: '#000000', borderRadius: 12, borderWidth: 1, paddingVertical: 5, paddingHorizontal: 12, marginBottom: 19, marginHorizontal: 20 }}
          placeholder="Digite sua senha"
          placeholderTextColor="#757575"
          secureTextEntry
        />
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 33, marginBottom: 13 }}>
          <Text style={{ color: '#000000', fontSize: 11, fontWeight: 'bold', textDecorationLine: 'underline' }}>{"Esqueceu a senha?"}</Text>
        </View>

        <TouchableOpacity onPress={handleEntrarPress} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F0ECE3', borderColor: '#000000', borderRadius: 15, borderWidth: 1, paddingVertical: 4, paddingHorizontal: 12, marginBottom: 19, marginHorizontal: 73 }}>
          <Image source={require('../assets/googlelogin.png')} resizeMode="stretch" style={{ width: 20, height: 20, marginRight: 18 }} />
          <Text style={{ color: '#000000', fontSize: 12, flex: 1 }}>{"Entrar com o Google"}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F0ECE3', borderColor: '#000000', borderRadius: 15, borderWidth: 1, paddingVertical: -10, paddingHorizontal: 12, marginBottom: 65, marginHorizontal: 73 }}>
          <Image source={require('../assets/facebooklogin.png')} resizeMode="stretch" style={{ width: 20, height: 20, marginRight: 17 }} />
          <Text style={{ color: '#000000', fontSize: 12, flex: 1 }}>{"Entrar com o Facebook\n"}</Text>
        </View>
        <TouchableOpacity onPress={handleSignUpPress} style={styles.signUpButton}>
          <Text style={{ color: '#000000', fontSize: 15, textAlign: 'center' }}>
            <Text style={{ fontWeight: 'bold' }}>{"Ainda não tem uma conta? "}</Text>
            <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}>{"Cadastre-Se"}</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#CE4545',
    borderColor: '#000000',
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 7,
    marginBottom: 23,
    marginHorizontal: 121,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
  },
  signUpButton: {
    marginBottom: 65,
    marginHorizontal: 81,
  },
});

export default LoginScreen;
