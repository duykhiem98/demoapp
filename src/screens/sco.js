import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar,Image,TextInput,Dimensions,View } from 'react-native';

export default class App extends React.Component{
    render(){
        let screenWidth=Dimensions.get('window').width;
        let screenHeight=Dimensions.get('window').height;
        return(
            <ScrollView horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={true}
            onMomentumScrollBegin={()=>{
                alert('heloword')

            }}
            onMomentumScrollBegin={()=>{
                alert('heloword')

            }}
            >
                <View style={{flex:1,
                    backgroundColor:'blue',
                    justifyContent:'center',
                    width:screenWidth,
                    alignItems:'center'}}> 

                  <Text style={{fontSize:30,color:'red'}}> 
                      screen1
                  </Text>
                </View>

                <View style={{flex:1,
                    backgroundColor:'white',
                    justifyContent:'center',
                    width:screenWidth,
                    alignItems:'center'}}> 

                  <Text style={{fontSize:30,color:'red'}}> 
                      screen1
                  </Text>
                </View>

                <View style={{flex:1,
                    backgroundColor:'green',
                    justifyContent:'center',
                    width:screenWidth,
                    alignItems:'center'}}> 

                  <Text style={{fontSize:30,color:'red'}}> 
                      screen1
                  </Text>
                </View>

                <View style={{flex:1,
                    backgroundColor:'gray',
                    justifyContent:'center',
                    width:screenWidth,
                    alignItems:'center'}}> 

                  <Text style={{fontSize:30,color:'red'}}> 
                      screen1
                  </Text>
                </View>
      
      
            </ScrollView>


        )
    }
}



