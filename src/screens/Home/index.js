import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import _ from 'lodash';

const Home = (props) => {
  const [asteroId, setAsteroId] = useState('');
  const [errMSg, setErrMsg] = useState('');
  const dispatch = useDispatch();

  const onChangeText = (value) => {
    setAsteroId(value);
  };

  const _validateForm = () => {
    let isValid = true;
    if (asteroId === '') {
      setErrMsg('Please enter value');
      isValid = false;
    }
    return isValid;
  };

  const _handleSubmit = () => {
    if (_validateForm()) {
      dispatch({
        type: 'SUBMIT_REQUEST',
        payload: {asteroId: asteroId},
      });
    }
  };

  const _handleRandomIdPress = () => {
    dispatch({
      type: 'RANDOM_ASTERO_ID_REQUEST',
    });
  };

  return (
    <View style={style.container}>
      <TextInput
        style={style.inputWrapper}
        onChangeText={(text) => onChangeText(text)}
        value={asteroId}
        placeholder="Enter Asteroid ID"
      />
      <Text style={style.errMSgStyle}>{errMSg}</Text>
      <Button
        title="Submit"
        buttonStyle={style.buttonWrapper}
        onPress={_handleSubmit}
        disabled={asteroId === '' ? true : false}
      />
      <Button
        title="Random Asteroid"
        buttonStyle={style.buttonWrapper}
        onPress={_handleRandomIdPress}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
  },
  errMSgStyle: {
    width: '80%',
    color: 'red',
  },
  buttonWrapper: {
    width: 240,
    marginTop: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default Home;
