import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { colors } from '../colors';

const MobileInput = ({
	width = null,
	onSubmit,
	styles = {},
	inputStyles = {},
	placeholder = '',
}: any) => {
	const [country, setCountry] = React.useState('91');
	const [mobile, setMobile] = React.useState('');
	const [countryFocus, setCountryFocus] = React.useState(false);
	const [mobileFocus, setMobileFocus] = React.useState(false);
	return (
		<View
			style={[
				{
					width: width ?? '100%',
					flexDirection: 'row',
					gap: 10,
				},
				styles,
			]}
		>
			<View
				style={[
					{
						backgroundColor:
							country || countryFocus
								? 'black'
								: colors.inactiveBackground,
						padding: 10,
						borderRadius: 10,
						borderWidth: 1,
						borderColor: colors.border,
					},
					styles,
				]}
			>
				<TextInput
					style={[
						{
							color: 'white',
							fontSize: 16,
							// width: '100%',
							padding: 10,
							fontWeight:
								country || countryFocus ? 'bold' : '400',
							// backgroundColor: "red"
						},
						inputStyles,
					]}
					value={country}
					onChangeText={setCountry}
					onFocus={() => setCountryFocus(true)}
					onBlur={() => setCountryFocus(false)}
					// passwordRules="required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"
					placeholder={placeholder}
					maxLength={4}
					keyboardType='number-pad'
				/>
			</View>
			<View
				style={[
					{
						width: '80%',
						backgroundColor:
							mobile || mobileFocus
								? 'black'
								: colors.inactiveBackground,
						padding: 10,
						borderRadius: 10,
						borderWidth: 1,
						borderColor: colors.border,
						flexDirection: 'row',
					},
					styles,
				]}
			>
				<TextInput
					style={[
						{
							width: '100%',
							color: 'white',
							fontSize: 16,
							// width: '100%',
							padding: 10,
							fontWeight: mobile || mobileFocus ? 'bold' : '400',
							// backgroundColor: "green"
						},
						inputStyles,
					]}
					value={mobile}
					onChangeText={setMobile}
					onFocus={() => setMobileFocus(true)}
					onBlur={() => setMobileFocus(false)}
					// passwordRules="required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"
					placeholder={'Phone Number'}
					maxLength={10}
					keyboardType='number-pad'
				/>
			</View>
		</View>
	);
};

export default MobileInput;
