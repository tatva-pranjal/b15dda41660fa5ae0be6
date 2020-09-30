import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
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
export default styles;
