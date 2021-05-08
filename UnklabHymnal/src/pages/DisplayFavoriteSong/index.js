import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native'
import Logobackground from '../../assets/icons/logo-background.png'
import Back from '../../assets/icons/icon-back.png'
import {Gap} from '../../components'

const DisplayFavoriteSong=({ route, navigation }) =>{

    const { Nomor, Judul, NadaDasar,Birama, Pengubah, Ket1, Ket2, Ket3, Ket4, Ket5, KetRef, Ayat1, Ayat2, Ayat3, Ayat4, Ayat5, Ref } = route.params;
    return (
      <>
              <View style ={styles.header}>         
                 <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                  <Image
                    style={{ width: 12, height: 20}}
                    resizeMode={'contain'}
                    source={Back} />
                    <Gap width={330}/>
                    </TouchableOpacity>
                </View>
          <View style={styles.Wrapper}>       
            <View style ={styles.songWrapper}>
                <Text style={styles.JudulLagu}>{Nomor}. {Judul}</Text>
                 <View style={styles.keteranganLagu}>
                   <View>
                        <Text >Do = {NadaDasar}</Text>
                        <Text >Birama = {Birama}</Text>
                    </View>
                    <View>
                         <Text>{Pengubah}</Text>
                    </View>
                 </View>    
            <ScrollView style={{marginBottom:60}} showsVerticalScrollIndicator={false}> 
                <Text style={styles.ket}>{Ket1}</Text>
                <Text style={styles.ayat}>{Ayat1}</Text>
                <Text style={styles.ket}>{Ket2}</Text>
                <Text style= {styles.ayat}>{Ayat2}</Text>
                <Text style={styles.ket}>{Ket3}</Text>
                <Text style= {styles.ayat}>{Ayat3}</Text>
                <Text style={styles.ket}>{Ket4}</Text>
                <Text style= {styles.ayat}>{Ayat4}</Text>
                <Text style={styles.ket}>{Ket5}</Text>
                <Text style= {styles.ayat}>{Ayat5}</Text>
                <Text style={styles.ket}>{KetRef}</Text>
                <Text style= {styles.ayat}>{Ref}</Text>
            </ScrollView>
            </View>
        </View>
          <View style={styles.backgroundWrap}>
             <ImageBackground source={Logobackground} style={styles.image}>
              </ImageBackground>
        </View>

    </>
    );
  }

  export default DisplayFavoriteSong
  
const styles = StyleSheet.create({
    
  header:{
      width:411, height: 80,
      fontWeight: '700',
      fontFamily: "RalewayDots-Regular",
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 20  
  },
    backgroundWrap: {
    flex: 1,
    flexDirection: "row",
    alignItems:"flex-end",
    justifyContent:"center",
  },
  image: {
        height: 124,
        width: 135,
        paddingBottom: 100,
        marginLeft: 200,
        marginBottom: 200,
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
  container:{
    flex: 1, 
    alignItems: 'center',      
    },
  songWrapper:{
    marginBottom: 150
    },
  keteranganLagu:{
    paddingHorizontal: 43,
    marginBottom:10,
    fontWeight: '700',
    fontFamily: "RalewayDots-Regular",
    flexDirection: "row",
    justifyContent:"space-between"
    },
  Wrapper:{
    marginBottom:20,
    paddingBottom:100
    },
  JudulLagu:{
    textAlign:"center",
    fontWeight: '700',
    fontFamily: "RalewayDots-Regular",
    fontSize: 22,
    marginBottom: 20,
    },
  ayat:{
    fontSize: 17,
    paddingHorizontal:68,
    fontWeight: '700',
    fontFamily: "RalewayDots-Regular",
    marginBottom: 17
    },
  ket:{
    textAlign:'center',
    fontFamily: "RalewayDots-Regular",
    fontWeight: "bold"
    }
  })
  
