import React, {Component} from "react";
import Image from 'react-native';
import {Header} from 'react-native-elements';

export default class HomeScreen extends Component {
    constructor(){

    }

    render(){
        return(
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'My App', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            
            <View>
                <Image source={require('logo.png')}/>
            </View>

        )
    }
}