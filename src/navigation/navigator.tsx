import React from "react";
import Galary from '../screens/galary';
import Favourites from '../screens/favourites';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StyleSheet } from "react-native";


import SvgGalaryIcon from "../assets/svg/SvgGalaryIcon";
import SvgStarIcon from "../assets/svg/SvgStarIcon";
import GalaryPic from "../screens/galary-pic";
import Header from "../components/header";



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Galary" 
                component={Galary}
                options={()=>({
                    header: (props)=> {
                        return (<Header headerTitle="Все изображения" {...props}/>)
                    },
                    title: "Все изображения",
                    tabBarIcon: ({focused})=> {
                        let iconColor 

                        focused ? iconColor = "#A10D99" : iconColor = "#94949D"

                        return(
                            <SvgGalaryIcon fill={iconColor}/>
                        )
                    },
                    tabBarActiveTintColor: '#A10D99',
                    tabBarInactiveTintColor: '#94949D',
                })}
            />
            <Tab.Screen 
                name="Favourites" 
                component={Favourites} 
                options={()=>({
                    header: (props)=> {
                        return (<Header headerTitle="Избранное" {...props}/>)
                    },
                    title: "Избранное",
                    tabBarIcon: ({focused})=> {
                        let iconColor 

                        focused ? iconColor = "#A10D99" : iconColor = "#94949D"
                        
                        return(
                            <SvgStarIcon fill={iconColor}/>
                        )
                    },
                    // headerShown: false,
                    tabBarActiveTintColor: '#A10D99',
                    tabBarInactiveTintColor: '#94949D',
                })}
            />
            
        </Tab.Navigator>
    )
}

export const Navigator = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home" 
                    component={TabNavigator}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen 
                    name="GalaryPic" 
                    component={GalaryPic}
                    options={
                        ({ route }) => ({ 
                        header: (props)=> {
                            return (<Header arrow={true} headerTitle={route.params.title} {...props}/>)
                        },
                    })}
                />
            </Stack.Navigator> 
        </NavigationContainer>
    )
}

const galaryPicTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#000'
    },
};
  