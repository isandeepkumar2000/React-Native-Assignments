import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <View style={styles.body}>
      <View style={styles.Box1}>
        <View style={styles.view1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>
      <View style={styles.Box2}>
        <View style={styles.view4}>
          <Text style={styles.text}>4</Text>
        </View>
      </View>
      <View style={styles.Box2}>
        <View style={styles.view5}>
          <Text style={styles.text}>5</Text>
        </View>
      </View>
      <View style={styles.Box3}>
        <View style={styles.view6}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.view7}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  view1: {
    width: '15%',
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    width: '30%',
    height: 50,
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    width: '55%',
    height: 50,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view4: {
    width: '100%',
    height: 50,
    backgroundColor: '#00c8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view5: {
    width: '100%',
    height: 50,
    backgroundColor: '#62ff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view6: {
    width: '50%',
    backgroundColor: '#d7d417',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view7: {
    width: '50%',
    backgroundColor: '#dd00ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Box1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Box2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Box3: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    fontWeight: '700',
  },
});

export default App;
