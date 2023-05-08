import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Alert} from 'react-native';

const ScoreBoard = (count: string | number) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: -10,
      }}>
      <View>
        <View>
          <Text>Sandeep, 1st inning</Text>
        </View>
        <View style={styles.ScoreCountBox}>
          <Text style={styles.textScore}>{count} - 2 </Text>
          <Text style={{marginLeft: 5, marginTop: 10, fontSize: 18}}>
            (3.5)
          </Text>
        </View>
      </View>
      <View style={{marginRight: 70}}>
        <View>
          <View>
            <Text>CRR</Text>
          </View>
          <View style={{marginTop: 30}}>
            <Text>5.74</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ScoreBoard;

const styles = StyleSheet.create({
  textScore: {
    fontSize: 36,
    fontWeight: '700',
    alignItems: 'center',
  },
  ScoreCountBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  optionButton: {
    padding: 10,
    borderWidth: 1,
  },
  activeOptionButton: {
    backgroundColor: 'green',
  },
});
