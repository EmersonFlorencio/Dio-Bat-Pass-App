import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from './Styles';
import Menu from '../../components/Menu/Menu';
import BatTextInput from '../../components/BatTextInput/Index'

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Menu />
      </View>

      <View style={ styles.inputerContainer }>
        <BatTextInput />
      </View>

        <StatusBar style="light" />
    </View>
  )
}

