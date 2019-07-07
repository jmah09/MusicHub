//import libraries to create components 
import React from 'react';
import {Text, View} from 'react-native';

//create a component
//Header component is a child component of the root 
const Header = (props) => {
    // define the style 
    const {textStyle, viewStyle} = styles;
    return(
        <View style = {viewStyle}>
            <Text style = {textStyle}>{props.headerText}</Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 20
    }
}

//make component available to other areas of the app 
export default Header; 
