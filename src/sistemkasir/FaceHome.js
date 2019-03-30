import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import POSMobileAbout from './POSMobileAbout';
import POSMobileData from './POSMobileData';
import POSMobileBuy from './POSMobileBuy';

export default class POSMobile extends Component {
    render() {
      return (
          <MyApp />
      )
    }
  }

class ThisPOSMobile extends Component {
  render() {
    return (
        <View style={styles.containerMain}>
            <View style={{height:24}}>

            </View>
            <View style={{flex:1, alignItems:'center', 
                        justifyContent:'space-around', 
                        backgroundColor:'#ffc733'}}>
                <Text style={{fontSize:30, 
                            color:'white'}}>APLIKASI KASIR</Text>
            </View>
            <View style={{flex:3, alignItems:'center', 
                        justifyContent:'space-around',  
                        margin:10}}>
                <Image  style={{width: 240, height: 240}}
                        source={{uri:'https://ecs7.tokopedia.net/img/cache/700/product-1/2016/10/6/31608630/31608630_512d177b-f874-46b9-8f82-5019d03cd02f.jpg'}}/>
            </View>
            <View style={{flex:3}}>
                <View style={{flex:1,
                            flexDirection:'row'}}>
                    <View style={{flex:1,
                                alignItems:'center',
                                justifyContent:'space-around', 
                                backgroundColor:'#434343',
                                borderRadius:20,
                                margin:5}}>
                        <TouchableHighlight style={{ flex: 1, 
                                                  alignItems: 'center', 
                                                  justifyContent: 'center', 
                                                  borderRadius: 20, 
                                                  backgroundColor: '#434343', 
                                                  margin: 10, }}
                                            onPress={ () => this.props.navigation.navigate('ScreenBuy')}
                                            underlayColor='#F4B400'
                                            ><Text style={{color:'white', fontSize:25}}>PENJUALAN</Text></TouchableHighlight>
                    </View>
                    <View style={{flex:1, 
                                alignItems:'center', 
                                justifyContent:'space-around', 
                                backgroundColor:'#434343',
                                borderRadius:20,
                                margin:5}}>
                        <TouchableHighlight style={{ flex: 1, 
                                                  alignItems: 'center', 
                                                  justifyContent: 'center', 
                                                  borderRadius: 20, 
                                                  backgroundColor: '#434343', 
                                                  margin: 10, }}
                                            onPress={ () => this.props.navigation.navigate('ScreenData')}
                                            underlayColor='#F4B400'
                                            ><Text style={{color:'white', fontSize:20}}>DATA BARANG</Text></TouchableHighlight>        
                    </View>
                </View>
                <View style={{flex:1, 
                            justifyContent:'space-around'}}>
                    <View style={{flex:1, 
                    alignItems:'center', 
                    justifyContent:'space-around', 
                    backgroundColor:'#434343',
                    borderRadius:20, 
                    margin:5}}>
                    <TouchableHighlight style={{ flex: 1, 
                                                  alignItems: 'center', 
                                                  justifyContent: 'center', 
                                                  borderRadius: 20, 
                                                  backgroundColor: '#434343', 
                                                  margin: 10, }}
                                            onPress={ () => this.props.navigation.navigate('ScreenAbout')}
                                            underlayColor='#F4B400'
                                            ><Text style={{color:'white', fontSize:25}}>TENTANG SAYA</Text></TouchableHighlight>
                    </View>
                </View>
            </View>
            <View style={{flex:1, alignItems:'center', 
                        justifyContent:'space-around', 
                        backgroundColor:'#ffc733'}}>
                <Text style={{color:'white', fontSize:30}}>WARUNG BOH</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
    }
})

const MyDrawerNavigator = createDrawerNavigator(
    {
      ScreenHome: {
        screen: ThisPOSMobile,
      },
      ScreenBuy: {
        screen: POSMobileBuy,
      },
      ScreenData: {
        screen: POSMobileData,
      },
      ScreenAbout: {
        screen: POSMobileAbout,
      },
    },
    {
      initialRouteName: "ScreenHome",
    }
  );

const MyApp = createAppContainer(MyDrawerNavigator);