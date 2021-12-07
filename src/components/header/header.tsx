import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";
import SvgArrowIcon from "../../assets/svg/SvgArrowIcon";



export default function Header(props){
    return(
        <View style={styles.header}>
            <LinearGradient
                colors={['#790598', '#BC1399']}
                style={styles.gradientBlock}
            >
                <SafeAreaView style={styles.headerTextBlock}>
                    { props.arrow ? 
                        <TouchableOpacity style={{marginLeft: 15}} onPress={() => props.navigation.goBack(null)} >
                            <SvgArrowIcon fill="#ffffff"/> 
                        </TouchableOpacity>
                        : null
                    }
                    <Text style={styles.headerText}>
                        {props.headerTitle}
                    </Text>
                </SafeAreaView>
            </LinearGradient>
            
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 100,
        overflow: "hidden"
    },
    gradientBlock: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: '600',
        fontSize: 22,
        color: '#FFFFFF',
        paddingLeft: 20,
        paddingRight: 20,
    },
    headerTextBlock:{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }
})