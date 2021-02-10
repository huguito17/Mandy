import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import fetchLiquors from './src/API/'
import Liquors from './src/Components/Liquors'


export default function App() {

  const [liquor, setLiquor] = useState([]);
  const [count, setCount] = useState(0);
  const [endLiquor, setEndLiquor] = useState(false);
  const [restart, setRestart] =useState(false);
  const [page, setPage] = useState(0);

  useEffect (() => {
    handlerStart();
  },[page, restart]);
  
  const handlerNextLiquor = () =>{
    const increment = count + 1;
    if(increment === 24){
      setEndLiquor(true);
    }
    setCount(increment);
  };

  const handlerStart = () => {
    setEndLiquor(false)
    setCount(0);
    const getLiquors = async () => {
  
      const newLiquor = await fetchLiquors(page);
      console.log(newLiquor);
      setLiquor(newLiquor);
    }
    getLiquors();
  }
  const handlerRestart = () => {
    setRestart(!restart);
    const randomPage = (Math.random() * 10)
    setPage(randomPage);
  }

  if (liquor.length && !endLiquor){
  
    return (
      <View style={styles.container}>
        <Liquors 
        name = {liquor[count].name} 
        description = {liquor[count].description} 
        />
        <Button title="Next" onPress={handlerNextLiquor}/> 
        <StatusBar style="auto" />
      </View>
    );
  }else if(liquor.length && endLiquor){ //Si llega al final
    return (
      <View style={styles.container}>
        <Text>FIN</Text> 
        <Button title="Restart" onPress={handlerRestart}/> 
        <StatusBar style="auto" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text>Esperameeee</Text>
      <StatusBar style="auto" />
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
