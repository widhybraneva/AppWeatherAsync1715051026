import React from 'react';
import { View, Text,Button, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Penjualan from './Penjualan.js';
import Kode from './Kode.js';
import Tentang from './Tentang.js';
import Home from './Home.js';

        const AppNavigator = createStackNavigator(
        {
            Home: Home,
            Penjualan: Penjualan,
            Kode: Kode,
            Tentang: Tentang,
        },
        {
            initialRouteName: "Home"
        }
        );
export default createAppContainer(AppNavigator);