import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import BowlingCard from './BowlerCart';

const data = [
  {name: 'Sandeep', runs: 50, balls: 35, fours: 6, sixes: 2, sr: 142.85},
  {name: 'Sanjana', runs: 30, balls: 25, fours: 4, sixes: 1, sr: 120.0},
];

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

function TableRow({data}: any) {
  return (
    <View style={styles.tableRow}>
      <Text style={styles.tableCellNames}>{data.name}</Text>
      <Text style={styles.tableCell}>{data.runs}</Text>
      <Text style={styles.tableCell}>{data.balls}</Text>
      <Text style={styles.tableCell}>{data.fours}</Text>
      <Text style={styles.tableCell}>{data.sixes}</Text>
      <Text style={styles.tableCell}>{data.sr.toFixed(2)}</Text>
    </View>
  );
}

function Table() {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <TableRow data={item} />}
      ListHeaderComponent={<TableHeader />}
      keyExtractor={item => item.name}
    />
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

export default CricketScoreboard;

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

  tableHeaderNameCell: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
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
