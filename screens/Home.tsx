import { useNavigation } from '@react-navigation/native';
import { ListHeaderComponent } from 'components/Home/ListHeaderComponent';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCharacterStore } from 'store/useCharacterStore';

export default function Home() {
  const { getCharacters, characters } = useCharacterStore();
  const [search, setSearch] = useState<string>('');
  const navigation = useNavigation<any>();
  const characterFilter = characters.filter((event) => event.name.toLowerCase().includes(search));
  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  const hasFilterdata = () => (search.length > 0 ? characterFilter.length : null);
  const countFilterData = hasFilterdata();
  useEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: 'Buscar personajes...',
        cancelButtonText: 'Cancelar',
        onChangeText: (event: any) => {
          const { text } = event.nativeEvent;
          setSearch(text);
        },
        onCancelButtonPress: () => {
          setSearch('');
        },
      },
    });
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1 bg-[#FFFFFF]" style={styles.container}>
      <FlatList
        data={characterFilter}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <ListHeaderComponent countFilterData={countFilterData} searchText={search} />
        }
        style={{ flex: 1, paddingBottom: 100 }}
        renderItem={({ item }) => (
          <View
            key={item.id}
            className="mx-2 my-2 flex h-[200px] flex-row gap-4 rounded-lg bg-white p-2 shadow-lg">
            <Image
              className="rounded-lg"
              source={{ uri: item.image }}
              style={{ width: 100, height: '100%' }}
              resizeMode="cover"
            />
            <View className="w-screen flex-1 justify-between">
              <View>
                <Text className="pt-3 text-xl font-semibold text-[#565563]">{item.name}</Text>
                <Text className="text-lg font-semibold text-[#565563]">
                  {item.origin?.name ?? 'Sin origen'}
                </Text>
              </View>
              <View className="flex w-full items-center justify-center">
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => navigation.navigate('Details', { id: item.id })}
                  className="w-full items-center justify-center rounded-lg bg-[#E9E9EE] p-4">
                  <Text className="text-lg font-semibold text-[#565563]">Ver más</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <View className="my-4 w-full items-center justify-center">
            <Text className="w-[70%] text-center" numberOfLines={2} ellipsizeMode="tail">
              No se encontraron resultados que coincidan con {search}
            </Text>
          </View>
        }
        maxToRenderPerBatch={5}
      />
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
