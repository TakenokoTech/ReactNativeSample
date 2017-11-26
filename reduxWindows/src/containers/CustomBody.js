import React, { Component } from 'react';
import { StyleSheet, Text, FlatList, View, Image } from 'react-native';
import Ripple from 'react-native-material-ripple';
import apple from 'reduxWindows/assets/image/apple.jpg';

export default class CustomBody extends Component {

  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);

    // listの初期値は一件
    this.state = { list: [
      { key: "aaaaaaaa" }, 
      // { key: "bbbbbbbb" }, 
      // { key: "cccccccc" }
    ]};
  }

  renderItem({ item }) {
    return (
      <View style={styles.container}>
        <Ripple>
          <Image source={apple} style={styles.thumbnail} />
           <View style={styles.rightContainer}>
          <Text>{ item.key }</Text>
          </View>
        </Ripple>
      </View>
    );
  }

  render() {
    return (
      <View>
        <Ripple>
          <Text>Rを2回押すとリロード</Text>
        </Ripple>
        <FlatList data={this.state.list} renderItem={this.renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 72,
    height: 72 
  },
  rightContainer: {

  }
});
  