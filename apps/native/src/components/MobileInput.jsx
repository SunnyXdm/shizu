import React from 'react'
import { Text, TextInput, View } from 'react-native'
import StylishInput from './StylishInput'
import NumberPad from './NumberPad'

const MobileInput = ({ config, setConfig, onSubmit }) => {

    const onDialCodeChange = (dialCode) => {
        setConfig({ ...config, dialCode })
    }

    const onPhoneChange = (phone) => {
        setConfig({ ...config, phone })
    }

    return <View style={[
        {
            // padding: 10,
        }
    ]}>
        <StylishInput onSubmit={onSubmit} onDialCodeChange={onDialCodeChange} dialCode={config.dialCode} onPhoneChange={onPhoneChange} phone={config.phone} />
    </View>
}

export default MobileInput