import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight} from 'react-native';

export default class Cuaca1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '_',
        description: '_',
        temp: 0
      }
    };
  }
getWeather= () => {
  let url = 'http://api.openweathermap.org/data/2.5/weather?q=+'
  + this.state.city +
  '&appid=fa2b0bf1e083faa273736e1926576017&units=metric';
  return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({
        forecast: {
          main: responseJson.weather[0].main,
          description: responseJson.weather[0].description,
          temp: responseJson.main.temp
        }
      });
    });
}
    render() {
      return (
      <View style={styles.containerMain}>
        <View style={styles.head}>
          <Text style={styles.textHead} >
          Prakiraan Cuaca</Text>
        </View>
          <View style={styles.inputan}>
          <Text style={styles.txtLabelInput}>Masukan Nama Kota</Text>
            <TextInput
            style={styles.isian}
            placeholder="Masukkan Nama Kota"
            onChangeText={(city) => this.setState({ city })}
            />
            <TouchableHighlight
                        style={styles.buttonStyle}
                        onPress={() => this.getWeather()}
                    >
                        {
                            this.state.loading ? <ActivityIndicator color="#fff" size="large" style={styles.loadingStyle} />
                                : <Text style={{ color: '#fff' }}>Lihat</Text>
                        }
                    </TouchableHighlight>
          </View>
          <View style={styles.hasil}>
            <Text style={{ padding: 5,fontSize: 20, color: 'white' }} >
            Kota: {this.state.city} </Text>
            <Text style={{ padding: 5, fontSize: 20, color: 'white' }} >
            Suhu: {this.state.forecast.temp} </Text>
            <Text style={{ padding: 5, fontSize: 20, color: 'white' }} >
            Cuaca: {this.state.forecast.main} </Text>
            <Text style={{ padding: 5, fontSize: 20, color: 'white' }} >
            Deskripsi: {this.state.forecast.description} </Text>
          </View>
        <View style={styles.footer}>
          <Text style={styles.textFooter} >
          Copyright @WidhyBraneva</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column'
  },
  head: {
    flex: 0.4, 
    backgroundColor: 'green',
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',

  },
  txtLabelInput: {
    height: 30,
    fontSize: 20,
    color: '#fff',
  },
  footer: {
    flex: 0.4, 
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHead: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
  textFooter: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  inputan: {
    backgroundColor: 'green',
    flex: 1.5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hasil: {
    backgroundColor: 'green',
    flex: 4,
    margin: 10,
  },
  isian: {
    backgroundColor: '#fff',
    width: 200,
    padding: 10,
    margin: 15,
    borderWidth: 2,
  },
  buttonStyle: {
    backgroundColor: 'blue',
    height: 40,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center'
},
});
