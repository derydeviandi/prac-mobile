import React, { Component } from 'react'
import { Text, View, ScrollView, Image, TextInput } from 'react-native'
import AppStyle from './AppStyle'

const konten_buat_kamu = ['Apa aja', 'Promo', 'Jalan-jalan', 'Makanan', 'Minuman', 'Pembayaran']

export default class App extends Component {

  componentDidMount() {
    console.log('test')
  }

  // VIEW == DIV
  // TEXT == H, P
  render() {
    return (
      // HEADER
      <View style={{ flex: 1, flexDirection: 'column', paddingVertical: 10, paddingHorizontal: 15 }}>
        <View style={{ height: 80, flexDirection: "row" }}>
          <View style={{ flex: 3 }}>
            <Image
              style={{ width: 30, height: 30, position: 'absolute', left: 10, top: 5 }}
              source={require('./Images/search.png')}
            />
            <TextInput placeholder="Looking for something?"
              style={{ height: 40, borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 50, paddingLeft: 50 }}
            />
          </View>

          <View style={{ flex: 1, flexDirection: "row", alignItems: "center", height: 40, borderWidth: 0.5, borderColor: '#E8E8E8', borderRadius: 50, paddingLeft: 10, marginLeft: 10 }}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require('./Images/promo.png')}
            />
            <Text>Promo</Text>
          </View>
        </View>

        {/* BODY */}
        <ScrollView style={{ paddingHorizontal: 15 }}>
          {/* Go-pay session */}
          <View style={{ height: 150 }}>
            <View style={{
              height: 65, backgroundColor: '#2C60B8',
              borderTopLeftRadius: 10, borderTopRightRadius: 10, flexDirection: "row",
              justifyContent: "space-between", alignItems: 'center', paddingHorizontal: 15
            }}>
              <Image
                style={{ width: 100, height: 20 }}
                source={require('./Images/gopay.png')}
              />
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                Rp. 0</Text>
            </View>

            <View style={{ backgroundColor: '#2F64BC', flex: 1, flexDirection: "row", alignItems: 'center' }}>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image
                  style={{ width: 30, height: 30, resizeMode: "contain" }}
                  source={require('./Images/gopay-fitur-1.png')} />
                <Text style={{ fontSize: 12, color: 'white' }}>Bayar</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image
                  style={{ width: 30, height: 30, resizeMode: "contain" }}
                  source={require('./Images/gopay-fitur-2.png')} />
                <Text style={{ fontSize: 12, color: 'white' }}>Promo</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image
                  style={{ width: 30, height: 30, resizeMode: "contain" }}
                  source={require('./Images/gopay-fitur-3.png')} />
                <Text style={{ fontSize: 12, color: 'white' }}>Isi Saldo</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image
                  style={{ width: 30, height: 30, resizeMode: "contain" }}
                  source={require('./Images/gopay-fitur-4.png')} />
                <Text style={{ fontSize: 12, color: 'white' }}>Lainnya</Text>
              </View>
            </View>


          </View>

          {/* MENU GOJEK */}
          <View >
            <View style={{ height: 80, backgroundColor: 'white', flexDirection: "row", paddingHorizontal: 30, borderTopColor: '#E8E8E8', borderTopWidth: 5, paddingVertical: 10 }}>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image
                  style={{ width: 50, height: 50, resizeMode: "contain" }}
                  source={require('./Images/go-ride.png')} />
                <Text style={{ fontSize: 12 }}>GoRide</Text>
              </View>

              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image
                  style={{ width: 50, height: 50, resizeMode: "contain" }}
                  source={require('./Images/go-car.png')} />
                <Text style={{ fontSize: 12 }}>GoCar</Text>
              </View>

              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image
                  style={{ width: 50, height: 50, resizeMode: "contain" }}
                  source={require('./Images/go-food.png')} />
                <Text style={{ fontSize: 12 }}>GoFood</Text>
              </View>

              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image
                  style={{ width: 50, height: 50, resizeMode: "contain" }}
                  source={require('./Images/go-bluebird.png')} />
                <Text style={{ fontSize: 12 }}>GoBlueBird</Text>
              </View>
            </View>

            <View style={{ height: 80, backgroundColor: 'white', flexDirection: "row", paddingHorizontal: 30, borderTopColor: '#E8E8E8', borderTopWidth: 5, paddingVertical: 10 }}>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image
                  style={{ width: 50, height: 50, resizeMode: "contain" }}
                  source={require('./Images/go-send.png')} />
                <Text style={{ fontSize: 12 }}>GoSend</Text>
              </View>

              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image
                  style={{ width: 50, height: 50, resizeMode: "contain" }}
                  source={require('./Images/go-pulsa.png')} />
                <Text style={{ fontSize: 12 }}>GoPulsa</Text>
              </View>

              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image
                  style={{ width: 50, height: 50, resizeMode: "contain" }}
                  source={require('./Images/go-points.png')} />
                <Text style={{ fontSize: 12 }}>GoPoints</Text>
              </View>

              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image
                  style={{ width: 50, height: 50, resizeMode: "contain" }}
                  source={require('./Images/lainnya.png')} />
                <Text style={{ fontSize: 12 }}>Lainnya</Text>
              </View>

            </View>
          </View>




          {/* Konten buat kamu */}
          <Text style={AppStyle.text_style}>
            Konten buat kamu
          </Text>
          <ScrollView horizontal={true}>
            {
              konten_buat_kamu.map((val) => {
                return (
                  <View style={{ borderWidth: 0.7, borderColor: 'grey', padding: 10, borderRadius: 30, margin: 5 }} >
                    <Text>{val}</Text>
                  </View>
                )
              })
            }
          </ScrollView>
        </ScrollView>

        {/* FOOTER */}
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
