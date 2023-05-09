import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TextStyleInputSection} from '../HomePage/styledcomponents';
import CricketScoreboard from './BatsmanScoreBord';
import ScoreBoard from './ScoreBoard';
import ValueDisplay from './ShowingPerBalls';
import ButtonList from './ScoreButtnSection';
import ButtonSection from './ButtonSection';

const DetailsScorePage = () => {
  const [count, setCount] = useState(0);
  const [selectedValues, setSelectedValues] = useState<number[]>([]);
  const [ballsBowled, setBallsBowled] = useState(0);

  const handleSelect = (buttonValue: number) => {
    setCount(count + buttonValue);
    setSelectedValues([...selectedValues, buttonValue]);
    setBallsBowled(ballsBowled + 1);
  };

  return (
    <View>
      <TextStyleInputSection>
        <ScoreBoard count={count} />
      </TextStyleInputSection>
      <TextStyleInputSection>
        <CricketScoreboard />
      </TextStyleInputSection>
      <TextStyleInputSection>
        <ValueDisplay selectedValues={selectedValues} />
      </TextStyleInputSection>
      <View>
        <TextStyleInputSection>
          <ButtonSection />
        </TextStyleInputSection>
        <TextStyleInputSection>
          <ButtonList onPress={handleSelect} />
        </TextStyleInputSection>
      </View>
    </View>
  );
};

export default DetailsScorePage;
