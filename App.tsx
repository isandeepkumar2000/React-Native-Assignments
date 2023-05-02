import React, {useState} from 'react';
import {
  RefreshControl,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface Section {
  title: string;
  data: string[];
}

function App(): JSX.Element {
  const [sections, setSections] = useState<Section[]>([]);
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    const newSection = {
      title: 'Title ' + (sections.length + 1),
      data: ['Item ' + (sections.length + 1), 'Item ' + (sections.length + 1)],
    };
    setSections([...sections, newSection]);
    setRefreshing(false);
  };

  // If there are no sections, create a default section
  if (sections.length === 0) {
    const defaultSection = {
      title: 'Title 1',
      data: ['Item 1', 'Item 2'],
    };
    setSections([defaultSection]);
  }

  return (
    <SectionList
      sections={sections}
      renderItem={({item}) => <Text style={styles.text}>{item}</Text>}
      renderSectionHeader={({section}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          colors={['#ff00ff']}
          refreshing={Refreshing}
          onRefresh={onRefresh}
        />
      }
    />
    // <View style={styles.body}>
    //   <FlatList
    //     keyExtractor={(item, index) => index.toString()}
    //     data={Items}
    //     renderItem={({item}) => (
    //       <View style={styles.item}>
    //         <Text style={styles.text}>{item.name}</Text>
    //       </View>
    //     )}
    //     refreshControl={
    //       <RefreshControl
    //         colors={['#ff00ff']}
    //         refreshing={Refreshing}
    //         onRefresh={onRefresh}
    //       />
    //     }
    //   />
    // </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
