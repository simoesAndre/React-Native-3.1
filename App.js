import React, { Component } from 'react'
import { View } from 'react-native'
import Header from './src/components/Header'
import Main from './src/components/Main'
import Footer from './src/components/Footer'

export default class App extends Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 4, backgroundColor: 'white' }}>
          <Header />
        </View>
        <View style={{ flex: 4, backgroundColor: 'white' }}>
          <Main />
        </View>
        <View style={{ flex: 2, backgroundColor: 'white' }}>
          <Footer />
        </View>
      </View>
    )
  }
}
