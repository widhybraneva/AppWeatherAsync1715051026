import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native'

export default class Home extends Component {
  
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={[styles.box1, styles.center1]}>
          <Text style={styles.teks1}>KASIR SEDERHANA</Text>
        </View>
        <View style={[styles.box2, styles.center1]}>
          <Image
            style={styles.gambar}
            source={{uri: "http://www.gambaranimasi.org/data/media/1782/animasi-bergerak-kasir-0005.jpg"}}
            resizeMode = "contain"
            />
        </View>
        <View style={styles.box3}>
          <View style={styles.box01}>
            <View style={[styles.box02, styles.center1]}>
            <TouchableHighlight
                        onPressIn={() => this.props.navigation.navigate('Penjualan')}
                        accessibilityLabel="Penjualan"
                        style={styles.vItemMenu}>
                        <Text style={styles.txtHeader}>Penjualan</Text>
            </TouchableHighlight>
            </View>
            <View style={[styles.box02, styles.center1]}>
            <TouchableHighlight
                        onPressIn={() => this.props.navigation.navigate('Kode')}
                        accessibilityLabel="Kode"
                        style={styles.vItemMenu}>
                        <Text style={styles.txtHeader}>Data Barang</Text>
                    </TouchableHighlight>
            </View>
          </View>
          <View style={styles.box01}>
            <View style={[styles.box02, styles.center1]}>
            <TouchableHighlight
                    onPressIn={() => this.props.navigation.navigate('Tentang')}
                    accessibilityLabel="Tentang"
                    style={styles.vItemMenu}>
                    <Text style={styles.txtHeader}>Tentang Kami</Text>
                </TouchableHighlight>
            </View>
          </View>
        </View>
        <View style={[styles.box4, styles.center1]}>
          <Text style={styles.teks1}>Hubungi Kami</Text>
          <Text style={styles.teks1}>087897895214</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#B0E0E6',
  },

  center1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  gambar: {
      width: 400,
      height: 600
      
  },

  box1: {
    flex: 0.7,
    backgroundColor: '#0000FF',
    borderRadius:10,
  },
  box2: {
    flex: 2,
    backgroundColor: '#00BFFF',
  },
  box3: {
    flex: 2,
    backgroundColor: '#87CEFA',
    borderRadius:10,
  },
  box4: {
    flex: 0.5,
    backgroundColor: '#0000FF',
    borderRadius:10,
  },

  box01: {
    flex: 1,
    margin: 15,
    flexDirection: 'row',
  },
  box02: {
    flex: 1,
    margin: 15,
    backgroundColor: '#FFFFFF',
    borderRadius:10,

  },

  teks3: {
    fontSize: 20,
    color: 'black',
  },
  teks1: {
    fontSize: 20,
    color: 'white',
  },
  teks2: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vItemMenu:{
    flex:1,
    flexDirection:'column',
    margin:10,
    alignItems:'center',
    justifyContent:'center'
},
    txtHeader: {
    fontSize:20,
    color : 'black'
},
})
