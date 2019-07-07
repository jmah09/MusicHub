import React from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
// class based componenet used when fetching data or component that requires helper methods
//when designing a class based method we must define exactly one method that returns some JSX - 
    //so we add a render method that takes whatever JSX is returned inside and show it on the screen
class AlbumList extends Component {
    //(1) set initial state for component with a class level property (STATE ONLY available to CLASS based components)
    state = { albums: [] };

    //lifecycle methods can be used with class components - have more sentience of whats going on in the app in the sense of it knows when its goign to be rendered or removed 
    //lifecycle method - componentDidMount() gets auto called as soon as the component gets rendered to the screen
    componentDidMount() {
        //(2) when we've fetched the data, tell our component to update the state with setState
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(resp => this.setState({ albums: response.data }));
    }

    render () {
        //(3) tell render method to make use of the state
        return (
            <View>
                <Text>some text</Text>
            </View>
        );
    }
}

export default AlbumList;