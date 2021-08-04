import React, {useState,useRef} from 'react';
import { StyleSheet, View, ImageBackground, ScrollView, Button, _ScrollView, Dimensions} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import PokemonCard from "../components/PokemonCard";

export default function PokemonPage() {

    const _ScrollView = useRef(); 
    const [page, setPage] = useState(1);


    const handlePrevPage = (e) => {
        if (page > 1) {
            _ScrollView.current?.scrollTo({
                y: 0,
                animated: true,
            });
          return setPage(page - 1);
        }
      };
    
      const handleNextPage = (e) => {
        if (page < 64) {
            _ScrollView.current?.scrollTo({
                y: 0,
                animated: true,
            });
          return setPage(page + 1);
        }
      };    

      const handleLastPage = (e) => {
        _ScrollView.current?.scrollTo({
            y: 0,
            animated: true,
        });
        return setPage(64);
      };    

      const handleFirstPage = (e) => {
        _ScrollView.current?.scrollTo({
            y: 0,
            animated: true,
        });
        return setPage(1);
      };    


    return(
        <SafeAreaProvider>
            <SafeAreaView style={{flex:1}} forceInset={{top:'always'}}>
                <View style={[styles.container]}>
                    <ImageBackground source = {{uri:"https://i.pinimg.com/736x/11/84/55/1184555917431eef065685feabd51792.jpg"}} style={[styles.fixed, {zIndex:-1}]}>
                        <ScrollView style={[styles.scrollview, styles.fixed]} ref={_ScrollView}>
                            <PokemonCard page ={page}/>
                            <View style={styles.button}>
                                <Button id="first" color='black' title="First" onPress={(handleFirstPage)}/>
                                <Button color='black' title="←" onPress={(handlePrevPage)}/>
                                <Button color='black' title="→" onPress={(handleNextPage)}/>
                                <Button color='black' title="Last" onPress={(handleLastPage)}/>
                            </View>
                        </ScrollView>
                    </ImageBackground>
                </View>
            </SafeAreaView>
        </SafeAreaProvider> 
    );
};
  
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
        flex:1
    },
    scrollview:{
        flex: 1,
        backgroundColor: 'transparent',
        paddingTop:2,
    },
    button:{
         flexDirection: "row",
         justifyContent: 'space-around',
         position:'absolute',
         bottom: 0,
         width: Dimensions.get('window').width
    },
});