import React, { Component } from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

class POSMobileAbout extends Component {

  render() {
    return (
        <View style={styles.containerMain}>
            <View style={{height:24}}>

            </View>
            <View style={{flex:1, alignItems:'center', 
                        justifyContent:'space-around', 
                        backgroundColor:'#ffc733'}}>
                <Text style={{fontSize:30, 
                            color:'white'}}>TENTANG SAYA</Text>
            </View>
            <View style={{flex:3}}>
                <View style={{flex:1,
                            flexDirection:'row'}}>
                    <View style={{flex:1,
                                alignItems:'flex-end',
                                justifyContent:'space-around', 
                                borderRadius:20}}>
                        <Image  style={{width: 100, height: 115}}
                        source={{uri:'https://scontent.fsub3-1.fna.fbcdn.net/v/t1.0-9/48947275_2233204493378023_6692304030720327680_n.jpg?_nc_cat=104&_nc_eui2=AeG_q1Z7D3JibwfOA9LTy5jl6YWognSQC_L3Vfa2Rd4WXW4c4Wmnd3yyJAaHP2ebWkR1BVI1iwWHCCLwlV6yng7xBun6RlEHoSzKlrfdSuhxwg&_nc_ht=scontent.fsub3-1.fna&oh=64b17d0784ffee56c6adf69375dbc521&oe=5D1CEB73'}}/>
                    </View>
                    <View style={{flex:2,
                                alignItems:'stretch',  
                                justifyContent:'space-evenly',
                                margin:5}}>
                        <Text style={{borderWidth:1, fontSize:15, paddingLeft:10}}>Nama  : Ida Bagus Widia Putra S.</Text>
                        <Text style={{borderWidth:1, fontSize:15, paddingLeft:10}}>NIM   : 1715051087</Text>
                        <Text style={{borderWidth:1, fontSize:15, paddingLeft:10}}>Kelas : 4D</Text>
                    </View>
                </View>
            </View>
            <View style={{flex:6}}>

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

export default POSMobileAbout;