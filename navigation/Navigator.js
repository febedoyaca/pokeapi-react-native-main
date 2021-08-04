import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Pokemon from "../pages/PokemonPage";
import SearchPokemon from"../pages/SearchPokemonPage";
import HomePage from '../pages/HomePage' 

const Drawer = createDrawerNavigator();

export default HomeNavigator = () => (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" screenOptions={{drawerStyle:{backgroundColor:'rgba(193,193,193,.9)', width:200, height:250}}}>
            <Drawer.Screen name="Home" component={HomePage} /> 
            <Drawer.Screen name="All Pokemon" component={Pokemon} /> 
            <Drawer.Screen name="Search Pokemon" component={SearchPokemon} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
  