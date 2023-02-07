import React,{Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class WeatherScreen extends Component{
  constructor(){
  super();
  this.state={
    weather:"",
  }
}
getWeather=async()=>{
  var url="https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139";
  return fetch(url)
    .then(response=>response.json())
    .then(responseJson =>{
      this.setState({
        weather: responseJson,
      });
    })
  .catch(error=>{
    console.error(error);
  });
};
componentDidMount=()=>{
  this.getWeather();
}
render(){
  return (
    <View style={styles.container}>
      <Text>PRONOSTICO DEL CLIMA</Text>
    <Image
    style={styles.cloudImage}
    source={require("./cloud.png")}/>
        <View>
      <Text>
        {this.state.weather.main.temp}&deg;
      </Text>
      <Text>
        humedad:{this.state.weather.main.humidity}
      </Text>
      <Text>
        {this.state.weather.weather[0].description}
      </Text>
    </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
