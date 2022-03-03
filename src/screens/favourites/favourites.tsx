import React from "react";
import { View, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Dimensions } from "react-native";
import { useSelector } from "react-redux";

export const Favourites = () =>{
    const win = Dimensions.get('window');

    const navigation = useNavigation<any>()

    const handleNavigationToScren = (url:string, title:string, id:number) => {
        navigation.navigate('GalaryPic', {url, title, id});
    }

    const { favourites } = useSelector((state: any) => ({
        favourites: state.favourites
    }));

    return(
        <View>
            {
                <ScrollView>
                    <View style={styles.photogrid}>
                    {
                        favourites.map((item:{url:string, title:string, id:number, thumbnailUrl: string})=>{
                            return(
                                <TouchableOpacity 
                                    style={{ margin: 4.5 }} 
                                    key={item.id} 
                                    onPress={ ()=>handleNavigationToScren(item.url, item.title, item.id) }>
                                        <Image 
                                            style={{
                                                width: (win.width - 58)/4, 
                                                height: (win.width - 58)/4,
                                                ...styles.image
                                            }} 
                                            source={{ uri: item.thumbnailUrl }} 
                                        />
                                </TouchableOpacity>   
                            )  
                        })
                    }
                    </View>
                </ScrollView>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        display: 'flex',
        borderRadius: 10,
    },
    photogrid: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 11,
        paddingRight: 11
    }
})

export default Favourites