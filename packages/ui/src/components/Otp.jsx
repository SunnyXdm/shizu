import React, {createRef, useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';

const heading = 'Enter the OTP sent to\n(••) (••••••••)10';

const getDefaultState = size => {
  const obj = {};
  for (let i = 0; i < size; i++) {
    obj[i] = null;
  }
  return obj;
};

const OtpInput = ({size}) => {
  const [otp, setOtp] = useState({0: null, 1: null, 2: null, 3: null});
  const ref = Array.from({length: size}).map(() => createRef());
  const [activeIndex, setActiveIndex] = useState(null);
  // console.log(otp, ref);

  const onSubmit = () => {
    const values = Object.values(otp);
    // console.log('submit', values);
    if (values.includes(null) || values.includes('')) {
      // console.log('Please fill all the fields');
      return;
    }
    console.log('OTP:', values.join(''));
  };
  useEffect(() => {
    onSubmit();
  }, [otp]);
  return Array.from({length: size}).map((_, index) => (
    <View
      key={index}
      style={{
        width: 50,
        height: 50,
        backgroundColor:
          activeIndex === index || otp[index] ? 'black' : '#282828',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#323232',
        borderRadius: 10,
        borderWidth: 1,
      }}>
      <TextInput
        ref={el => (ref[index].current = el)}
        maxLength={1}
        style={{
          color: 'white',
          fontSize: 20,
          textAlign: 'center',
          fontWeight: 'bold',
        }}
        selectTextOnFocus={true}
        onChangeText={text => {
          // setOtp({...otp, [index]: '1'});
        }}
        value={otp[index]}
        onKeyPress={({nativeEvent: {key}}) => {
          // console.log({key});
          if (key === 'Backspace') {
            setOtp({...otp, [index]: null});
            if (index > 0) {
              ref[index - 1].current.focus();
            } else {
              ref[0].current.focus();
            }
          } else {
            console.log({
              istrue: [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '0',
              ].includes(key),
              key,
              val: key,
            });
            if (
              !['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(key)
            ) {
              setOtp({...otp, [index]: ''});
              return;
            }
            setOtp({...otp, [index]: key});
            if (index === size - 1) {
              onSubmit();
            }
            if (index < size - 1) {
              ref[index + 1].current.focus();
            }
          }
        }}
        textContentType="oneTimeCode"
        keyboardType="number-pad"
        selectionColor={'rgba(255, 255, 255, 0.5)'}
        cursorColor={'white'}
        // if some user pastes the otp then this will handle that
        onChange={({nativeEvent: {text}}) => {
          // console.log({text});
        }}
        onFocus={() => {
          setActiveIndex(index);
        }}
        onSubmitEditing={onSubmit}
      />
    </View>
  ));
};

const Otp = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        // justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.container}>
        <Text style={styles.header}>{heading}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            gap: 0,
            margin: 20,
          }}>
          <OtpInput size={4} />
        </View>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: 'rgb(25, 25, 25)',
            borderColor: '#323232',
            borderRadius: 10,
            borderWidth: 1,
            marginHorizontal: 16,
          }}>
          <Text
            style={{
              color: '#323232',
              textAlign: 'center',
              fontSize: 13,
            }}>
            Send to Email instead
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    // width: Dimensions.get('window').width,
    padding: 10,
    marginTop: 100,
    backgroundColor: 'rgb(25, 25, 25)',
    // borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    borderWidth: 1,
    width: 300,
  },
  header: {
    padding: 10,
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Otp;
