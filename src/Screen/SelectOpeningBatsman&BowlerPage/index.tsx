import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Alert} from 'react-native';
import {TextInput} from 'react-native-paper';
import CustomButton from '../../utils/customButton';
import {
  TextStyleInputSection,
  TextStyleInputSelectedPlayer,
  TextStyleTeam,
} from '../HomePage/styledcomponents';

interface Props {
  navigation: any;
}

const SelectOpeningPlayer: React.FC<Props> = ({navigation}) => {
  const [striker, setStriker] = useState<string>('');
  const [nonStriker, setNonStriker] = useState<string>('');
  const [openingBowler, setOpeningBowler] = useState<string>('');
  const [activeTextInput, setActiveTextInput] = useState<string | null>(null);

  const handleText1Focus = () => {
    setActiveTextInput('text1');
  };

  const handleText2Focus = () => {
    setActiveTextInput('text2');
  };

  const handleText3Focus = () => {
    setActiveTextInput('text3');
  };

  const handleTextChangeHost = (newText: string) => {
    setStriker(newText);
  };

  const handleTextChangeVisitorTeam = (newText: string) => {
    setNonStriker(newText);
  };

  const handleTextChangeVisitorOver = (newText: string) => {
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
          value={nonStriker}
          onChangeText={handleTextChangeVisitorTeam}
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
          onChangeText={handleTextChangeVisitorOver}
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
