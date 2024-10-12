import React, { createRef, useEffect, useState } from 'react';
import {
    TextInput,
    View,
} from 'react-native';

const OtpInput = ({ size, onSubmit, onChange }) => {
    const [otp, setOtp] = useState({ 0: null, 1: null, 2: null, 3: null });
    const ref = Array.from({ length: size }).map(() => createRef());
    const [activeIndex, setActiveIndex] = useState(null);
    // console.log(otp, ref);

    const onEdit = () => {
        const values = Object.values(otp);
        console.log('submit', values);
        onChange(values.join(''));
        if (values.includes(null) || values.includes('')) {
            // console.log('Please fill all the fields');
            return;
        }
        onSubmit(values.join(''));
        console.log('OTP:', values.join(''));
    };
    useEffect(() => {
        onEdit();
    }, [otp]);
    return Array.from({ length: size }).map((_, index) => (
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
                    outline: 'none',
                }}
                selectTextOnFocus={true}
                onChangeText={text => {
                    // setOtp({...otp, [index]: '1'});
                }}
                value={otp[index]}
                onKeyPress={({ nativeEvent: { key } }) => {
                    // console.log({key});
                    if (key === 'Backspace') {
                        setOtp({ ...otp, [index]: null });
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
                            setOtp({ ...otp, [index]: '' });
                            return;
                        }
                        setOtp({ ...otp, [index]: key });
                        // if (index === size - 1) {
                        //     onSubmit();
                        // }
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
                onChange={({ nativeEvent: { text } }) => {
                    // console.log({text});
                }}
                onFocus={() => {
                    setActiveIndex(index);
                }}
                onSubmitEditing={onEdit}
            />
        </View>
    ));
};
export default OtpInput