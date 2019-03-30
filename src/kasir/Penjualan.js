import React from 'react';
import {StyleSheet,View, TextInput, TouchableOpacity,Text} from 'react-native';


export default class Penjualan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kode: '',
      jumlah: '',
      harga: '',
    };
  }
  onPress = () => {
    this.setState({
      total: this.state.jumlah*this.state.harga,
      stok: this.state.stok - this.state.jumlah
    })
  }
  kembalian = () => {
    this.setState({
      kembalian:  (this.state.bayar-this.state.total)
    })
  }

  render() {
    return (
          <View style={styles.container}>
          <View style={{height:15}}>
            </View>
            <View style={[styles.box1, styles.center1]}>
              <Text style={{color: 'white', fontSize: 20}}>PENJUALAN</Text>
            </View>
            <View style={styles.box2}>
              <View style={styles.vInput}>
              <View style={styles.vItemInput}> 
              <Text style={styles.txtLabelInput}>Kode Barang</Text>
              <TextInput style={styles.txtInput} onChangeText={(kode) => this.setState({kode})}
                    value={this.state.kode}
              />
              </View>
               </View>
              <View style={styles.vInput}>
              <View style={styles.vItemInput}> 
              <Text style={styles.txtLabelInput}>Jumlah</Text>
              <TextInput style={styles.txtInput} onChangeText={(jumlah) => this.setState({jumlah})}
                    value={this.state.jumlah}
              />
               </View>
               </View>
              <View style={styles.vInput}>
              <View style={styles.vItemInput}> 
              <Text style={styles.txtLabelInput}>Harga</Text>
              <TextInput style={styles.txtInput} onChangeText={(harga) => this.setState({harga})}
                    value={this.state.harga}
              />
              </View>
              </View>
             </View>

            <View style={styles.box3}>
            <TouchableOpacity
                style={styles.button}
                onPress={this.onPress}
            >
              <Text style={{color: "white"}}> HITUNG </Text>
            </TouchableOpacity>
            <Text>{'\n'}</Text>
            <Text>Total Belanja: {this.state.total}</Text>
            <Text>{'\n'}</Text>
            <TextInput
                style={styles.txtInput1}
                onChangeText={(bayar) => this.setState({bayar})}
                value={this.state.bayar}
                placeholder="Uang Bayar"
            />
            <Text>{'\n'}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={this.kembalian}
            >
              <Text style={{color: "white"}}> HITUNG </Text>
            </TouchableOpacity>
            <Text>{'\n'}</Text>
            <Text>Total kembalian: {this.state.kembalian}</Text>
          </View>
          <View style={[styles.box4, styles.center1]}>
            <Text style={{color: 'white', fontSize: 20}}>Hubungi Kami</Text>
            <Text style={{color: 'white', fontSize: 20}}>087897895214</Text>
            </View>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  vInput: {
    flex:2,
    backgroundColor:'#E3F2FD',
    justifyContent:'flex-start',
  },
  vItemInput: {
    flex:1,
    flexDirection:'row',
    margin:10,
  },
  txtLabelInput: {
    flex:2,
    height: 30,
  },
  txtInput: {
    flex:3,
    height: 30,
    backgroundColor:'#fff',
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft:10
  },
  txtInput1: {
    height: 40, 
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft:10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#01579b',
    color: "white",
    padding: 10,
    borderRadius: 7
  },
  box1: {
    flex: 1,
    backgroundColor: '#0000FF',
    borderRadius:10,
  },
   box2: {
    flex: 4,
    margin: 10,
  },
  box3: {
    flex: 4,
    margin: 10,
  },
  box4: {
    flex: 0.7,
    backgroundColor: '#0000FF',
    borderRadius:10,
  },
  center1: {
    alignItems: 'center',
    justifyContent: 'center',
  },

})