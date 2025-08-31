import { ItemCard } from 'components/commons/ItemCard';
import { useCharacter } from 'hooks/useCharacter';
import { Text, View } from 'react-native';

interface ListHeaderProps {
  countFilterData?: number | null;
  searchText?: string;
}

export const ListHeaderComponent = ({ countFilterData, searchText }: ListHeaderProps) => {
  const { speciesCount, gendersCount } = useCharacter();
  return (
    <View className="px-2">
      <View className="px-4 py-4">
        <Text ellipsizeMode="tail" numberOfLines={1} className="text-2xl font-bold text-[#565563]">
          Gestion de Rick and Morty
        </Text>
        <Text ellipsizeMode="tail" numberOfLines={2}>
          En esta session podra observar a los personajes de Rick and morty
        </Text>
        {countFilterData != null ? (
          <View>
            <Text>
              Se encontraron {countFilterData} que coinciden {searchText}
            </Text>
          </View>
        ) : (
          <View />
        )}
      </View>
      <View className="flex w-full flex-row">
        <ItemCard style={{ flex: 1 }} title="Especies" value={speciesCount.toString()} />
        <ItemCard style={{ flex: 1 }} title="Generos" value={gendersCount.toString()} />
      </View>
      <View className="flex w-full flex-row pt-4">
        <ItemCard style={{ flex: 1 }} title="Especies" value="12" />
        <ItemCard style={{ flex: 1 }} title="Especies" value="12" />
      </View>
    </View>
  );
};
