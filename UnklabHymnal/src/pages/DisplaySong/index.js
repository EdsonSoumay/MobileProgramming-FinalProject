import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native'
import axios from 'axios'
import Logobackground from '../../assets/icons/logo-background.png'
import Back from '../../assets/icons/icon-back.png'
import Add from '../../assets/icons/add-favorit-song.png'

const DisplaySong=({ route, navigation }) =>{
    const { Nomor, Judul, NadaDasar,Birama, Pengubah, Ket1, Ket2, Ket3, Ket4, Ket5, KetRef, Ayat1, Ayat2, Ayat3, Ayat4, Ayat5, Ref } = route.params;
   
    const Submit = ()=>{
    
        const dt = {
          Nomor: Nomor, 
          Judul: Judul, 
          NadaDasar: NadaDasar,
          Birama: Birama, 
          Pengubah: Pengubah, 
          Ket1: Ket1, 
          Ket2: Ket2, 
          Ket3: Ket3, 
          Ket4: Ket4, 
          Ket5: Ket5,
          KetRef: KetRef, 
          Ayat1:Ayat1, 
          Ayat2: Ayat2, 
          Ayat3: Ayat3, 
          Ayat4: Ayat4, 
          Ayat5: Ayat5, 
          Ref: Ref
        } 

        axios.get('http://10.0.2.2:3004/favoriteSong')
        .then( GetRes =>{
            const items = []
              GetRes.data.map(item=>{;
              hasil(item.Nomor)
            })
                function hasil (data){
                items.push(data);
            }
            function cariNomor(arrayNomor, NomorLagu) {
              if (arrayNomor.indexOf(NomorLagu) !== -1) {
                console.log("Nomor ada");
                showMessage({
                message: "Lagu Sudah ada",
                type: 'default',
                backgroundColor: '#B22222', // background color
                color: 'white', // text color
              })
              } else {
                axios.post('http://10.0.2.2:3004/favoriteSong', dt)
                .then(res=>{
                    console.log(res);
                    showMessage({
                      message: "Lagu berhasil ditambahkan",
                      type: 'default',
                      backgroundColor: '#01796f', // background color
                      color: 'white', // text color
                    })
                })
              }
            }               
            cariNomor(items, Nomor);
          })
    }

    return (
      <>   
          <View style ={styles.header}> 
                 <TouchableOpacity style={styles.button} onPress={()=>{navigation.goBack()}}>
                  <Image
                    style={{ width: 12, height: 20}}
                    resizeMode={'contain'}
                    source={Back} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={Submit}>
                    <Image
                    style={{ width: 24, height: 24}}
                    resizeMode={'contain'}
                    source={Add} />
                    </TouchableOpacity>
                </View>
          <View style={styles.Wrapper}>       
            <View style ={styles.songWrapper}>
                <Text style={styles.JudulLagu}>{Nomor}. {Judul}</Text>
                 <View style={styles.keteranganLagu}>
                   <View>
                        <Text >Do={NadaDasar}</Text>
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

export default DisplaySong
  
  const styles = StyleSheet.create({ 
        header:{ 
          height: 80,
          fontWeight: '700',
          fontFamily: "RalewayDots-Regular",
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent:'space-between'   
        },
        button:{
          padding: 10,
          marginHorizontal:10,
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