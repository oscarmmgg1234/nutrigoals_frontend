import React from 'react';
import {ImageBackground , View, Text} from 'react-native';

const SocialScreen = () => {
  return (
    <>
      
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
      
    </>
  );
};
export default SocialScreen;
