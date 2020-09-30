import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './style';

const DetailScreen = () => {
  const asteroidDetail = useSelector((state) => state.common);
  const asteroidData = asteroidDetail && asteroidDetail.data;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.item}>
        <View style={styles.detailWrapper}>
          <Text style={styles.titleWrapper}>name:</Text>
          <Text style={styles.textStyle}>
            {' '}
            {asteroidData && asteroidData.name}
          </Text>
        </View>
        <View style={styles.detailWrapper}>
          <Text style={styles.titleWrapper}>nasa_jpl_url:</Text>
          <Text style={[styles.textStyle, {paddingRight: 35}]}>
            {' '}
            {asteroidData && asteroidData.nasa_jpl_url}
          </Text>
        </View>
        <View style={styles.detailWrapper}>
          <Text style={styles.titleWrapper}>
            is_potentially_hazardous_asteroid:
          </Text>
          <Text style={styles.textStyle}>
            {' '}
            {`${
              asteroidData && asteroidData.is_potentially_hazardous_asteroid
            }`}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
