import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import logo from '../../assets/logo.png';
import firstImage from '../../assets/FirstBack.jpg';

const Home = () => {
  return (
    <ImageBackground blurRadius={15} source={firstImage} style={{flex: 1}}>
      <View style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            width: '80%',
            height: '80%',
            backgroundColor: 'rgba(195, 220, 230, 0.7)',
            borderRadius: 40,
          }}>
          <View style={{flex: 3}}>
            <Text style={{textAlign: 'center', fontSize: 25, marginTop: 5}}>
              Karachi
            </Text>

            <Image source={logo} style={{height: 300, width: 300}} />
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 35, fontWeight: 'bold'}}>Cloudy</Text>
          </View>
          <View style={{flex: 1}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontWeight: '600'}}>Ayan</Text>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Ayan</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontWeight: '600'}}>Ayan</Text>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Ayan</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontWeight: '600'}}>Ayan</Text>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Ayan</Text>
              </View>
            </View>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
              style={{
                backgroundColor: 'black',
                width: 120,
                padding: 15,
                borderRadius: 10,
              }}>
              <Text style={{color: 'white', textAlign: 'center'}}>
                See Details
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{flex: 2, justifyContent: 'center'}}>
        <View style={{ height: 200}}>
          <ScrollView
          horizontal
            style={{flex: 1}}
            contentContainerStyle={{
              gap: 22,
            //   backgroundColor: 'blue',
              flexGrow: 1,
              alignItems: 'center',
              justifyContent:"center",
              paddingStart:40
            }}>
            <View style={{width: 100, height: 150, backgroundColor: 'rgba(195, 220, 230, 0.7)', borderRadius:20}}>
              <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                <Image source={logo} style={{width:90, height:90}}/>
              </View>
              <View style={{flex:1, alignItems:"center",gap:3}}>
                <Text style={{fontSize:23, fontWeight:"800", color:"white"}}>+20C</Text>
                <Text style={{backgroundColor:"white", width:70, padding:3, textAlign:"center", borderRadius:15, fontWeight:"bold", color:"black"}}>Ayan</Text>
              </View>
            </View>
            <View style={{width: 100, height: 150, backgroundColor: 'rgba(195, 220, 230, 0.7)', borderRadius:20}}>
              <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                <Image source={logo} style={{width:90, height:90}}/>
              </View>
              <View style={{flex:1, alignItems:"center",gap:3}}>
                <Text style={{fontSize:23, fontWeight:"800", color:"white"}}>+20C</Text>
                <Text style={{backgroundColor:"white", width:70, padding:3, textAlign:"center", borderRadius:15, fontWeight:"bold", color:"black"}}>Ayan</Text>
              </View>
            </View>
            <View style={{width: 100, height: 150, backgroundColor: 'rgba(195, 220, 230, 0.7)', borderRadius:20}}>
              <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                <Image source={logo} style={{width:90, height:90}}/>
              </View>
              <View style={{flex:1, alignItems:"center",gap:3}}>
                <Text style={{fontSize:23, fontWeight:"800", color:"white"}}>+20C</Text>
                <Text style={{backgroundColor:"white", width:70, padding:3, textAlign:"center", borderRadius:15, fontWeight:"bold", color:"black"}}>Ayan</Text>
              </View>
            </View>
            <View style={{width: 100, height: 150, backgroundColor: 'rgba(195, 220, 230, 0.7)', borderRadius:20}}>
              <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                <Image source={logo} style={{width:90, height:90}}/>
              </View>
              <View style={{flex:1, alignItems:"center",gap:3}}>
                <Text style={{fontSize:23, fontWeight:"800", color:"white"}}>+20C</Text>
                <Text style={{backgroundColor:"white", width:70, padding:3, textAlign:"center", borderRadius:15, fontWeight:"bold", color:"black"}}>Ayan</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;
