import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from './Styles';
import Menu from '../../components/Menu/Menu';
import BatButton from '../../components/BatButton/Index';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Menu />
      </View>

      <View style={ styles.inputerContainer }>
        <BatButton />
      </View>

        <StatusBar style="light" />
    </View>
  )
}

