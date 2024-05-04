import { View, StyleSheet } from 'react-native'
import { router, useNavigation } from 'expo-router'
import { useEffect } from 'react'
import Icon from '../../components/Icon'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import LogOutButton from '../../components/LogOutButton'

const handlePress = (): void => {
  router.push('/memo/create')
}

const List = (): JSX.Element => {
  const navigation = useNavigation()
  useEffect(() => {
    // 画面が表示された時、1度だけ実行
    navigation.setOptions({
      headerRight: () => { return <LogOutButton /> }
    })
  }, [])
  return (
    <View style={styles.container}>
      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
      <CircleButton onPress={handlePress}>
        <Icon name='plus' size={40} color='#ffffff' />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})

export default List
