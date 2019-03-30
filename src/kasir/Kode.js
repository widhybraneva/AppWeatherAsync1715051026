import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Kode extends Component {
  render() {
    return (
      <View style={styles.containerMain}>
      <View style={{height:20}}></View>
        <View style={[styles.box1, styles.center1]}>
          <Text style={{color: 'white', fontSize: 20}}>DATA BARANG</Text>
        </View>
            <View>
                <Text style={styles.box2}>001 - Kopi Nescafe</Text>
                <Text style={styles.box2}>002 - Kopi Torabika</Text>
                <Text style={styles.box2}>003 - Aqua 1.5L</Text>
                <Text style={styles.box2}>004 - Pop Mie Goreng Pedas</Text>
                <Text style={styles.box2}>005 - Pop Mie Goreng Ayam Bawang</Text>
                <Text style={styles.box2}>006 - Indomie Goreng</Text>
            </View>
            <View style={{flex:2}}></View>
          <View style={[styles.box3, styles.center1]}>
          <Text style={{color: 'white', fontSize: 20}}>Hubungi Kami</Text>
          <Text style={{color: 'white', fontSize: 20}}>087897895214</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
    },
     box1: {
        flex: 0.7,
        backgroundColor: '#0000FF',
        borderRadius:10,
    },
     box2:{
        backgroundColor:'#808080',
        fontSize:20,
        margin:10,
        alignItems:'center',
        color:'white',
        borderRadius:10,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:10,
        paddingBottom:10
    },
     box3: {
        flex: 0.7,
        backgroundColor: '#0000FF',
        borderRadius:10,
    },
    center1: {
        alignItems: 'center',
        justifyContent: 'center',
    },

})

export default Kode;
