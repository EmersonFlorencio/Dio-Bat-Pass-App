import { View, TextInput } from 'react-native'
import React from 'react'

import styles from './Styles'

export default function Index() {
  return (
    <View>
      <TextInput
        style={styles.inputer}
        placeholder='pass'
      >
      </TextInput>
    </View>
  )
}