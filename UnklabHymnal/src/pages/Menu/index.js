import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Menu = ({navigation}) => {
    return (
        <View >
                    <TouchableOpacity onPress={()=>{navigation.navigate('SongIndex')}}>
                            <Text>Index Lagu</Text>
                    </TouchableOpacity>
         </View>

    )
}

export default Menu;

