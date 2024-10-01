import { Text, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';

import styles from './Styles';
import BatTextInput from '../../components/BatTextInput/Index';
import generatePass from '../../services/passwordService';

import * as Clipboard from 'expo-clipboard';

export default function Index() {
const [pass, setPass] = useState('') 

function handleGenerateButton() {
  let genarateToken = generatePass

  setPass(genarateToken)
}

function handleCopyButton(){
  Clipboard.setStringAsync(pass)

  Alert.alert('Copiado!', 'Senha copiada com sucesso!')
}

  return (
    <>
      <BatTextInput pass={pass} />
      <Pressable
        onPress={handleGenerateButton}
        style={ styles.button}
      >
        <Text style={ styles.text}>GENERATE</Text>
      </Pressable>

      <Pressable
        onPress={handleCopyButton}
        style={ styles.button}
      >
        <Text style={ styles.text}>⚡ COPY</Text>
      </Pressable>
    </>
  )
}