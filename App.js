import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

const buildData = () => {
  const data = []
  for (let i = 0; i < 100; i++) {
    data.push(i)
  }
  return data
}

// const BasicItem = (props) => <View><Text>Item n: {props.numero}</Text></View>
const BasicItem = ({numero, nome}) => <View><Text>Item n: {numero} - {nome}</Text></View>

export default function App() {

  return (
    <ScrollView style={styles.scrollView}>
      <FlatList
        data={buildData()}
        renderItem={({item}) => (
          <BasicItem key={item} nome="teste" numero={item} />
        )}
        keyExtractor={item => item}
      />

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: 'pink',
  }
});

