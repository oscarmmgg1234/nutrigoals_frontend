import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity, Platform} from 'react-native';
import styles from './Styles';
import Colors from '../../Styles/Colors';
import Images from '../../Styles/Images';

class Bottom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navigatinUpdate: 1,
    };
  }
  componentDidMount() {
    this.setState({navigatinUpdate: this.props.page});
  }
  updateValue = (value) => {
    if (value === 1) {
      this.setState({navigatinUpdate: value});
      this.props.navigation.navigate('Home');
    } else if (value === 2) {
      this.setState({navigatinUpdate: value});
      this.props.navigation.navigate('NutrionLog');
    } else if (value === 3) {
      this.setState({navigatinUpdate: value});
      this.props.navigation.navigate('Instagram');
    } else if (value === 4) {
      this.setState({navigatinUpdate: value});
      this.props.navigation.navigate('Profile');
    }
  };
  render() {
    const {navigatinUpdate} = this.state;
    return (
      <>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomContainerWrapper}>
            <TouchableOpacity onPress={() => this.updateValue(1)}>
              <Image
                source={Images.home}
                style={{
                  width: 35,
                  height: 35,
                  // marginTop: 14,
                  alignSelf: 'center',
                  tintColor:
                    navigatinUpdate == 1 ? Colors.buttonColor : Colors.White,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateValue(2)}>
              <Image
                source={Images.book_open}
                style={{
                  width: 35,
                  height: 35,
                  alignSelf: 'center',
                  tintColor:
                    navigatinUpdate == 2 ? Colors.buttonColor : Colors.White,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateValue(3)}>
              <Image
                source={Images.instagram}
                style={{
                  width: 35,
                  height: 35,
                  // marginTop: 14,
                  alignSelf: 'center',
                  tintColor:
                    navigatinUpdate == 3 ? Colors.buttonColor : Colors.White,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateValue(4)}>
              <Image
                source={Images.user}
                style={{
                  width: 35,
                  height: 35,
                  // marginTop: 14,
                  alignSelf: 'center',
                  tintColor:
                    navigatinUpdate == 4 ? Colors.buttonColor : Colors.White,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

export default Bottom;
