import { View, Text, Image } from 'react-native'
import React from 'react'

import styles from './MenuStyles'
import batLogo from '../../../assets/bat-logo.png';

export default function Menu() {
  return (
    <View>
      <Text style={styles.title}>BAT PASS GENERATOR</Text>
      <Image 
        source={batLogo}
        style={ styles.image }
      />
    </View>
  )
}