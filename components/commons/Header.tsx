import { Image, View } from 'react-native';

export const HeaderLogo = () => {
  return (
    <View>
      <Image source={require('../../assets/Img/Logo.png')} style={{ width: 100, height: 100 }} />
    </View>
  );
};
