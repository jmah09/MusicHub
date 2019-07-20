import React from 'react';
import {View} from 'react-native';

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