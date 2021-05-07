import React, {useEffect, useState} from 'react'
import { FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native'
import axios from 'axios'
import {Gap, Header} from '../../components'
import Back from '../../assets/icons/icon-back.png'

const SongIndex = ({navigation}) => {
  const [filterData, setfilterData] = useState([])
  const [masterData, setmasterData] = useState([])
  const [search, setsearch] = useState('')

  ////---------------------------> Function Memanggil API menggunakan Axios<------------------------------------------
  useEffect(() => {
    AxiosPosts();
    return () => {    
    }
  }, [])
  const AxiosPosts =()=>{
    const apiURL = 'http://10.0.2.2:3004/data';
    axios.get(apiURL)
    .then((response) => {
      setfilterData(response.data);
      setmasterData(response.data);
    }). catch((error) =>{
      console.error(error);
    })
  }
////-------------------------------------------------------------------------------------------------------------
/////---------------------------------Function untuk search------------------------------------------------------
const searchFilter = (text) =>{
  if(text){
    const newSearch = masterData.filter((item)=>{
      const itemSearch = item.Search?
                item.Search.toUpperCase() 
                :''. toUpperCase();
      const textSearch = text.toUpperCase();
      return itemSearch.indexOf(textSearch) > -1;
    });
    setfilterData(newSearch);
    setsearch(text);
  }else{
    setfilterData(masterData);
    setsearch(text);
  }
}
/////----------------------------------------------------------------------------------------------------------------

////-----------------------------------Function pada flatList--------------------------------------------------------------------
 const ItemView =({item})=>{
     return(
      <>
      <TouchableOpacity 
      style={styles.ItemView} 
            onPress={()=>{
               navigation.navigate('DisplaySong',{
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
                   Ref: item.Ref
               })
           }
        }>
          <Text style ={styles.itemStyle}>
            {item.Nomor}{'. '}{item.Judul}
          </Text>
       </TouchableOpacity>
       <Gap height={21}/>
       </>
       )
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
    <Header title ='Index Lagu' />
  </View>
    <SafeAreaView style ={{flex:1}}>    
      <View style ={styles.SearchContainer}> 
          <TextInput
           style={styles.SearchTextInput}
           value={search}
           placeholder = "Masukan nomor, judul, pencipta, atau lirik"
           underlineColorAndroid= 'transparent'
           onChangeText={(text) => searchFilter(text)}
           />
    </View>       
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
export default SongIndex;

const styles = StyleSheet.create({
  header:{
    width:411, height: 80, 
    backgroundColor: "#952828",
    fontWeight: '700',
    fontFamily: "RalewayDots-Regular",
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20
    
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
    borderColor: 'black',
    fontSize: 17,
    fontWeight: '700',
    fontFamily: "RalewayDots-Regular"
    },
  ItemView:{
    marginLeft: 27,
    marginRight: 27,
    borderWidth:1, 
    borderLeftWidth:2,
    borderBottomWidth:2,
    backgroundColor: 'white', 
    borderColor: '#000000', 
    borderRadius: 10,
    marginHorizontal: 10,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  }
})