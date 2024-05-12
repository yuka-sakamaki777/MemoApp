import { useEffect, useState } from 'react'
import { View, TextInput, StyleSheet, Alert } from 'react-native'
import Icon from '../../components/Icon'
import CircleButton from '../../components/CircleButton'
import { router, useLocalSearchParams } from 'expo-router'
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'
import { auth, db } from '../../config'
import KeyboardAvoidingView from '../../components/KeyBoardAvoidingView'

const handlePress = (id: string, bodyText: string): void => {
  if (auth.currentUser === null) return
  const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
  setDoc(ref, {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date())
  })
    .then(() => {
      router.back()
    })
    .catch((error) => {
      Alert.alert(error)
    })
}

const Edit = (): JSX.Element => {
  const id = String(useLocalSearchParams().id)
  const [bodyText, setBodyText] = useState('')
  useEffect(() => {
    if (auth.currentUser === null) return
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
    getDoc(ref)
      .then((docRef) => {
        console.log(docRef)
        const remoteBodyText = docRef?.data()?.bodyText
        setBodyText(remoteBodyText)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
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
      <CircleButton onPress={() => { handlePress(id, bodyText) }}>
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
    flex: 1
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    // Androidのみ
    textAlignVertical: 'top',
    paddingVertical: 32,
    paddingHorizontal: 27
  }
})

export default Edit
