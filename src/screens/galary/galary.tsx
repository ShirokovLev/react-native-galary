import { useNavigation } from "@react-navigation/core";
import React from 'react'
import { useEffect } from "react";
import { Dimensions } from "react-native";
import { Text, TouchableOpacity, View, Image, ScrollView, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { updatePhotos } from "../../actions";

export const Galary = () =>{

    const win = Dimensions.get('window')

    const navigation = useNavigation<any>()

    const handleNavigationToScren = (url:string, title:string, id:number, thumbnailUrl:string) => {
        navigation.navigate('GalaryPic', {url, title, id, thumbnailUrl})
    }

    const dispatch = useDispatch();

    const { photos, isLoading } : any = useSelector<any>((state) => ({
        photos: state.photos,
        isLoading: state.isLoading,
    }));
    
    useEffect(
        () => {
            dispatch(updatePhotos())
        },
        []
    );

    return(
        <View>
            {
                isLoading ? <Text>Loading...</Text> :
                <ScrollView>
                    <View style={styles.photogrid}>
                    {
                        photos.map((item:{url: string, title: string, id:number, thumbnailUrl:string})=>{
                            return(
                                <TouchableOpacity 
                                    style={{ margin: 4.5 }} 
                                    key={item.id} 
                                    onPress={ ()=>handleNavigationToScren(item.url, item.title, item.id, item.thumbnailUrl) }>
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