import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, ImageBackground, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const [value6, setValue6] = useState('');
  const [value7, setValue7] = useState('');
  const [value8, setValue8] = useState('');
  const [value9, setValue9] = useState('');
  const [value10, setValue10] = useState('');
  const [value11, setValue11] = useState('');
  const [value12, setValue12] = useState('');
  
  return (
    <SafeAreaView 
      style = {{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}>
      <ScrollView  
        style = {{
          flex: 1,
          backgroundColor: "#757373",
          paddingTop: 25,
          paddingBottom: 8,
        }}>
        <Image source={require("../assets/gymraatlogofonte.png")} resizeMode="stretch" style={{ height:40, width:340 , marginBottom: 5, marginHorizontal: 15 }} />
        <Image source={require("../assets/gymraatlogo.png")} resizeMode="stretch" style={{ height: 130, width:130 , marginBottom: 21, marginHorizontal: 120 }} />
        <Text 
          style = {{
            color: "#000000",
            fontSize: 16,
            marginBottom: 4,
            marginLeft: 105,
          }}>
          {"18 DE ABRIL DE 2024"}
        </Text>
        <Image source={require("../assets/lapis.png")}
          resizeMode = {"stretch"}
          style = {{
            width: 29,
            height: 29,
            marginBottom: 7,
            marginHorizontal: 9,
          }}
        />
        <View 
          style = {{
            borderBottomWidth: 1,
            borderBottomColor: "#CE4545E3",
            marginBottom: 10,
            marginHorizontal: 8,
          }}>
          <TextInput
            style={{ height: 20, borderWidth: 0 }}
            onChangeText={text => setValue1(text)}
            value={value1}
            multiline
          />
        </View>
        <View 
          style = {{
            borderBottomWidth: 1,
            borderBottomColor: "#CE4545E3",
            marginBottom: 10,
            marginHorizontal: 8,
          }}>
          <TextInput
            style={{ height: 20, borderWidth: 0 }}
            onChangeText={text => setValue2(text)}
            value={value2}
            multiline
          />
        </View>
        <View 
          style = {{
            borderBottomWidth: 1,
            borderBottomColor: "#CE4545E3",
            marginBottom: 10,
            marginHorizontal: 8,
          }}>
          <TextInput
            style={{ height: 20, borderWidth: 0 }}
            onChangeText={text => setValue3(text)}
            value={value3}
            multiline
          />
        </View>
        <View 
          style = {{
            borderBottomWidth: 1,
            borderBottomColor: "#CE4545E3",
            marginBottom: 10,
            marginHorizontal: 8,
          }}>
          <TextInput
            style={{ height: 20, borderWidth: 0 }}
            onChangeText={text => setValue4(text)}
            value={value4}
            multiline
          />
        </View>
        <View 
          style = {{
            borderBottomWidth: 1,
            borderBottomColor: "#CE4545E3",
            marginBottom: 10,
            marginHorizontal: 8,
          }}>
          <TextInput
            style={{ height: 20, borderWidth: 0 }}
            onChangeText={text => setValue5(text)}
            value={value5}
            multiline
          />
        </View>
        <View 
          style = {{
            borderBottomWidth: 1,
            borderBottomColor: "#CE4545E3",
            marginBottom: 10,
            marginHorizontal: 8,
          }}>
          <TextInput
            style={{ height: 20, borderWidth: 0 }}
            onChangeText={text => setValue6(text)}
            value={value6}
            multiline
          />
        </View>
        <View 
          style = {{
            borderBottomWidth: 1,
            borderBottomColor: "#CE4545E3",
            marginBottom: 10,
            marginHorizontal: 8,
          }}>
          <TextInput
            style={{ height: 20, borderWidth: 0 }}
            onChangeText={text => setValue7(text)}
            value={value7}
            multiline
          />
        </View>
        <View 
          style = {{
            borderBottomWidth: 1,
            borderBottomColor: "#CE4545E3",
            marginBottom: 10,
            marginHorizontal: 8,
          }}>
          <TextInput
            style={{ height: 20, borderWidth: 0 }}
            onChangeText={text => setValue8(text)}
            value={value8}
            multiline
          />
        </View>
        <View 
          style = {{
            borderBottomWidth: 1,
            borderBottomColor: "#CE4545E3",
            marginBottom: 10,
            marginHorizontal: 8,
          }}>
          <TextInput
            style={{ height: 20, borderWidth: 0 }}
            onChangeText={text => setValue9(text)}
            value={value9}
            multiline
          />
        </View>
        <View 
          style = {{
            borderBottomWidth: 1,
            borderBottomColor: "#CE4545E3",
            marginBottom: 10,
            marginHorizontal: 8,
          }}>
          <TextInput
            style={{ height: 20, borderWidth: 0 }}
            onChangeText={text => setValue10(text)}
            value={value10}
            multiline
          />
        </View>
        <View 
          style = {{
            height: 1,
            backgroundColor: "#000000",
            marginBottom: 38,
            marginHorizontal: 4,
          }}>
        </View>
        <View 
          style = {{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 11,
          }}>
         <ImageBackground 
          source={require("../assets/circulored.png")}
          resizeMode = {"stretch"}
          style = {{
            width: 45,
            height: 45,
            marginTop: -30,
            justifyContent: 'center', 
            alignItems: 'center', 
          }}
        >
          <Image
            source={require("../assets/listap.png")}
            resizeMode = {"stretch"}
            style = {{
              width: 20,
              height: 20,
            }}
          />
        </ImageBackground>
          <ImageBackground 
          source={require("../assets/circulored.png")}
          resizeMode = {"stretch"}
          style = {{
            width: 45,
            height: 45,
            marginTop: -30,
            justifyContent: 'center', 
            alignItems: 'center', 
          }}
        >
          <Image
            source={require("../assets/musculoC.png")}
            resizeMode = {"stretch"}
            style = {{
              width: 35,
              height: 35,
            }}
          />
        </ImageBackground>
          <ImageBackground 
          source={require("../assets/circulored.png")}
          resizeMode = {"stretch"}
          style = {{
            width: 45,
            height: 45,
            marginTop: -30,
            justifyContent: 'center', 
            alignItems: 'center', 
          }}
        >
          <Image
            source={require("../assets/calendario1.png")}
            resizeMode = {"stretch"}
            style = {{
              width: 25,
              height: 25,
            }}
          />
        </ImageBackground>
          <View 
            style = {{
              width: 45,
              flexDirection: "row",
              alignItems: "center",
            }}>
            <View 
              style = {{
                flex: 1,
              }}>
              <ImageBackground 
          source={require("../assets/circulored.png")}
          resizeMode = {"stretch"}
          style = {{
            width: 45,
            height: 45,
            marginTop: -30,
            justifyContent: 'center', 
            alignItems: 'center', 
          }}
        >
          <Image
            source={require("../assets/lista.png")}
            resizeMode = {"stretch"}
            style = {{
              width: 45,
              height: 45,
            }}
          />
        </ImageBackground>
            </View>
          </View>
          <ImageBackground 
          source={require("../assets/circulored.png")}
          resizeMode = {"stretch"}
          style = {{
            width: 45,
            height: 45,
            marginTop: -30,
            justifyContent: 'center', 
            alignItems: 'center', 
          }}
        >
          <Image
            source={require("../assets/variosM.png")}
            resizeMode = {"stretch"}
            style = {{
              width: 30,
              height: 30,
            }}
          />
        </ImageBackground>
          <ImageBackground 
          source={require("../assets/circulored.png")}
          resizeMode = {"stretch"}
          style = {{
            width: 45,
            height: 45,
            marginTop: -30,
            justifyContent: 'center', 
            alignItems: 'center', 
          }}
        >
          <Image
            source={require("../assets/muculo.png")}
            resizeMode = {"stretch"}
            style = {{
              width: 30,
              height: 30,
            }}
          />
        </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen;
