import React from 'react';
import {ImageBackground, SafeAreaView, View, Text} from 'react-native';

const SocialScreen = () => {
  return (
    <>
      <SafeAreaView style={{height: '100%', width: '100%'}}>
        <ImageBackground
          style={{
            width: '100%',
            height: '100%',
            tintColor: '#000000',
            elevation: -10,
          }}
          source={require('../../assests/logo/workOut.jpg')}>
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.7)',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                marginTop: 50,
                fontSize: 30,
                fontWeight: 'bold',
                color: 'white',
              }}>
              {' '}
              {'Social Coming Soon...'}{' '}
            </Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};
export default SocialScreen;
