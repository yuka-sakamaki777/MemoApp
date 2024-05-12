import { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Icon from '../../components/Icon'
import CircleButton from '../../components/CircleButton'
import KeyboardAvoidingView from '../../components/KeyBoardAvoidingView'
import { router } from 'expo-router'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { db, auth } from '../../config'

const handlePress = (bodyText: string): void => {
  if (auth.currentUser === null) return
  const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
  addDoc(ref, {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date())
  })
    .then((docRef) => {
      console.log(docRef)
      router.back()
    })
    .catch((error) => {
      console.log(error)
    })
}

const Create = (): JSX.Element => {
  const [bodyText, setBodyText] = useState('')
  return (
    // キーボード表示時のCircleButtonを考慮するための設定
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        {/* iOSでは複数行として認識させるためmultilineを使う */}
        <TextInput
          multiline
          style={styles.input}
          value={bodyText}
          onChangeText={(text) => { setBodyText(text) }}
          autoFocus
        />
      </View>
      <CircleButton onPress={() => { handlePress(bodyText) }}>
        <Icon name='check' size={40} color='#ffffff' />
      </CircleButton>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    // Androidのみ
    textAlignVertical: 'top'
  }
})

export default Create
