import { DimensionValue, StyleProp, Text, View, ViewStyle } from 'react-native';
import { AlienSvg } from './Icons';

interface ItemCardProps {
  width?: DimensionValue;
  height?: DimensionValue;
  borderRadius?: number;
  title: string;
  value: string;
  style?: StyleProp<ViewStyle>;
}

export const ItemCard = ({
  width = 150,
  height = 90,
  borderRadius = 10,
  title,
  value,
  style,
}: ItemCardProps) => {
  return (
    <>
      <View
        style={[{ width, height, borderRadius }, style]}
        className="mx-2 bg-white px-4 shadow-xl">
        <View className="flex flex-row items-center gap-2 py-2">
          <AlienSvg width={20} height={20} color={'#565563'} />
          <Text className="text-lg font-bold text-[#565563]">{title}</Text>
        </View>
        <Text className="px-2 py-2 text-xl font-bold text-[#565563]">{value}</Text>
      </View>
    </>
  );
};
