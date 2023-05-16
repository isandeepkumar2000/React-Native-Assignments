import React, {useState, useEffect} from 'react';
import {View, Text, Button, Modal, StyleSheet, TextInput} from 'react-native';
import {
  TextStyleButtonSection,
  TextStyleInputSection,
  TextStyleScoreSection,
  TextStyleWideSection,
} from '../HomePage/styledcomponents';
import CricketScoreboard from './BatsmanScoreBoardPage/BatsmanScoreBord';
import ScoreBoard from './BatsmanScoreBoardPage/ScoreBoardDisplay';
import ValueDisplay from './PerOverCountBowlingPage/PerOverCountScoreBalls';
import ButtonList from './ScoringButtonSectionPage/ScoringButtonPressSection';
import ButtonSection from './RetireUndoSwitchBatsmanPage/RetireUndoSwitchBatsman';
import WideNoballWicketLegbye from './WideNoballWicketSectionPage/wideNoball';
import {InputText} from '../UserLoginPage/styledcomponents';
import MyButton from '../../utils/myButton';

const DetailsScorePage = () => {
  const [count, setCount] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [selectedValues, setSelectedValues] = useState<number[]>([]);
  const [ballsBowled, setBallsBowled] = useState(0);
  const [wicketOccurred, setWicketOccurred] = useState(false);
  const [overCount, setOverCount] = useState(0.0);
  const [wideChecked, setWideChecked] = useState(false);
  const [noBallChecked, setNoBallChecked] = useState(false);
  const [legByeChecked, setLegByeChecked] = useState(false);

  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const [bowlerName, setBowlerName] = useState(''); // State to store the bowler name

  const handleSelect = (buttonValue: any) => {
    let updatedButtonValue = buttonValue;
    if (selectedValues[selectedValues.length - 1] === 1) {
      updatedButtonValue = buttonValue;
    }

    let newCount = overCount + 0.1;

    switch (true) {
      case noBallChecked:
        setCount(count + updatedButtonValue);
        setBallsBowled(ballsBowled + 1);
        setSelectedValues([...selectedValues, buttonValue]);
        setNoBallChecked(false);
        break;

      case wicketOccurred:
        setCount(count + updatedButtonValue);
        setWicket(wicket + 1);
        setWicketOccurred(false);
        setSelectedValues([...selectedValues, buttonValue]);
        setBallsBowled(ballsBowled + 1);

        if (newCount > Math.floor(overCount) + 0.6) {
          newCount = Math.floor(overCount) + 1.0;
          setShowPopup(true);
        }
        setOverCount(newCount);
        break;

      case wideChecked:
        setCount(count + updatedButtonValue);
        setSelectedValues([...selectedValues, buttonValue]);
        setWideChecked(false);
        break;

      case legByeChecked:
        setCount(count + updatedButtonValue);
        setSelectedValues([...selectedValues, buttonValue]);
        setLegByeChecked(false);
        break;

      default:
        setCount(count + updatedButtonValue);
        setSelectedValues([...selectedValues, buttonValue]);
        setBallsBowled(ballsBowled + 1);

        if (newCount > Math.floor(overCount) + 0.6) {
          newCount = Math.floor(overCount) + 1.0;
          setShowPopup(true);
          setSelectedValues([]);
        }
        setOverCount(newCount);
        break;
    }
  };

  const handleBowlerNameChange = (value: any) => {
    setBowlerName(value);
  };

  const handlePopupSubmit = () => {
    if (bowlerName.trim() !== '') {
      console.log('Bowler Name:', bowlerName);
    }
    setShowPopup(false);
  };

  const handleWicketCheckboxChange = (checked: any) => {
    setWicketOccurred(checked);
    setCount(count);
  };

  const handleWideCheckboxChange = (checked: any) => {
    setWideChecked(checked);
    if (checked) {
      setSelectedValues([...selectedValues, 1]);
    }
  };
  const handlenoBallCheckboxChange = (checked: any) => {
    setNoBallChecked(checked);
    if (checked) {
      setSelectedValues([...selectedValues, 1]);
      setCount(count + 1);
    }
  };

  const handleLegByeBallCheckboxChange = (checked: any) => {
    setLegByeChecked(checked);
    if (checked) {
      setSelectedValues([...selectedValues]);
      setCount(count);
    }
  };

  return (
    <View>
      <TextStyleInputSection>
        <ScoreBoard
          count={count}
          wicket={wicket}
          overCount={overCount.toFixed(1)}
        />
      </TextStyleInputSection>
      <TextStyleScoreSection>
        <CricketScoreboard />
      </TextStyleScoreSection>
      <TextStyleScoreSection>
        <ValueDisplay selectedValues={selectedValues} />
      </TextStyleScoreSection>
      <View>
        <TextStyleWideSection>
          <WideNoballWicketLegbye
            checked={wicketOccurred}
            onChangeWicket={handleWicketCheckboxChange}
            onChangeWide={handleWideCheckboxChange}
            onChangeNoBall={handlenoBallCheckboxChange}
            onChangeLegBye={handleLegByeBallCheckboxChange}
          />
        </TextStyleWideSection>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: '2%',
        }}>
        <View style={{flex: 0.3}}>
          <TextStyleButtonSection>
            <ButtonSection />
          </TextStyleButtonSection>
        </View>
        <View style={{flex: 0.7, marginLeft: '1%'}}>
          <TextStyleButtonSection>
            <ButtonList onPress={handleSelect} />
          </TextStyleButtonSection>
        </View>
      </View>

      <Modal visible={showPopup} animationType="slide" transparent={true}>
        <View style={styles.popup}>
          <InputText
            placeholder="Enter your Name"
            value={bowlerName}
            onChangeText={handleBowlerNameChange}
          />

          <MyButton
            title="Submit Bowler Name"
            color="#31921d"
            onPress={handlePopupSubmit}
          />
        </View>
      </Modal>
    </View>
  );
};

export default DetailsScorePage;

const styles = StyleSheet.create({
  UndoButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
});
