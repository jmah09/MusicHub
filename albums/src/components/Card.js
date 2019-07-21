import React from 'react';
import {View} from 'react-native';

//anytime we pass in a component to a component that we wrote, the component will show up as props object as props.children
//Card will render any compontents we add to Card 
const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};
// create a style oject with a property of containerStyler
const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2, //rounded corners
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 }, //specifies what side the shadow appears on
        shadowOpacity: 0.1, //making a component see through
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10


    }
}

export default Card; 