//Import a library to help create component
import React from 'react';
import {Text, View, AppRegistry} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//create a component - an object that displays something on the screen - a component is a javacsript function that returns JSX
// JSX (looks like html) babel turns JSX into Javascript 
// JSX is just a mask over normal function calls 
const App = () => (
    // we can use props to pass data from parent to child component
    // pass in property name called headerText that has a value of "Albums"
    // so that when header is rendered, we will take the props obj from parent, it will have property called headerText and value will be shown in JSX in header file
    <Header headerText = {'Albums'}/>
);

//render to device
// have to register at least one component to application 
    //-> render application called 'albums', and pass first component to our application as 2nd argument to register component
//App component is the root component and its the only one that uses AppRegistry 
AppRegistry.registerComponent('albums', () => App);
