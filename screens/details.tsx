import { useRoute } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import { useCharacterStore } from 'store/useCharacterStore';

export default function Details() {
  const route = useRoute();
  const { characters } = useCharacterStore();
  const { id } = route.params as { id: number };

  const userCharacter = characters.find((user) => user.id === id);

  return (
    <View className="flex-1 bg-white">
      <View className="mx-4">
        <View className="my-4 bg-white px-4 py-2 pt-4 shadow-lg">
          <Text className="text-[#565563]">{userCharacter?.name ?? 'N/A'}</Text>
        </View>
        <View className="my-4 h-[140px] bg-white px-4 py-2 shadow-lg">
          <Text className="text-[#565563]">{userCharacter?.name ?? 'N/A'}</Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          style={{}}
          className=" items-center justify-center rounded-lg bg-blue-400 p-4">
          <Text className="text-white">Guardar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
