import React, {useState} from 'react';
import {RadioButton} from 'react-native-paper';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {
  TextStyleAdvancedSettling,
  TextStyleBody,
  TextStyleInputSection,
  TextStyleRadioButton,
  TextStyleTeam,
} from './styledcomponents';
import CustomButton from '../../utils/customButton';
type HomeProps = {
  navigation: any;
};

export default function Home({navigation}: HomeProps) {
  const [hostTeam, setHostTeam] = useState<string>('');
  const [visitorTeam, setVisitorTeam] = useState<string>('');
  const [over, setOver] = useState<string>('');
  const [activeTextInput, setActiveTextInput] = useState<string | null>(null);
  const [selectedValue, setSelectedValue] = useState<string>('option1');
  const [selectedValueOpted, setSelectedValueOpted] =
    useState<string>('option1');

  const handleValueChange = (value: any) => {
    setSelectedValue(value);
  };
  const handleValueChangeOpted = (value: any) => {
    setSelectedValueOpted(value);
  };

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
    setHostTeam(newText);
  };

  const handleTextChangevisitorTeam = (newText: any) => {
    setVisitorTeam(newText);
  };

  const handleTextChangevisitorOver = (newText: any) => {
    setOver(newText);
  };

  const setMatchDetails = () => {
    navigation.navigate('SelectOpeningPlayer');
  };

  return (
    <TextStyleBody>
      <TextStyleTeam>Team</TextStyleTeam>
      <TextStyleInputSection>
        <TextInput
          style={[
            styles.textInput,
            activeTextInput === 'text1' && styles.activeTextInput,
          ]}
          value={hostTeam}
          onChangeText={handleTextChangeHost}
          onFocus={handleText1Focus}
          placeholder="Host Team"
        />

        <TextInput
          style={[
            styles.textInput,
            activeTextInput === 'text2' && styles.activeTextInput,
          ]}
          onFocus={handleText2Focus}
          value={visitorTeam}
          onChangeText={handleTextChangevisitorTeam}
          placeholder="Visitor Team"
        />
      </TextStyleInputSection>
      <TextStyleTeam>Toss won by?</TextStyleTeam>
      <TextStyleRadioButton>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              color="green"
              value="option1"
              status={selectedValue === 'option1' ? 'checked' : 'unchecked'}
              onPress={() => handleValueChange('option1')}
            />
            <Text>Host Team</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              color="green"
              value="option2"
              status={selectedValue === 'option2' ? 'checked' : 'unchecked'}
              onPress={() => handleValueChange('option2')}
            />
            <Text>Visitor Team</Text>
          </View>
        </View>
      </TextStyleRadioButton>
      <TextStyleTeam>Opted to?</TextStyleTeam>
      <TextStyleRadioButton>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              color="green"
              value="option1"
              status={
                selectedValueOpted === 'option1' ? 'checked' : 'unchecked'
              }
              onPress={() => handleValueChangeOpted('option1')}
            />
            <Text>Bat</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              color="green"
              value="option2"
              status={
                selectedValueOpted === 'option2' ? 'checked' : 'unchecked'
              }
              onPress={() => handleValueChangeOpted('option2')}
            />
            <Text>Bowl</Text>
          </View>
        </View>
      </TextStyleRadioButton>
      <TextStyleTeam>Overs?</TextStyleTeam>
      <TextStyleRadioButton>
        <TextInput
          style={[
            styles.textInput,
            activeTextInput === 'text3' && styles.activeTextInput,
          ]}
          onFocus={handleText3Focus}
          value={over}
          onChangeText={handleTextChangevisitorOver}
          placeholder="16"
        />
      </TextStyleRadioButton>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <View>
          <TextStyleAdvancedSettling>
            Advanced settings
          </TextStyleAdvancedSettling>
        </View>
        <View>
          <CustomButton
            title="Start Match"
            color="#2f8520"
            onPressFunction={setMatchDetails}
          />
        </View>
      </View>
    </TextStyleBody>
  );
}

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
