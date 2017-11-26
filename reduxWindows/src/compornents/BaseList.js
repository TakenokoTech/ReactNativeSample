import React, { Component } from 'react';
import { StyleSheet, Text, ListView, View, Image } from 'react-native';
import Ripple from 'react-native-material-ripple';
import apple from 'reduxWindows/assets/image/apple.jpg';

export default class BaseList extends Component {

    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = { items: ds.cloneWithRows(['row 1', 'row 2']), };
    }

    renderItem(item, sectionID, rowID) {
        return (
            <Ripple>
                <View style={styles.container}>
                    <Image source={apple} style={styles.thumbnail}/>
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>a</Text>
                        <Text style={styles.name}>b</Text>
                    </View>
                </View>
            </Ripple>
        );
    }

    render(){
        return(
            <ListView
                dataSource={this.state.items}
                renderRow={this.renderItem}
                style={styles.listView}/>
        );
    }
}

const styles = StyleSheet.create({
    navigator: {
      flex: 1
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
    },
    rightContainer: {
      flex: 1,
    },
    title: {
      fontSize: 15,
      margin: 8,
      textAlign: 'left',
    },
    name: {
      fontSize: 12,
      margin: 8,
      textAlign: 'left',
    },
    thumbnail: {
      width: 80,
      height: 80,
      margin: 2,
    },
    listView: {
      backgroundColor: '#FFFFFF',
    },
  });