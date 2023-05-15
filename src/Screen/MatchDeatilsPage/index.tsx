import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
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

  const handleSelect = (buttonValue: number) => {
    let updatedButtonValue = buttonValue;
    if (selectedValues[selectedValues.length - 1] === 1) {
      updatedButtonValue += 1;
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
        }
        setOverCount(newCount);
        break;
    }
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
        style={[
          styles.UndoButtonStyle,
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          },
        ]}>
        <View style={{flex: 0.3}}>
          <TextStyleButtonSection>
            <ButtonSection />
          </TextStyleButtonSection>
        </View>
        <View style={{width: 10}} />
        <View style={{flex: 0.7}}>
          <TextStyleButtonSection>
            <ButtonList onPress={handleSelect} />
          </TextStyleButtonSection>
        </View>
      </View>
    </View>
  );
};

export default DetailsScorePage;

const styles = StyleSheet.create({
  UndoButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
