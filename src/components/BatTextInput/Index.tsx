import { View, TextInput } from 'react-native'
import React from 'react'

import styles from './Styles'

interface batButtonInputProps {
  pass: string,
}

export default function Index( props : batButtonInputProps) {
  return (
    <View>
      <TextInput
        style={styles.inputer}
        placeholder='pass'
        value={props.pass}
      >
      </TextInput>
    </View>
  )
}