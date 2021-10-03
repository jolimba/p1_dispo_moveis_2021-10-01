import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import EntradaDeDados from './Components/EntradaDeDados';
import ExibeItens from './Components/ExibeItens';
import ExibirItem from './Components/ExibirItem';

export default function App() {
  const [item, setItem] = useState('')
  const [fabricante, setFabricante] = useState('')
  const [lista, setLista] = useState([])
  const getItem = (item) => {
      setItem(item)
  }
  const getFabricante = (fabricante) => {
    setFabricante(fabricante)
  }
  const exibeItem = (item, fabricante) =>{
    setLista([...lista, {
      item: item,
      fabricante: fabricante
    }])
  }
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <EntradaDeDados
          exibeItem={exibeItem}
          item={item}
          getItem={getItem}
          fabricante={fabricante}
          getFabricante={getFabricante}
        />
        {lista.length === 0 ? null :
          <ExibeItens lista={lista}></ExibeItens>
        }
        {lista.length === 0 ? null : <ExibirItem lista={lista}/> }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
    flexDirection: 'column'
  },
  entrada: {
    padding: 12,
    borderBottomColor: '#BB96F3',
    borderBottomWidth: 2,
    marginBottom: 4,
    textAlign: 'center'
  },
  view: {
    marginBottom: 12
  }
});
