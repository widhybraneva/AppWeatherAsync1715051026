import React from 'react';
import {StyleSheet,View, TextInput, TouchableOpacity,Text} from 'react-native';


export default class HomeScreen extends React.Component {
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
          
            <View style={styles.atas}>
              <Text style={{color: 'white', fontSize: 25}}>SISTEM PENJUALAN</Text>
            </View>
            <View>
              <Text>{'\n'}</Text>
              <View style={{flex: 0, flexDirection: 'row',justifyContent: 'space-between',}}>
                <Text style={{fontSize: 17,margin: 10}}>Kode Barang:</Text>
                <TextInput
                    style={{height: 45,width: 90, borderColor: 'black', borderWidth: 1}}
                    onChangeText={(kode) => this.setState({kode})}
                    value={this.state.kode}
                />
                <Text>{'\n'}</Text>
              </View>
              <Text>{'\n'}</Text>
              <View style={{flex: 0, flexDirection: 'row'}}>
                <Text style={{fontSize: 17, margin: 10}}>Jumlah Beli: </Text>
                <TextInput
                    style={{height: 45,width: 90, borderColor: 'black', borderWidth: 1}}
                    onChangeText={(jumlah) => this.setState({jumlah})}
                    value={this.state.jumlah}
                />
              </View>
              <Text>{'\n'}</Text>
              <View style={{flex: 0, flexDirection: 'row'}}>
                <Text style={{fontSize: 17,margin: 10}}>Harga Barang: </Text>
                <TextInput
                    style={{height: 40,width: 90, borderColor: 'black', borderWidth: 1}}
                    onChangeText={(harga) => this.setState({harga})}
                    value={this.state.harga}
                />
              </View>
            </View>
            <Text>{'\n'}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={this.onPress}
            >
              <Text style={{color: "white"}}> hitung </Text>
            </TouchableOpacity>
            <Text>{'\n'}</Text>
            <Text>Total Belanja: {this.state.total}</Text>
            <Text>{'\n'}</Text>
            <TextInput
                style={{height: 40, borderColor: 'black', borderWidth: 1}}
                onChangeText={(bayar) => this.setState({bayar})}
                value={this.state.bayar}
                placeholder="Uang Bayar"
            />
            <Text>{'\n'}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={this.kembalian}
            >
              <Text style={{color: "white"}}> hitung </Text>
            </TouchableOpacity>
            <Text>{'\n'}</Text>
            <Text>Total kembalian: {this.state.kembalian}</Text>
          </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  atas: {
    backgroundColor: '#ffc733',
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#01579b',
    color: "white",
    padding: 10,
    borderRadius: 7
  },

})