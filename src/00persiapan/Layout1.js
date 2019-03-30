import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
export default class Layout1 extends Component {
  render() {
    return (
      <View style={styles.conatinerMain}>
        <View style={styles.box1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>A</Text>
          <Text style={styles.text}>B</Text>
          <Text style={styles.text}>C</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  conatinerMain: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'blue',
    marginTop: 20
  }, 
  box1: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'flex-end',
  },
  box2: {
    flex: 1,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
   }, 
  box3: {
    flex: 1,
    backgroundColor: 'red'
  },
  text: {
    fontSize: 50
  },
});