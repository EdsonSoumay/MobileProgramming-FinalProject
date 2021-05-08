import React, {useEffect, useState} from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import axios from 'axios'
import {Gap, Header} from '../../components'
import Back from '../../assets/icons/icon-back.png'

const FavoriteSong = ({navigation}) => {
const [filterData, setfilterData] = useState([])


  ////---------------------------> Function Memanggil API menggunakan Axios<------------------------------------------
  useEffect(() => {
    AxiosPosts();
    return () => {    
    }
  }, [])

  const AxiosPosts =()=>{
    const apiURL = 'http://10.0.2.2:3004/favoriteSong';
    axios.get(apiURL)
    .then((response) => {
      setfilterData(response.data);
    }). catch((error) =>{
      console.error(error);
    })
  }
////-------------------------------------------------------------------------------------------------------------

////-----------------------------------Function pada flatList--------------------------------------------------------------------
  const ItemView =({item})=>{
     return(
      <>
      <TouchableOpacity 
      style={styles.ItemView} 
            onPress={()=>{
               navigation.navigate('DisplayFavoriteSong',{
                   Judul: item.Judul,
                   Nomor: item.Nomor,
                   NadaDasar: item.NadaDasar, 
                   Birama: item.Birama, 
                   Pengubah: item.Pengubah, 
                   Ket1: item.Ket1, 
                   Ket2: item.Ket2, 
                   Ket3: item.Ket3, 
                   Ket4: item.Ket4,
                   Ket5: item.Ket5,
                   KetRef: item.KetRef,
                   Ayat1: item.Ayat1,
                   Ayat2: item.Ayat2,
                   Ayat3: item.Ayat3,
                   Ayat4: item.Ayat4,
                   Ayat5: item.Ayat5,
                   Ref: item.Ref,
                   id: item.id
               })
           }}
        >
          <Text style ={styles.itemStyle}>
            {item.Nomor}{'. '}{item.Judul}
          </Text>
          <TouchableOpacity style={{alignItems:"center", justifyContent:"center", paddingRight:10}} onPress={()=>onDelete(item)} >
              <Text style={{color: 'red', fontWeight:"700", padding:5}}>x</Text>
          </TouchableOpacity>
       </TouchableOpacity>
       <Gap height={15}/>
       </>
       )
  }

const onDelete =(item)=>{
    console.log(item.id);
    axios.delete(`http://10.0.2.2:3004/favoriteSong/${item.id}`)
    .then(res => {
        console.log('res delete', res)
        AxiosPosts();
    })
}


  const itemSeparatorView = () =>{
    return(
      <View
        style={{height: 0.5, width: '100%', backgroundColor: '#c8c8c'}}
      />
    )
  }
////------------------------------------------------------------------------------------------

  return (
  <>
  
  <View style ={styles.header}>
  <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <Image
            style={{ width: 12, height: 20}}
            resizeMode={'contain'}
            source={Back} />
            <Gap width={50}/>
      </TouchableOpacity>

    <Header title ='Lagu Favorit'/>

  </View>
    <SafeAreaView style ={{flex:1}}>           
      <FlatList
      data = {filterData}
      keyExtractor ={(item,index) => index.toString()}
      itemSeparatorComponent = {itemSeparatorView}
      renderItem ={ItemView}    
      />
    </SafeAreaView> 
 </>

  )
}
export default FavoriteSong;

const styles = StyleSheet.create({
  header:{
    width:411, height: 80, 
    backgroundColor: "#952828",
    fontWeight: '700',
    fontFamily: "RalewayDots-Regular",
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    marginBottom: 20

  },
  SearchContainer:{
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 20,
    borderWidth: 1,
    marginBottom: 25,
    marginHorizontal: 5,
    height: 43,
    width: 376,
    marginHorizontal: 18 ,
    marginBottom: 30

  },
  SearchTextInput:{
    fontWeight: '700',
      fontFamily: "Raleway-Italic-VariableFont_wght"
  },
   itemStyle:{
    padding: 10,
    borderEndWidth: 2,
    borderColor: 'black',
    fontSize: 16,
  },
  ItemView:{
    flexDirection: 'row',
    borderWidth:1, 
    backgroundColor: 'white', 
    borderColor: 'black', 
    borderRadius: 10,
    marginHorizontal: 10,
    maxHeight: 58,
    justifyContent:"space-between",
    marginLeft: 27,
    marginRight: 27,
    borderLeftWidth:2,
    borderBottomWidth:2,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  }
})