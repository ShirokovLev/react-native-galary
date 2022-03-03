import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, TouchableOpacity, View, Image, Dimensions, StyleSheet } from "react-native";

import { addPhotoToFavourites, removePhotoFromFavourites, removePhoto } from "../../actions";
import SvgHeartIcon from "../../assets/svg/SvgHeartIcon";
import SvgTrashIcon from "../../assets/svg/SvgTrashIcon";

export const GalaryPic = ({route, navigation} : {route:any, navigation:any}) =>{

    console.log()

    const win = Dimensions.get('window');

    const { url, title, id, thumbnailUrl } = route.params;

    const dispatch = useDispatch();

    const { favourites } = useSelector((state: any) => ({
        favourites: state.favourites
    }));

    const [isFavourite, setFavourite] = useState<boolean>(favourites.find((item: {id:number}) => item.id === id)? true : false)

    const pushToFavourites = ()=> {
        dispatch(addPhotoToFavourites({url: url, title: title, id: id, thumbnailUrl: thumbnailUrl}))
        setFavourite(true)
    }

    const removeFromFavourites = ()=> {
        dispatch(removePhotoFromFavourites(id))
        setFavourite(false)
    }

    const removeFromState = ()=> {
        dispatch(removePhoto(id));
        navigation.navigate('Galary', {});
    }


    return(
        <View style={{height: win.height, ...styles.imageWrapper}}>
            <Image
                style={{
                    width: win.width, 
                    height: win.width, 
                    display: 'flex'
                }}
                source={{
                    uri: url
                }}
            />
            <View style={styles.buttonWrapper}>
                <TouchableOpacity 
                    style={{marginBottom:20, ...styles.actionButton}} 
                    onPress={isFavourite ? removeFromFavourites : pushToFavourites}
                >
                    <SvgHeartIcon fill={isFavourite ? "#aa0000" : "#000000"} style={{marginRight: 15}}/>
                    <Text>
                        {isFavourite ? "Удалить из избранного" : "Добавить в избранное"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton} onPress={removeFromState}>
                    <SvgTrashIcon fill="#000000" style={{marginLeft: 0,marginRight: 17}}/>
                    <Text>
                        Удалить изображение
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageWrapper: {
        display: "flex",
        justifyContent: "center",
        position: "relative",
        backgroundColor: "#000",
        alignItems: "center",
    },
    buttonWrapper: {
        display: "flex",
        flexDirection: "column",
        borderRadius: 20, 
        backgroundColor: "#FFFFFF",
        position: "absolute",
        bottom: 90,
        width: 250,
        padding: 20,
        zIndex: 2,
        alignItems: "center",
    },
    actionButton: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
    }
})