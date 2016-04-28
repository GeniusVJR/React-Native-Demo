/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

var DATA={
  "id": "1",
  "name": "Android Design Support Library 兼容库使用详解",
  "img": "http://a1.jikexueyuan.com/home/201510/13/1c73/561c68d71ce03.jpg",
  "teacher": "大姑爷",
  "add_time": "2015-07-01",
  "url": "http://www.jikexueyuan.com/course/2117.html"
}

class HelloGeek extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Image source={{uri:DATA.img}} style={styles.images}/>

        <Text style={styles.title}>
          {DATA.name}
        </Text>

        <Text style={styles.teacher}>
          {DATA.teacher}
        </Text>

        <Text style={styles.time}>
          {DATA.add_time}
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 15,
    textAlign: 'left',
    color: '#333333',
    marginLeft: 10,
  },
  teacher: {
    fontSize: 13,
    textAlign: 'left',
    color: '#525252',
    marginLeft: 10,
  },
  time: {
    fontSize: 13,
    textAlign: 'left',
    color: '#2d85ca',
    marginLeft: 10,
  },
  images: {
    height: 200,
    margin: 10
  },
});

AppRegistry.registerComponent('HelloGeek', () => HelloGeek);
