import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const data = [
  {name: 'Pardeep', over: 3, maiden: 0, run: 14, wicket: 1, er: 7.2},
];

function BowlingData({data}: any) {
  return (
    <View style={styles.tableRow}>
      <Text style={styles.tableCellNames}>{data.name}</Text>
      <Text style={styles.tableCell}>{data.over}</Text>
      <Text style={styles.tableCell}>{data.maiden}</Text>
      <Text style={styles.tableCell}>{data.run}</Text>
      <Text style={styles.tableCell}>{data.wicket}</Text>
      <Text style={styles.tableCell}>{data.er}</Text>
    </View>
  );
}

function BowlingTable() {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <BowlingData data={item} />}
      keyExtractor={item => item.name}
    />
  );
}

function BowlingCard() {
  return (
    <View>
      <BowlingTable />
    </View>
  );
}
export default BowlingCard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    padding: 10,
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
    padding: 10,
    borderColor: '#ddd',
    marginBottom: -11,
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
