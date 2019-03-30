import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Tugas extends Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={[styles.box1, styles.center1]}>
          <Text style={styles.teksPti}>Pendidikan Teknik Informatika</Text>
        </View>
        <View style={[styles.box2, styles.center1]}>
          <Text style={styles.teksSlider}>Slider</Text>
        </View>
        <View style={styles.box3}>
          <View style={styles.box01}>
            <View style={[styles.box02, styles.center1]}>
              <Text style={styles.teks}>1</Text>
            </View>
            <View style={[styles.box02, styles.center1]}>
              <Text style={styles.teks}>2</Text>
            </View>
            <View style={[styles.box02, styles.center1]}>
              <Text style={styles.teks}>3</Text>
            </View>
            <View style={[styles.box02, styles.center1]}>
              <Text style={styles.teks}>4</Text>
            </View>
          </View>
          <View style={styles.box01}>
            <View style={[styles.box02, styles.center1]}>
              <Text style={styles.teks}>5</Text>
            </View>
            <View style={[styles.box02, styles.center1]}>
              <Text style={styles.teks}>6</Text>
            </View>
            <View style={[styles.box02, styles.center1]}>
              <Text style={styles.teks}>7</Text>
            </View>
            <View style={[styles.box02, styles.center1]}>
              <Text style={styles.teks}>8</Text>
            </View>
          </View>
        </View>
        <View style={[styles.box4, styles.center1]}>
          <Text style={styles.teksJaen}>#JaenKuliahdiPTI</Text>
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

  box1: {
    flex: 1,
    backgroundColor: '#0000FF',
  },
  box2: {
    flex: 2,
    backgroundColor: '#00BFFF',
  },
  box3: {
    flex: 2,
    backgroundColor: '#87CEFA',
    margin: 10,
  },
  box4: {
    flex: 1,
    backgroundColor: '#0000FF',
    margin: 10,
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

  },

  teksSlider: {
    fontSize: 30,
    color: 'black',
  },
  teksPti: {
    fontSize: 20,
    color: 'white',
  },
  teksJaen: {
    fontSize: 20,
    color: 'white',
  },
})
