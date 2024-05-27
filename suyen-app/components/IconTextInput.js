import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const IconTextInput = ({ icon, placeholder, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View className={`flex-row items-center border rounded-xl mb-2 bg-gray-300 ${isFocused ? 'border-purple-500' : 'border-black'}`}>
            <MaterialCommunityIcons name={icon} size={24} color="gray" className="ml-2" style={{ marginLeft: 10 }} />
            <TextInput
                className="flex-1 px-4 py-2"
                placeholder={placeholder}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                {...props}
            />
        </View>
    );
};

export default IconTextInput;