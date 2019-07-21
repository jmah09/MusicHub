import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

//presentational component, we do not need lifecycle methods or access to state
const AlbumDetail = (props) => {
    return (
        //we need to instruct card to render any children it gets passed directly *go back to card component and pass in a prop*
        <Card>
            <CardSection>
                <Text>{props.album.title}</Text>
            </CardSection>
        </Card>
    )
}

export default AlbumDetail;  