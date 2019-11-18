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
      <View style={{ flex: 1, flexDirection: 'column', paddingVertical: 10, paddingHorizontal: 15  }}>
        <View style={{ height: 80, flexDirection: "row"}}>
          <View style={{ flex: 3 }}>
            <Image
              style={{ width: 30, height: 30, position: 'absolute', left: 10, top: 5 }}
              source={require('./Images/search.png')}
            />
            <TextInput placeholder="Looking for something?"
              style={{ height: 40, borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 50, paddingLeft: 50 }}
            />
          </View>

          <View style={{ flex: 1, flexDirection: "row", alignItems: "center", height: 40, borderWidth:0.5, borderColor: '#E8E8E8', borderRadius: 50, paddingLeft: 10 }}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require('./Images/promo.png')}
            />
            <Text>Promo</Text>
          </View>
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
        <View style={{ height: 80, backgroundColor: 'white', flexDirection: "row", paddingHorizontal: 30, borderTopColor: '#E8E8E8', borderTopWidth: 5, paddingVertical: 10 }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Image
              style={{ width: 30, height: 30, resizeMode: "contain" }}
              source={require('./Images/tab-beranda.png')} />
            <Text style={{ fontSize: 12 }}>Home</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Image
              style={{ width: 30, height: 30, resizeMode: "contain" }}
              source={require('./Images/tab-pesanan.png')} />
            <Text style={{ fontSize: 12 }}>Orders</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Image
              style={{ width: 30, height: 30, resizeMode: "contain" }}
              source={require('./Images/tab-pesan.png')} />
            <Text style={{ fontSize: 12 }}>Messages</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Image
              style={{ width: 30, height: 30, resizeMode: "contain" }}
              source={require('./Images/tab-inbox.png')} />
            <Text style={{ fontSize: 12 }}>Inbox</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Image
              style={{ width: 30, height: 30, resizeMode: "contain" }}
              source={require('./Images/tab-akun.png')} />
            <Text style={{ fontSize: 12 }}>Account</Text>
          </View>
        </View>
      </View>
    )
  }
}
