import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Gap} from '../../components'

const Menu = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View  styles={styles.header}>
                <Text style={styles.text}>Unklab Hymnal</Text>
            </View>
            <View style={styles.wrapButton}>
                <View style={styles.button}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('SongIndex')}}>
                            <Text style={styles.textButton}>Index Lagu</Text>
                    </TouchableOpacity>
                </View>
                <Gap height={37}/>
                <View style={styles.button}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('FavoritSong')}}>
                            <Text style={styles.textButton}>Lagu favorit</Text>
                    </TouchableOpacity>
                </View>
                <Gap height={37}/>
                <View style={styles.button}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('About')}}>
                            <Text style={styles.textButton}>Tentang Tim</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

export default Menu

const styles = StyleSheet.create({
    container:{
      marginTop:40
    },
    button:{
        width: 312,
        height: 66,
        backgroundColor: '#945252',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapButton:{
        marginTop:160,
        alignItems:'center'
    },
    text:{
            textAlign:"center",
            fontSize: 37,
            fontWeight: '700',
            fontFamily: "Raleway-VariableFont_wght"
    },
    textButton:{
        fontSize: 30,
        color: "white",
        fontWeight: '500',
        fontFamily: "Raleway-VariableFont_wght"
    }
})
