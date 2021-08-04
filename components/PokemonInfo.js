import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import axios from "axios";

export default function PokemonInfo(props) {
    const [results, setResults] = useState("Loading...");

    const ENDPOINT = "https://pokeapi.co/api/v2/pokemon"+"/"+props.idPokemon;

    useEffect(() => {
        const getPokemon = async() => {
            await axios.get(ENDPOINT).then((res) => setResults(res.data.sprites.front_default));
        }
        getPokemon();
    }, []);

      return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: results }}/>
        </View>
      );
  }

const styles = StyleSheet.create({
container: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
},
image: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth:1,
    backgroundColor:'rgba(0,0,0,.7)',
}
});