import React, { Component } from 'react';
import { Header, Icon } from 'react-native-elements';

export default class CustomHeader extends Component {
    render() {
      return (
        <Header
          leftComponent={<Icon name='rowing' color='#fff' />}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
      );
    }
  }
  