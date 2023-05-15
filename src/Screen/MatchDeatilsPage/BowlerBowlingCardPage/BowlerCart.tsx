import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function BowlingCard() {
  const [openingBowler, setOpeningBowler] = useState<string>('');

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    try {
      const value1 = await AsyncStorage.getItem('openingBowler');
      setOpeningBowler(value1 || '');
    } catch (error) {
      console.error(error);
    }
  };

  const over = 3;
  const maiden = 0;
  const run = 14;
  const wicket = 1;
  const er = 7.2;

  return (
    <View style={styles.tableRow}>
      <Text style={styles.tableCellNames}>{openingBowler}</Text>
      <Text style={styles.tableCell}>{over}</Text>
      <Text style={styles.tableCell}>{maiden}</Text>
      <Text style={styles.tableCell}>{run}</Text>
      <Text style={styles.tableCell}>{wicket}</Text>
      <Text style={styles.tableCell}>{er}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tableRow: {
    flexDirection: 'row',
    padding: 10,
    borderColor: '#ddd',
    marginBottom: -11,
  },
  tableCellNames: {
    flex: 1,
    fontSize: 13,
    paddingLeft: 5,
    paddingRight: 35,
    textAlign: 'left',
    color: 'green',
  },
  tableCell: {
    flex: 1,
    fontSize: 12,
    textAlign: 'center',
  },
});

export default BowlingCard;
