import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import logo from '../../assets/logo.png';
import firstImage from '../../assets/FirstBack.jpg';
import {AppID} from '@env';
import axios from 'axios';
import GetLocation from 'react-native-get-location';

const Home = () => {
  const [InputValue, SetInputValue] = useState('');
  const [data, setData] = useState('');
  // const [Location, setLocation] = useState('')

  useEffect(() => {
    const fun = (async () => {
      await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 60000,
      })
        .then(location => {
          console.log(location);
          // setLocation(location)
          weatherResult(location);
        })
        .catch(error => {
          const {code, message} = error;
          console.warn(code, message);
        });
    })();

    // weatherResult();
  }, []);

  // console.log(AppID, "ayya");

  const customWeather = async () => {
    const Api = `https://api.openweathermap.org/data/2.5/weather?q=${InputValue.toLowerCase()}&appid=${AppID}&units=metric`;
    const res = await axios.get(Api);

    // console.log(res.data, 'Respones cust');
    setData(res.data);
    SetInputValue('');
  };

  const weatherResult = async Location => {
    const locaApi = `https://api.openweathermap.org/data/2.5/weather?lat=${Location.latitude}&lon=${Location.longitude}&appid=${AppID}&units=metric`;

    const res = await axios.get(locaApi);

    console.log(res.data, 'Respones');
    setData(res.data);
  };

  return (
    <ImageBackground blurRadius={15} source={firstImage} style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              width: '80%',
              height: '80%',
              backgroundColor: 'rgba(195, 220, 230, 0.7)',
              borderRadius: 40,
              flex:1,
              marginTop:30
            }}>
            <View style={{flex: 3}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <TextInput
                  onChangeText={e => SetInputValue(e)}
                  value={InputValue}
                  placeholder={(data && data.name) || 'Ayan'}
                  style={{
                    textAlign: 'center',
                    fontSize: 25,
                    borderWidth: 2,
                    width: '96%',
                    borderRadius: 30,
                    marginTop: 10,
                  }}
                />
                <View
                  style={{
                    width: '23%',
                    height: '100%',
                    position: 'absolute',
                    right: '4%',
                    marginBottom: 'auto',
                    justifyContent: 'flex-end',
                    paddingBottom: 5.2,
                  }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'black',
                      height: '75%',
                      borderRadius: 30,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={customWeather}>
                    <Text style={{color: 'white', fontWeight: '400'}}>
                      Check
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  alignItems: 'center',
                }}>
                <Image source={logo} style={{height: 250, width: 290}} />
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 8,
              }}>
              <Text style={{fontSize: 34, fontWeight: 'bold'}}>
                {(data && data.weather[0].main) || 'Cloudy'}
              </Text>
              <Text style={{fontSize: 14.9, fontWeight: '400'}}>
                {(data && data.weather[0].description) || 'Cloudy'}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <View style={{alignItems: 'center', flex: 1}}>
                  <Text style={{fontWeight: '600'}}>{'Temp'}</Text>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    {(data && data.main.temp) || 'Ayan'}
                  </Text>
                </View>
                <View style={{alignItems: 'center', flex: 1}}>
                  <Text style={{fontWeight: '600'}}>Pressure</Text>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    {(data && data.main.pressure) || 'Ayan'}
                  </Text>
                </View>
                <View style={{alignItems: 'center', flex: 1}}>
                  <Text style={{fontWeight: '600'}}>Humidity</Text>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    {(data && data.main.humidity) || 'Ayan'}
                  </Text>
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
                }}
                onPress={weatherResult}>
                <Text style={{color: 'white', textAlign: 'center'}}>
                  See Details
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <View style={{height: 200}}>
            <ScrollView
              horizontal
              style={{flex: 1}}
              contentContainerStyle={{
                gap: 22,
                //   backgroundColor: 'blue',
                flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingStart: 40,
              }}>
              <View
                style={{
                  width: 100,
                  height: 150,
                  backgroundColor: 'rgba(195, 220, 230, 0.7)',
                  borderRadius: 20,
                }}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={logo} style={{width: 90, height: 90}} />
                </View>
                <View style={{flex: 1, alignItems: 'center', gap: 3}}>
                  <Text
                    style={{fontSize: 23, fontWeight: '800', color: 'white'}}>
                    +20C
                  </Text>
                  <Text
                    style={{
                      backgroundColor: 'white',
                      width: 70,
                      padding: 3,
                      textAlign: 'center',
                      borderRadius: 15,
                      fontWeight: 'bold',
                      color: 'black',
                    }}>
                    Cloudy
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: 100,
                  height: 150,
                  backgroundColor: 'rgba(195, 220, 230, 0.7)',
                  borderRadius: 20,
                }}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={logo} style={{width: 90, height: 90}} />
                </View>
                <View style={{flex: 1, alignItems: 'center', gap: 3}}>
                  <Text
                    style={{fontSize: 23, fontWeight: '800', color: 'white'}}>
                    +20C
                  </Text>
                  <Text
                    style={{
                      backgroundColor: 'white',
                      width: 70,
                      padding: 3,
                      textAlign: 'center',
                      borderRadius: 15,
                      fontWeight: 'bold',
                      color: 'black',
                    }}>
                    Cloud
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: 100,
                  height: 150,
                  backgroundColor: 'rgba(195, 220, 230, 0.7)',
                  borderRadius: 20,
                }}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={logo} style={{width: 90, height: 90}} />
                </View>
                <View style={{flex: 1, alignItems: 'center', gap: 3}}>
                  <Text
                    style={{fontSize: 23, fontWeight: '800', color: 'white'}}>
                    +23C
                  </Text>
                  <Text
                    style={{
                      backgroundColor: 'white',
                      width: 70,
                      padding: 3,
                      textAlign: 'center',
                      borderRadius: 15,
                      fontWeight: 'bold',
                      color: 'black',
                    }}>
                    Ayan
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: 100,
                  height: 150,
                  backgroundColor: 'rgba(195, 220, 230, 0.7)',
                  borderRadius: 20,
                }}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={logo} style={{width: 90, height: 90}} />
                </View>
                <View style={{flex: 1, alignItems: 'center', gap: 3}}>
                  <Text
                    style={{fontSize: 23, fontWeight: '800', color: 'white'}}>
                    +20C
                  </Text>
                  <Text
                    style={{
                      backgroundColor: 'white',
                      width: 70,
                      padding: 3,
                      textAlign: 'center',
                      borderRadius: 15,
                      fontWeight: 'bold',
                      color: 'black',
                    }}>
                    Ayan
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Home;
