
import { StyleSheet, Text, View } from 'react-native'
import  Header from './src/Componentes/Header'


const  App = () => {
  return (
    <View style={styles.container}>
      <Header tittle = "prueba"/>
      <Text> mundo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 export default App