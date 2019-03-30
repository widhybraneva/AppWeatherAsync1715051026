import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Cuaca2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            forecast: {
                main: '',
                description: '',
                temp: 0,
                sunrise: 0,
                sunset: 0,
                pressure: 0,
                humidity: 0,
                sea_level: 0,
                grnd_level: 0,
                speed: 0,
                loading: false,
            }
        };
    }
    async getWeather() {

        try {
            this.setState({loading: true });
            let response = await fetch(
                'http://api.openweathermap.org/data/2.5/weather?q=' 
                + this.state.city + '&appid=fa2b0bf1e083faa273736e1926576017&units=metric'
            );

            let responseJson = await response.json();
            return this.setState({
                loading: false,
                forecast: {
                    main: responseJson.weather[0].main,
                    description: responseJson.weather[0].description,
                    temp: responseJson.main.temp,
                    sunrise: responseJson.sys.sunrise,
                    sunset: responseJson.sys.sunset,
                    pressure: responseJson.main.pressure,
                    humidity: responseJson.main.humidity,
                    sea_level: responseJson.main.sea_level,
                    grnd_level: responseJson.main.grnd_level,
                    speed: responseJson.wind.speed
                }
            });
        } catch (error) {
            console.error(error);
            this.setState({loading: true });
        }
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

          <View style={styles.box3}>
          <View style={styles.box01}>
            <View style={[styles.box02, styles.center1]}>
            <Icon name='ios-leaf' color='green' size={25}></Icon>
            <Text style={styles.textIsi}> Wind Speed : {this.state.forecast.speed} </Text>
            </View>
            <View style={[styles.box02, styles.center1]}>
            <Icon name='ios-thermometer' color='green' size={25}></Icon>
            <Text style={styles.textIsi}> Temp : {this.state.forecast.temp} </Text>
            </View>
          </View>
          <View style={styles.box01}>
            <View style={[styles.box02, styles.center1]}>
            <Icon name='ios-cloud' color='green' size={25}></Icon>
            <Text style={styles.textIsi}> Main : {this.state.forecast.main} </Text>
            </View>
            <View style={[styles.box02, styles.center1]}>
            <Icon name='ios-partly-sunny' color='green' size={25}></Icon>
            <Text style={styles.textIsi}> Main Desc : {this.state.forecast.description} </Text>
            </View>
          </View>
          <View style={styles.box01}>
            <View style={[styles.box02, styles.center1]}>
            <Icon name='ios-sunny' color='green' size={25}></Icon>
            <Text style={styles.textIsi}> Sunrise : {this.state.forecast.sunrise} </Text>
            </View>
            <View style={[styles.box02, styles.center1]}>
            <Icon name='ios-sunny' color='green' size={25}></Icon>
            <Text style={styles.textIsi}> Sunset : {this.state.forecast.sunset} </Text>
            </View>
          </View>
          <View style={styles.box01}>
            <View style={[styles.box02, styles.center1]}>
            <Icon name='ios-git-compare' color='green' size={25}></Icon>
            <Text style={styles.textIsi}> Pressure : {this.state.forecast.pressure} </Text>
            </View>
            <View style={[styles.box02, styles.center1]}>
            <Icon name='ios-water' color='green' size={25}></Icon>
            <Text style={styles.textIsi}> Humidity : {this.state.forecast.humidity} </Text>
            </View>
          </View>
          <View style={styles.box01}>
            <View style={[styles.box02, styles.center1]}>
            <Icon name='ios-trending-down' color='green' size={25}></Icon>
            <Text style={styles.textIsi}> Sea Level : {this.state.forecast.sea_level} </Text>
            </View>
            <View style={[styles.box02, styles.center1]}>
            <Icon name='ios-analytics' color='green' size={25}></Icon>
            <Text style={styles.textIsi}> Ground Level : {this.state.forecast.grnd_level} </Text>
            </View>
          </View>
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
    },
    head: {
        flex: 0.4, 
        backgroundColor: 'green',
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textHead: {
        fontSize: 25,
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
    txtLabelInput: {
        height: 30,
        fontSize: 20,
        color: '#fff',
    },
    isian: {
        backgroundColor: '#fff',
        width: 200,
        padding: 10,
        margin: 15,
        borderWidth: 2,
      },
    box02: {
        flex: 1,
        height: 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingRight: 20,
        paddingLeft: 10,
        margin: 5,
        backgroundColor: '#FFFFFF',
        
    },
    textInput: {
        height: 40,
        color: 'white',
        borderWidth: 1,
        color: '#fff',
        paddingLeft: 10,
    },
    loadingStyle: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center"
    },
    footer: {
        flex: 0.4, 
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
  textFooter: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
    },
  box3: {
        flex: 3,
        backgroundColor: 'green',
        margin: 10,
    },
  box01: {
        flex: 1,
        margin: 1,
        flexDirection: 'row',
    },
  buttonStyle: {
        backgroundColor: 'blue',
        height: 40,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
  textIsi:{
        padding: 3,
        fontSize: 10
    }
  
});