import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class POSMobileData extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.containerMain}>
        <View style={{height:24}}></View>
        <View style={{flex:1, alignItems:'center', 
                    justifyContent:'space-around', 
                    backgroundColor:'#ffc733'}}>
            <Text style={{fontSize:40, 
                        color:'white'}}>DATA BARANG</Text>
        </View>
        <View style={{flex:3,
                    alignItems:'center'}}>
            <View>
                <Text style={styles.boxData}>Nasi Goreng Ayam</Text>
                <Text style={styles.boxData}>Nasi Goreng Babi</Text>
                <Text style={styles.boxData}>Nasi Goreng Babi Kecap</Text>
                <Text style={styles.boxData}>Nasi Goreng Katsu</Text>
                <Text style={styles.boxData}>Nasi Goreng Cabe Hijau</Text>
                <Text style={styles.boxData}>Steak Ayam</Text>
                <Text style={styles.boxData}>Steak Sapi</Text>
                <Text style={styles.boxData}>Steak Babi</Text>
                <Text style={styles.boxData}>Pizza Tomato Chicken</Text>
                <Text style={styles.boxData}>Pizza Blackpapper Pork</Text>
            </View>
        </View>
        <View style={{flex:3}}></View>
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
    },

    boxData:{
        backgroundColor:'#434343',
        fontSize:25,
        margin:6,
        alignItems:'stretch',
        color:'white',
        borderRadius:5,
        paddingLeft:5,
        paddingRight:5
    }
})

export default POSMobileData;
