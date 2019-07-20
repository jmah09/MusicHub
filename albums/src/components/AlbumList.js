import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
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
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(resp => this.setState({ albums: resp.data }));
    }

    renderAlbums() {
        //producing an albums array and rendering it into JSX component
        // when React re-renders component it needs to know which unique component needs to be re rendered and which one that doesn't
        // which is why we need a unique key and the same value across all re renders of the list
        // but now we don't want to show text, but instead Album Detail
        // so we replace the text tag with Album Detail, and make it self closing
        // we need to pass an album prop to AlbumDetail
        return this.state.albums.map(album => <AlbumDetail key={album.title} album={album}/>)
    }

    render () {
        //(3) tell render method to make use of the state
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;