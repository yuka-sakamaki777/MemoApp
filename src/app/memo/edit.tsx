import { View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import Icon from '../../components/Icon'
import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'

const Edit = (): JSX.Element => {
  return (
    // CircleButtonを考慮するための設定
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <Header />
      <View style={styles.inputContainer}>
        {/* iOSでは複数行として認識させるためmultilineを使う */}
        <TextInput multiline style={styles.input} value={'買い物\nリスト'}/>
      </View>
      <CircleButton>
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

export default Edit