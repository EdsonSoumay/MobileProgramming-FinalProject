import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import {Gap, Header} from '../../components'
import Back from '../../assets/icons/icon-back.png'

const About = ({navigation}) => {
 


  return (
  <>
  <View style ={styles.header}>
      <TouchableOpacity style={styles.buttonBack}onPress={()=>{navigation.goBack()}}>
            <Image
            style={{ width: 12, height: 20}}
            resizeMode={'contain'}
            source={Back} />
      </TouchableOpacity>
      <Gap width={50}/>
      <Header title ='Tentang Tim' />
  </View>
 
 <View style={styles.containerName}>
    <View style={styles.name}>
        <Text style={styles.textName}> Soumay, Edson</Text>
    </View>
    <Gap height={30}/>
    <View style={styles.name}>
        <Text style={styles.textName}> Toreh, Dennis</Text>
    </View>
    <Gap height={30}/>
    <View style={styles.name}>
        <Text style={styles.textName}> Likuayang, Kevin</Text>
    </View>
    <Gap height={30}/>
    <View style={styles.name}>
        <Text style={styles.textName}>Rondonuwu, Garren </Text>
    </View>
    <Gap height={30}/>
    <View style={styles.name}>
        <Text style={styles.textName}> Sandag, Joshua</Text>
    </View>   
 </View>
  
 </>

  )
}
export default About;

const styles = StyleSheet.create({

    containerName:{
        justifyContent:"flex-start",
        marginTop: 30,
        marginHorizontal:27

    },
    
    textName:{
        fontFamily: "RalewayDots-Regular",
        fontWeight: 'bold',
        fontSize: 17
    },
    name:{
        marginLeft: 27,
        marginRight: 27,
        borderWidth:1,
        borderLeftWidth: 3,
        borderBottomWidth: 3, 
        backgroundColor: 'white', 
        borderColor: '#000000', 
        borderRadius: 10,
        marginHorizontal: 10,
        padding: 10
    },
    header:{
        flex: 1, 
        maxHeight: 80, 
        backgroundColor: "#952828",
        fontWeight: '700',
        fontFamily: "RalewayDots-Regular",
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonBack:{
        padding: 10,
        marginLeft:10,
    }
})