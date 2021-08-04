import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, Image} from 'react-native';
import axios from 'axios';



const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/"

export default function SearchPokemon(props){

    const [sprite, setSprite] = useState('');
    const [type, setType] = useState('');
    const [ability1, setAbility1] = useState('')
    const [ability2, setAbility2] = useState('')
    const [exp, setExp] = useState(0)
    const [weight, setWeight] = useState(0)
    const [index, setIndex] = useState(0)

    let newENDPOINT = ENDPOINT + props.pokemon;

    useEffect(() => {
        const getPokemon = async() => {
          await axios.get(newENDPOINT).then((res) => setSprite(res.data.sprites.front_default));
          await axios.get(newENDPOINT).then((res) => setType(res.data.types[0].type.name));
          await axios.get(newENDPOINT).then((res) => setAbility1(res.data.abilities[0].ability.name));
          await axios.get(newENDPOINT).then((res) => setAbility2(res.data.abilities[1].ability.name));
          await axios.get(newENDPOINT).then((res) => setExp(res.data.base_experience));
          await axios.get(newENDPOINT).then((res) => setWeight(res.data.weight));
          await axios.get(newENDPOINT).then((res) => setIndex(res.data.id));
        }
        getPokemon();
    }, [props.pokemon]);

        return(
            <View>
                <View style={styles.container}>
                    <View style={styles.circle}><Image style={styles.image} source={{ uri: sprite }}/></View>
                </View>

                <View style={styles.container}>
                    <View style={styles.square}>
                        <Text style={styles.text}>Type: {type}</Text>
                        <Text style={styles.text}> Ability 1: {ability1}</Text>
                        <Text style={styles.text}> Ability 2: {ability2}</Text>
                        <Text style={styles.text}> Base Exp: {exp}</Text>
                        <Text style={styles.text}> Weight: {weight}</Text>
                        <Text style={styles.text}> Pokedex Index: {index}</Text>
                </View>
            </View>
        </View>
        )
}

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        backgroundColor:'transparent',
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 100,
        borderWidth:1,
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    circle:{
        width:200,
        height:200,
        borderRadius: 100,
        backgroundColor:'rgba(0,0,0,.7)',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    square:{
        width: 300,
        height: 300,
        backgroundColor:'rgba(189,201,205,1)',
        borderRadius: 15,
        borderWidth:1
    },
    text: {
        textAlign: 'center',
        padding: 15
    }
    });