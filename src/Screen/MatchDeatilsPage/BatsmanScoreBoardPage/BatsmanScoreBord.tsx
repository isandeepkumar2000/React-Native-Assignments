import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BowlingCard from '../BowlerBowlingCardPage/BowlerCart';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface typeofScore {
  name: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  sr: number;
}

function TableHeader() {
  return (
    <View style={styles.tableHeader}>
      <Text style={styles.tableNameHeaderCell}>Batsman</Text>
      <Text style={styles.tableHeaderCell}>Run</Text>
      <Text style={styles.tableHeaderCell}>Ball</Text>
      <Text style={styles.tableHeaderCell}>4s</Text>
      <Text style={styles.tableHeaderCell}>6s</Text>
      <Text style={styles.tableHeaderCell}>SR</Text>
    </View>
  );
}

function TableRow({name, runs, balls, fours, sixes, sr}: typeofScore) {
  return (
    <View style={styles.tableRow}>
      <Text style={styles.tableCellNames}>{name}</Text>
      <Text style={styles.tableCell}>{runs}</Text>
      <Text style={styles.tableCell}>{balls}</Text>
      <Text style={styles.tableCell}>{fours}</Text>
      <Text style={styles.tableCell}>{sixes}</Text>
      <Text style={styles.tableCell}>{sr.toFixed(2)}</Text>
    </View>
  );
}

function TableHeaderBowler() {
  return (
    <View style={styles.tableHeader}>
      <Text style={styles.tableNameHeaderCell}>Bowler</Text>
      <Text style={styles.tableHeaderCell}>Over</Text>
      <Text style={styles.tableHeaderCell}>Maiden</Text>
      <Text style={styles.tableHeaderCell}>Run</Text>
      <Text style={styles.tableHeaderCell}>Wicket</Text>
      <Text style={styles.tableHeaderCell}>ER</Text>
    </View>
  );
}

function Table() {
  const [striker, setStriker] = useState<string>('');
  const [nonStriker, setNonStriker] = useState<string>('');

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    try {
      const value1 = await AsyncStorage.getItem('striker');
      setStriker(value1 || '');
      const value2 = await AsyncStorage.getItem('nonStriker');
      setNonStriker(value2 || '');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View>
      <TableHeader />
      <TableRow
        name={striker}
        runs={50}
        balls={35}
        fours={6}
        sixes={2}
        sr={142.85}
      />
      <TableRow
        name={nonStriker}
        runs={30}
        balls={25}
        fours={4}
        sixes={1}
        sr={120.0}
      />
    </View>
  );
}

function CricketScoreboard() {
  return (
    <View>
      <Table />
      {TableHeaderBowler()}
      <BowlingCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  tableHeader: {
    flexDirection: 'row',
    padding: 6,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  tableHeaderCell: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
  tableNameHeaderCell: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    paddingRight: 35,
    paddingLeft: 0,
  },
  tableRow: {
    flexDirection: 'row',
    padding: 7,
    borderColor: '#ddd',
  },
  tableCell: {
    flex: 1,
    fontSize: 12,
    textAlign: 'center',
  },
  tableCellName: {
    flex: 1,
    fontSize: 12,
    paddingLeft: 10,
    textAlign: 'left',
  },
  tableCellNames: {
    flex: 1,
    fontSize: 13,
    paddingLeft: 5,
    paddingRight: 35,
    textAlign: 'left',
    color: 'green',
  },
});

export default CricketScoreboard;
