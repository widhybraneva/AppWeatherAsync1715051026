import React, { Component } from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

class Tentang extends Component {

  render() {
    return (
        <View style={styles.containerMain}>
            <View style={{height:24}}>
            </View>
            <View style={[styles.box1, styles.center1]}>
          <Text style={{color: 'white', fontSize: 20}}>TENTANG KAMI</Text>
        </View>
            <View style={{flex:3}}>
                <View style={styles.box01}>
                <View style={styles.box02}>
                    <Image  style={styles.gambar}
                    source={{url:'https://scontent.fdps3-1.fna.fbcdn.net/v/t1.0-9/21743068_924285041058228_2742253300892014465_n.jpg?_nc_cat=104&_nc_eui2=AeFZ3a9d7WLUzR6axRsgRRGk99DAaFENk-tVUVys5iG2A77JGoMYXh_2CVu-9FcpQcXR9MXm9qZlyiO5sRIWIczu05fJ3EOyvejbSEKdcKS3x_0PRuf3DlXzHupVEsLlfE8&_nc_ht=scontent.fdps3-1.fna&oh=6c2109c06ae60348d57d849b140283e9&oe=5D0E1D6B'}}
                    />
                    </View>
                    <View style={styles.label1}>
                        <Text style={styles.label2}>Nama  : I Gede Widiada Adi Braneva</Text>
                        <Text style={styles.label2}>NIM   : 1715051026</Text>
                        <Text style={styles.label2}>Kelas : 4D</Text>
                    </View>
                </View>
            </View>
            <View style={{flex:3}}> </View>
            <View style={[styles.box4, styles.center1]}>
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
    box01: {
      flex:5,
      flexDirection:'column'
    },
    box02: {
        flex:5,
        alignItems:'center',
        justifyContent:'center', 
        borderRadius:20
    },
    box4: {
        flex: 0.7,
        backgroundColor: '#0000FF',
        borderRadius:10,
    },
    gambar: {
        width: 100,
        height: 115
    },
    label1: {
        flex:4,
        alignItems:'stretch',  
        justifyContent:'center',
        margin:5
    },
    label2: {
        borderWidth:1,
        fontSize:15, 
        paddingLeft:10, 
        paddingTop:10,
        paddingRight:10,
        paddingBottom:10
    },
    center1: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Tentang;