/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import {fontsList} from './assets/fonts';

export default class App extends Component {
  render() {
    console.log("4545454545vgvvg")
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'green'}}>
          <View style={{flex: 1, borderWidth: 1}}></View>
          <View style={{flex: 1, borderWidth: 1}}></View>
          <View style={{flex: 1, borderWidth: 1}}></View>
          <View style={{flex: 1, borderWidth: 1}}></View>
        </View>
        <View style={{height:100}}>
        <FlatList
        bounces={true}
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={{fontFamily:fontsList.kanitbold}}>{item.key}</Text>}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
