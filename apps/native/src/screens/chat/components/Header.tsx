import {Image, Text, TouchableOpacity, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Header = () => {
  const user = {
    id: 1,
    name: 'Walter White',
    image:
      'https://i.pinimg.com/564x/e9/1a/74/e91a747bef4ff140ea5a01474b9fa699.jpg',
    status: 'last seen recently',
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#212121',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          paddingLeft: 10,
          paddingHorizontal: 16,
        }}>
        <Svg
          fill="none"
          stroke="white"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          height={20}
          width={20}>
          <Path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </Svg>
      </TouchableOpacity>
      <Image
        source={{
          uri: user.image,
        }}
        style={{
          backgroundColor: 'grey',
          width: 37,
          height: 37,
          borderRadius: 100,
          overflow: 'hidden',
        }}
      />
      <View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: 'white',
            marginLeft: 10,
          }}>
          {user.name}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: 'grey',
            marginLeft: 10,
          }}>
          {user.status}
        </Text>
      </View>
    </View>
  );
};

export default Header;
