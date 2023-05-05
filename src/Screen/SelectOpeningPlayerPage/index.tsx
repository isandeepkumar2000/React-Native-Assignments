import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Alert} from 'react-native';
import {
  TextStyleInputSection,
  TextStyleInputSelectedPlayer,
  TextStyleTeam,
} from '../HomePage/styledcomponents';
import {TextInput} from 'react-native-paper';
import CustomButton from '../../utils/customButton';

const SelectOpeningPlayer = ({navigation}) => {
  const [striker, setstriker] = useState('');
  const [nonStricker, setNonStricker] = useState('');
  const [openingBowler, setOpeningBowler] = useState('');
  const [activeTextInput, setActiveTextInput] = useState(null);

  const handleText1Focus = () => {
    setActiveTextInput('text1');
  };

  const handleText2Focus = () => {
    setActiveTextInput('text2');
  };
  const handleText3Focus = () => {
    setActiveTextInput('text3');
  };

  const handleTextChangeHost = (newText: any) => {
    setstriker(newText);
  };

  const handleTextChangevisitorTeam = (newText: any) => {
    setNonStricker(newText);
  };

  const handleTextChangevisitorOver = (newText: any) => {
    setOpeningBowler(newText);
  };

  const setMatchPlayer = () => {
    navigation.navigate('Details');
  };

  return (
    <View>
      <TextStyleTeam>Striker</TextStyleTeam>
      <TextStyleInputSelectedPlayer>
        <TextInput
          style={[
            styles.textInput,
            activeTextInput === 'text1' && styles.activeTextInput,
            {backgroundColor: 'white'},
          ]}
          value={striker}
          onChangeText={handleTextChangeHost}
          onFocus={handleText1Focus}
          placeholder="Player name"
        />
      </TextStyleInputSelectedPlayer>
      <TextStyleTeam>Non-striker</TextStyleTeam>
      <TextStyleInputSelectedPlayer>
        <TextInput
          style={[
            styles.textInput,
            activeTextInput === 'text2' && styles.activeTextInput,
            {backgroundColor: 'white'},
          ]}
          onFocus={handleText2Focus}
          value={nonStricker}
          onChangeText={handleTextChangevisitorTeam}
          placeholder="Player name"
        />
      </TextStyleInputSelectedPlayer>
      <TextStyleTeam>Opening bowler</TextStyleTeam>
      <TextStyleInputSelectedPlayer>
        <TextInput
          style={[
            styles.textInput,
            activeTextInput === 'text3' && styles.activeTextInput,
            {backgroundColor: 'white'},
          ]}
          onFocus={handleText3Focus}
          value={openingBowler}
          onChangeText={handleTextChangevisitorOver}
          placeholder="Player name"
        />
        <View>
          <CustomButton
            style={{width: 372, marginTop: 30}}
            title="Start Match"
            color="#2f8520"
            onPressFunction={setMatchPlayer}
          />
        </View>
      </TextStyleInputSelectedPlayer>
    </View>
  );
};

export default SelectOpeningPlayer;
const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  activeTextInput: {
    borderBottomColor: 'green',
  },
  optionButton: {
    padding: 10,
    borderWidth: 1,
  },
  activeOptionButton: {
    backgroundColor: 'green',
  },
});
