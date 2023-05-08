import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const CountButton = ({onCountChange}: any) => {
  const [count, setCount] = useState(0);

  const handleButtonClick = (value: any) => {
    const newCount = count + value;
    setCount(newCount);
    onCountChange(newCount); // Call the onCountChange prop with the updated count value
  };

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Button title="1" onPress={() => handleButtonClick(1)} />
        <Button title="2" onPress={() => handleButtonClick(2)} />
        <Button title="3" onPress={() => handleButtonClick(3)} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Button title="4" onPress={() => handleButtonClick(4)} />
        <Button title="6" onPress={() => handleButtonClick(6)} />
      </View>
      <Text>Count: {count}</Text>
    </View>
  );
};

export default CountButton;
