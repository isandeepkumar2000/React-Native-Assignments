import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Alert} from 'react-native';
import {TextStyleInputSection} from '../HomePage/styledcomponents';
import ScoreBoard from './ScoreBoard';
import CricketScoreboard from './BatsmanScoreBord';
import CountButton from './OverBallCount';

const DetailsScorePage = () => {
  const [count, setCount] = useState(0);

  const handleCountChange = (value: any) => {
    setCount(value);
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
        <CountButton onCountChange={handleCountChange} />
      </TextStyleInputSection>
    </View>
  );
};

export default DetailsScorePage;
