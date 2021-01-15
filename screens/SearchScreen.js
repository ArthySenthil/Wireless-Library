import React from 'react';
import {Text,View} from 'react-native';
import { render } from 'react-dom';

export default class SearchScreen extends React.Component{
    render(){
        return(
            <View style ={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text> Search </Text>

            </View>
        );


    }
}