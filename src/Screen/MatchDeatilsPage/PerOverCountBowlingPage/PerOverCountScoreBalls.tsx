import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ValueDisplay = ({selectedValues}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>This over: </Text>
      <View style={styles.circleContainer}>
        {selectedValues.map((value: any, index: number) => (
          <View key={index} style={styles.circle}>
            <Text style={styles.circleText}>{value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -10,
  },
  header: {
    fontSize: 14,
    marginTop: 8,
  },
  circleContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  circleText: {
    fontSize: 14,
    fontWeight: '700',
  },
});

export default ValueDisplay;
