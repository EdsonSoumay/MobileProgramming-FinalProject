import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { SongIndex, SplashScreen, DisplaySong, Menu, FavoritSong, DisplayFavoriteSong, About} from '../pages';

const Stack = createStackNavigator();
const Router = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen}options={{headerShown: false}}/>
            <Stack.Screen name="SongIndex" component={SongIndex}options={{headerShown: false}}/>
            <Stack.Screen name="DisplaySong" component={DisplaySong}options={{headerShown: false}}/>
            <Stack.Screen name="Menu" component={Menu}options={{headerShown: false}}/>
            <Stack.Screen name="FavoritSong" component={FavoritSong}options={{headerShown: false}}/>
            <Stack.Screen name="DisplayFavoriteSong" component={DisplayFavoriteSong}options={{headerShown: false}}/>
            <Stack.Screen name="About" component={About}options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default Router;