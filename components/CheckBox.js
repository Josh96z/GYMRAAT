import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const CheckBox = ({ isChecked, onChange }) => {
    return (
        <TouchableOpacity onPress={onChange} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{
                width: 20,
                height: 20,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: isChecked ? '#CE4545' : '#000', 
                marginRight: 8,
                backgroundColor: isChecked ? '#D04343' : '#FFF', 
                justifyContent: 'center', 
                alignItems: 'center', 
            }}>
                {isChecked && (
                    <Ionicons name="checkmark" size={20} color="#FFF" style={{ marginTop: -1, marginLeft: -1 }} />
                )}
            </View>
        </TouchableOpacity>
    );
}

export default CheckBox;
