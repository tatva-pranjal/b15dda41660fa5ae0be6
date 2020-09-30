import React from 'react';
import {SafeAreaView, View, StyleSheet, Text, StatusBar} from 'react-native';
import {useSelector} from 'react-redux';

const DetailScreen = () => {
  const asteroidDetail = useSelector((state) => state.common);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.item}>
        <View style={styles.detailWrapper}>
          <Text style={styles.titleWrapper}>name:</Text>
          <Text style={styles.textStyle}> {asteroidDetail.data.name}</Text>
        </View>
        <View style={styles.detailWrapper}>
          <Text style={styles.titleWrapper}>nasa_jpl_url:</Text>
          <Text style={styles.textStyle}>
            {' '}
            {asteroidDetail.data.nasa_jpl_url}
          </Text>
        </View>
        <View style={styles.detailWrapper}>
          <Text style={styles.titleWrapper}>
            is_potentially_hazardous_asteroid:
          </Text>
          <Text style={styles.textStyle}>
            {' '}
            {`${asteroidDetail.data.is_potentially_hazardous_asteroid}`}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#D3D3D3',
    marginVertical: 8,
    borderRadius: 25,
    width: '90%',
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  detailWrapper: {
    width: '100%',
    flexDirection: 'row',
  },
  titleWrapper: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  textStyle: {
    fontSize: 16,
    width: '70%',
  },
});

export default DetailScreen;
