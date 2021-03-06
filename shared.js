import { Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

export const shadowStyle = {
	shadowOpacity: 0.35,
	shadowOffset: {
		width: 0, height: 5,
	},
	shadowColor: '#000',
	shadowRadius: 3,
	elevation: 5,
};

export const alignItemsMap = {
	center: 'center',
	left: 'flex-start',
	right: 'flex-end'
};


export const Touchable = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

export const isAndroid = Platform.OS === 'android';