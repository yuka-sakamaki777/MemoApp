import { View, Text, ScrollView, StyleSheet } from 'react-native'
import Icon from '../../components/Icon'
import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'
import { router } from 'expo-router'

const handlePress = (): void => {
  router.push('/memo/edit')
}

const Detail = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
    <View style={styles.memoHeader}>
      <Text style={styles.memoTitle}>買い物リスト</Text>
      <Text style={styles.memoDate}>2022年10月11日</Text>
    </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>本文が入ります</Text>
      </ScrollView>
      <CircleButton onPress={handlePress} style={{ top: 160, bottom: 'auto' }}>
        <Icon name='pencil' size={40} color='#ffffff' />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19
  },
  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold'
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#000000'
  }
})

export default Detail
