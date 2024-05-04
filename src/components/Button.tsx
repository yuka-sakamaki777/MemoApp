import { View, Text, StyleSheet } from 'react-native'

interface Props {
  label: string
}

const Button = (props: Props): JSX.Element => {
  const { label } = props
  return (
    <View style={styles.button}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    // flexの並び方自体を整理する時に使う
    alignSelf: 'flex-start',
    marginBottom: 24
  },
  buttonLabel: {
    fontSize: 16,
    color: '#ffffff',
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 24
  }
})

export default Button
