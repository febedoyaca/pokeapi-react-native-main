import React, {useState,useRef} from 'react';
import {StyleSheet, View, ImageBackground, Image, Button, Dimensions} from 'react-native';


export default function HomePage({navigation}) {
    const pokemonHandler = () =>{navigation.navigate('All Pokemon')}
    const searchHandler = () =>{navigation.navigate('Search Pokemon')}


    return(
        <View style={styles.container}>
            <ImageBackground source={{uri: 'https://cdn.wallpapersafari.com/99/25/rQeFHW.jpg'}} style={[styles.fixed, {zIndex:-1}]}>
            <View style={styles.button}>
                <Image source={{uri:'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'}} style={[styles.imageFront, {zIndex:0}]}/>
                <View style={{marginBottom:20}}></View>
                <Button title='All pokemon' onPress={pokemonHandler} color='black' />
                <View style={{marginBottom:20}}></View>
                <Button title='Search Pokemon' onPress={searchHandler} color='black' />
            </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems:'center',
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
    },
    button: {
        width:200,
        flex:1,
        justifyContent:'center',
        alignSelf:'center',
        marginBottom:170,
    },
    imageFront:{
        width:257,
        height:103,
        justifyContent:'center',
        alignSelf:'center',
    }
})