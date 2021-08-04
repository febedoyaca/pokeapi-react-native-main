import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import axios from "axios";

export default function PokemonInfo(props) {
    const [type, setType] = useState("");
    const [name , setName] = useState("");

    const ENDPOINT = "https://pokeapi.co/api/v2/pokemon"+"/"+props.idPokemon;

    useEffect(() => {
        const getPokemon = async() => {
            await axios.get(ENDPOINT).then((res) => setName(res.data.species.name));
            await axios.get(ENDPOINT).then((res) => setType(res.data.types[0].type.name));
        }
        getPokemon();
    }, []);

      return (
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>Type: {type}</Text>
        </View>
      );
  }

const styles = StyleSheet.create({
container:  {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:15,
    borderWidth:1,
    backgroundColor:'rgba(189,201,205,1)',
},
text: {
    textTransform: 'capitalize',
    color: 'black',
}
});