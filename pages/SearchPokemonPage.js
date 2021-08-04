import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ImageBackground, TextInput, Dimensions,Button, ScrollView} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { SearchBar } from 'react-native-elements';
import SearchPokemon from '../components/SearchPokemon'

export default function SearchPokemonPage(){

    const[pokemon, setPokemon] = useState('bulbasaur');
    const[value,setValue] = useState('')
 
    const handleSubmit = (e) => {
        if (value !==''){return setPokemon(value)}
    }

    return(
        <SafeAreaProvider>
            <SafeAreaView style={{flex:1}} forceInset={{top:'always'}}>
                <View style={[styles.container]}>
                    <ImageBackground source = {{uri:"https://i.pinimg.com/736x/11/84/55/1184555917431eef065685feabd51792.jpg"}} style={[styles.fixed, {zIndex:-1}]}>
                    <View>
                        <SearchBar onSubmitEditing ={(handleSubmit)} onChangeText={(inner => setValue(inner))} placeholder = 'Look up a pokemon!' value={value}/>
                    </View>
                    <ScrollView>
                        <SearchPokemon pokemon = {pokemon}/>
                    </ScrollView>
                    </ImageBackground>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    fixed: {
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        flex:1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
})