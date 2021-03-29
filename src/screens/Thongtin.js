import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View,Image, TextInput,ActivityIndicator, ScrollView } from "react-native";
import styled from "styled-components/native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
const DATA = [
  {
    id: '1',
    title: "Nguyên tắc làm việc",
    Name:'General Code of Conducts'
  },
  {
    id: '2',
    title: "Thời gian & môi trường làm việc",
    Name:'Workplace policies, Working times and conditions'    
  },
  {
    id: '3',
    title: "Sử dung, bảo vệ & quản lí tài sản",
    Name:'Các quy định về bảo về, sử dụng có tráchnhiệm, và đảm bảo an toàn tài sản của công ty' 
  },
  {
   id: '4',
   title: "Nguyên tắc chính trực",
   Name:'Liên quan đến: Sự chính trực về tài chính,báo cáo, đánh giá và ra quyết định'  
 },
 {
   id: '5',
   title: "Quản lí phát triên nhân sự",
   Name:'Các nguyên tắc về quản trị và phát triển nhân sự'  
 },
 {
   id: '6',
   title: "Giao tiếp và truyền tải thông tin",
   Name:'Communication Policy ~ internally, socially and in the public'  
 },
 {
   id: '7',
   title: "Giao tiếp và truyền tải thông tin",
   Name:'Communication Policy ~ internally, socially and in the public'  
 },
];
const Name = styled.Text`
   font-size: 17px;
   color: #111;
   font-weight: bold
`;
const Description = styled.Text`
   font-size: 15px;
   color: #333;
`;
const Divider = styled.View`
  margin: 0 16px;
  height: 1px;
  background-color: #CECECE
`;
const Item = ({ item, style }) => {
   const [isShowInfo, setIsShowInfo] = useState(false);
   const onPress = () => {
      setIsShowInfo(isShowInfo ? false : true)
   }
   return (
      <>
        <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
              <Name>{item.title}</Name>
              <Image source={require('../image/keyboard_arrow_down_24px.png') } style={{left:'98%',alignItems:'center'}} />
              <Description>{item.Name}</Description>
        </TouchableOpacity>
        {
          isShowInfo 
          ? <View> 
                <View style={{paddingHorizontal:20,paddingVertical:15}}>
            
                  <TouchableOpacity style={{flexDirection:'row',}}>
                  <Image resizeMode={'contain'} source={require('../image/cute.png')} style={{width:20,height:20}} />
                  <Text style={{fontSize:15,color:'#007AFF'}}> Quy định chung về Work Rules</Text>
                  </TouchableOpacity>
                  <Text style={{color:'#828282'}}> Tổng quan về work rules (nguyên tắc làm việc tại Base inc là cách thức chúng ta đưa giá trị và sứ mênh của Base vào công việc hàng ngày...)</Text>         
                </View>

                <View style={{paddingHorizontal:20,paddingVertical:15}}>
                <View style={{borderBottomWidth:0.7,borderBottomColor:'#DEDEDE'}}></View>
                  <TouchableOpacity style={{flexDirection:'row',paddingTop:15}}>
                  <Image resizeMode={'contain'} source={require('../image/cute.png')} style={{width:20,height:20}} />
                  <Text style={{fontSize:15,color:'#007AFF'}}>Nguyên tắc chung về chính sách lương + thưởng</Text>
                  </TouchableOpacity>
                  <Text style={{color:'#828282'}}>Nguyên tắc về lương và thưởng dựa trên perfomance,và nguyên tắc trả lương công bằng </Text>         
                </View>

                <View style={{paddingHorizontal:20,paddingVertical:15}}>
                <View style={{borderBottomWidth:0.7,borderBottomColor:'#DEDEDE'}}></View>
                  <TouchableOpacity style={{flexDirection:'row',paddingTop:15}}>
                  <Image resizeMode={'contain'} source={require('../image/cute.png')} style={{width:20,height:20}} />
                  <Text style={{fontSize:15,color:'#007AFF'}}> Các hình thức kỉ luật áp dụng </Text>
                  </TouchableOpacity>
                  <Text style={{color:'#828282'}}> Quy định chung về 5 hình thức kỉ luật tại Base.vn</Text>         
                </View>

                <View style={{paddingHorizontal:20,paddingVertical:15}}>
                   <View style={{borderBottomWidth:0.7,borderBottomColor:'#DEDEDE'}}></View>
                  <TouchableOpacity style={{flexDirection:'row',paddingTop:15}}>
                  <Image resizeMode={'contain'} source={require('../image/cute.png')} style={{width:20,height:20}} />
                  <Text style={{fontSize:15,color:'#007AFF'}}> Các chứng chỉ điều kiện bắt buộc</Text>
                  </TouchableOpacity>
                  <Text style={{color:'#828282'}}> Quy định các chứng chỉ bắt buộc tại công ty...</Text>         
                </View>
          </View>
          : null
        }
        <Divider />
      </>
  )
};

const App = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
      />
    );
  };

  return (
     <>
      <View style={styles.up}>
         <View style={styles.BT}>
           <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Image resizeMode={'contain'} source={require('../image/Vector16.png')} style={{width:25,height:25,}} />
           </TouchableOpacity>

            </View>
            <View style={styles.TL}>
               <Text style={{fontSize:20,fontWeight:'bold'}}> Work rules</Text>
            </View>
            <View style={{width:80}}></View>
      </View>

     <View style={styles.container}>
      
      <View style={styles.bot}>     
         <SafeAreaView style={styles.Fcontainer}>
            <FlatList
               data={DATA}
               renderItem={renderItem}
               keyExtractor={(item) => item.id}
               />
         </SafeAreaView>
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
   container:{
      flex:1,
      backgroundColor:'white'
   },
   up:{
     backgroundColor:'white',
      width:'100%',
      height: 76,
      flexDirection:'row',
      borderBottomWidth: 1,
      borderBottomColor: '#DEDEDE'
   },
   bot:{
      flex:1,
   },
  Fcontainer: {
    marginTop: 0
  },
  item: {
    flexDirection:'column',
    marginHorizontal: 20,
    paddingVertical: 16,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#111'
  },
  BT:{
     width:80,
     padding:20

  },
  TL:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
  },
});

export default App;