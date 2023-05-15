import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';

interface Props {
  checked: boolean;
  onChangeWicket: (isChecked: boolean) => void;
  onChangeWide: (isChecked: boolean) => void;
  onChangeNoBall: (isChecked: boolean) => void;
  onChangeLegBye: (isChecked: boolean) => void;
}

const WideNoballWicketLegbye = ({
  onChangeWicket,
  onChangeWide,
  onChangeNoBall,
  onChangeLegBye,
}: Props) => {
  const [checkboxes, setCheckboxes] = useState([
    {value: 'Wide', checked: false},
    {value: 'No Ball', checked: false},
    {value: 'Wicket', checked: false},
    {value: 'Leg Bye', checked: false},
  ]);

  const handleCheckboxChange = (index: number, isChecked: boolean) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index].checked = isChecked;
    setCheckboxes(newCheckboxes);

    switch (index) {
      case 0:
        onChangeWide(isChecked);
        break;
      case 1:
        onChangeNoBall(isChecked);
        break;
      case 2:
        onChangeWicket(isChecked);
        break;
      default:
        break;
    }
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: -17,
        marginTop: 1,
      }}>
      {checkboxes.map((checkbox, index) => (
        <View key={index}>
          <CheckBox
            title={checkbox.value}
            checked={checkbox.checked}
            onPress={() => handleCheckboxChange(index, !checkbox.checked)}
            checkedIcon={
              <View
                style={{
                  backgroundColor: 'green',
                  borderRadius: 3,
                  width: 20,
                  height: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'white'}}>✓</Text>
              </View>
            }
            uncheckedIcon={
              <View
                style={{
                  borderColor: 'green',
                  borderRadius: 3,
                  borderWidth: 1,
                  width: 20,
                  height: 20,
                }}
              />
            }
          />
        </View>
      ))}
    </View>
  );
};

export default WideNoballWicketLegbye;
