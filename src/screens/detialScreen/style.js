import {StyleSheet, StatusBar} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#D3D3D3',
    borderRadius: 25,
    width: '95%',
    paddingVertical: 25,
    paddingLeft: 10,
  },
  detailWrapper: {
    width: '80%',
    flexDirection: 'row',
  },
  titleWrapper: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  textStyle: {
    fontSize: 16,
  },
});
export default styles;
