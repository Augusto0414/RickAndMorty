import { ItemCard } from 'components/commons/ItemCard';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Overview() {
  return (
    <SafeAreaView className="flex-1 bg-[#FFFFFF]" style={styles.container}>
      <View className="px-2">
        <View className="px-4 py-4">
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            className="text-2xl font-bold text-[#565563]">
            Gestion de Rick and Morty
          </Text>
          <Text ellipsizeMode="tail" numberOfLines={2}>
            En esta session podra observar a los personajes de Rick and morty
          </Text>
        </View>
        <View className="flex w-full flex-row">
          <ItemCard style={{ flex: 1 }} title="Especies" value="12" />
          <ItemCard style={{ flex: 1 }} title="Especies" value="12" />
        </View>
        <View className="flex w-full flex-row pt-4">
          <ItemCard style={{ flex: 1 }} title="Especies" value="12" />
          <ItemCard style={{ flex: 1 }} title="Especies" value="12" />
        </View>
        <View className="mx-2 my-2 rounded-lg bg-white p-2 shadow-lg">
          <Text>Hello</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
