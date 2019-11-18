import React, { Component } from 'react'
import { Text, View, ScrollView, Image, TextInput } from 'react-native'

export default class App extends Component {


  // VIEW == DIV
  // TEXT == H, P
  render() {
    return (
      // <View style={{ flex: 1, flexDirection: 'row' }} >
      //   <View style={{ flex: 3, backgroundColor: 'red', height: 100 }}>
      //     <Text style={{ color: 'black' }}>Ini View 1</Text>
      //   </View>
      //   <View style={{ flex: 1, backgroundColor: 'yellow', height: 100 }}>
      //     <Text style={{ color: 'black' }}>Ini View 2</Text>
      //   </View>
      //   <View style={{ flex: 1, backgroundColor: 'green', height: 100 }}>
      //     <Text style={{ color: 'black' }}>Ini View 3</Text>
      //   </View>
      // </View>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ height: 80, backgroundColor: 'grey', flexDirection: "row" }}>
          <View style={{ flex: 3, backgroundColor: 'white' }}>
            <TextInput placeholder="Looking for something?"
              style={{ height: 50 }}
              source={require('./Images/search.png')}
            > </TextInput>
          </View>
          <View style={{ flex: 1, backgroundColor: 'yellow' }}></View>
        </View>
        <ScrollView>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
          <Text>Ini Text</Text>
        </ScrollView>
        <View style={{ height: 80, backgroundColor: 'white', flexDirection: "row", paddingHorizontal: 30, borderTopColor: '#E8E8E8', borderTopWidth: 5, paddingTop: 10 }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Image
              style={{ width: 30, height: 30, resizeMode: "contain" }}
              source={require('./Images/tab-beranda.png')} />
            <Text>Home</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Image
              style={{ width: 30, height: 30, resizeMode: "contain" }}
              source={require('./Images/tab-pesanan.png')} />
            <Text>Orders</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Image
              style={{ width: 30, height: 30, resizeMode: "contain" }}
              source={require('./Images/tab-pesan.png')} />
            <Text>Messages</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Image
              style={{ width: 30, height: 30, resizeMode: "contain" }}
              source={require('./Images/tab-inbox.png')} />
            <Text>Inbox</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Image
              style={{ width: 30, height: 30, resizeMode: "contain" }}
              source={require('./Images/tab-akun.png')} />
            <Text>Account</Text>
          </View>
        </View>
      </View>
    )
  }
}
