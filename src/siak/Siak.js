import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Button} from 'react-native'

export default class Siak extends Component {
  constructor(props){
    super(props)
    this.state={
      tugas1:0,
      tugas2:0,
      na:0,
      predikat:'-'
    }
  }
  render() {
    return (
      <View style={styles.Main}>
      <View style={{height:24}}></View>
        <View style={[styles.box1, styles.center1]}>
          <Text style={styles.teks2}>SIAK</Text>
        </View>
        <View style={styles.box2}>
            <View style={styles.vInput}>
              <View style={styles.vItemInput}> 
              <Text style={styles.txtLabelInput}>Tugas1</Text>
              <TextInput style={styles.txtInput} onChangeText={
                (tugas1) => this.setState({tugas1})
              }/>
              </View>
               </View>
            <View style={styles.vInput}>
              <View style={styles.vItemInput}> 
              <Text style={styles.txtLabelInput}>Tugas2</Text>
              <TextInput style={styles.txtInput} onChangeText={
                (tugas2) => this.setState({tugas2})
              } />
              </View>
              </View>
          <View style={styles.vTombol}>
                <Button
                  title="Hitung"
                  onPress ={
                    () => {
                        let nilaiAkhir = 0.5 * this.state.tugas1 + 0.5* this.state.tugas2;
                        this.setState({na:nilaiAkhir});
                        if (nilaiAkhir>50)
                          this.setState({predikat:'Lulus'});
                        else {
                          this.setState({predikat:'Tidak Lulus'});
                        }
                    }
                  }
                />
              </View>
              <View style={{flex:1}}></View>
        </View>
        <View style={styles.box3}>
          <Text style={[styles.teks1, styles.box]}>Tugas1={this.state.tugas1}</Text>
          <Text style={[styles.teks1, styles.box]}>Tugas2= {this.state.tugas2} </Text>
          <Text style={[styles.teks1, styles.box]}>Na= {this.state.na} </Text>
          <Text style={[styles.teks1, styles.box]}>Predikat={this.state.predikat}</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  Main: {
    flex: 1
  },
  center1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
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
  box1: {
    flex: 1,
    backgroundColor: '#0000FF',
  },
  vInput: {
    flex:2,
    backgroundColor:'#E3F2FD',
    justifyContent:'flex-start'
  },
  vItemInput: {
    flex:1,
    flexDirection:'row',
    margin:10
  },
  txtLabelInput: {
    flex:2,
    height: 30
  },
  txtInput: {
    flex:3,
    height: 30,
    backgroundColor:'#fff',
    borderColor: 'gray',
    borderWidth: 1
},
  box2: {
    flex: 4,
    margin: 10,
  },

  box3: {
    flex: 4,
    margin: 10,
  },
  teks1: {
    fontSize: 20,
    color: 'black',
  },
   teks2: {
    fontSize: 20,
    color: 'white',
  },
})
