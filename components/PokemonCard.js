import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import axios from 'axios';
import { Col, Row, Grid } from "react-native-easy-grid";

import PokemonInfo from "./PokemonInfo";
import PokemonType from "./PokemonType";

const ENDPOINT = "https://pokeapi.co/api/v2/pokemon";

export default function PokemonCard(props) {

    const [results, setResults] = useState([]);
    let aux= (props.page-1) * 14;

    useEffect(() => {
        const getPokemon = async() => {
          await axios.get(ENDPOINT+'?limit=7&offset='+ aux.toString()).then((res) => setResults(res.data.results));
        }
        getPokemon();
    }, []);

    let count = aux/2 -1;

    if(results.length > 0) {
      return results.map((pokemon)=>{
        count = count +1;
        idOdd=2*count + 1;
        idEven=2*count + 2;
          return (
            <View style={styles.container}  key={count}>
              <Grid>
                  <Row style={{height: 100}}>
                    <Col style={{ width: 50 }}>
                      <PokemonInfo idPokemon={idOdd}/>
                    </Col>
                    <Col style={{ width: 100 }}>
                      <PokemonType  idPokemon={idOdd}/>
                    </Col>

                    <Col style={{ width: 35 }}/>

                    <Col style={{ width: 50}}>
                      <PokemonInfo idPokemon={idEven}/>
                    </Col>
                    <Col style={{ width: 100 }}>
                      <PokemonType idPokemon={idEven}/>
                    </Col>
                  </Row>
              </Grid>  
            </View>
          );
      })
    } else {
      return <View style={styles.container}><Text>Loading...</Text></View>
    }
    };
  
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
  
  