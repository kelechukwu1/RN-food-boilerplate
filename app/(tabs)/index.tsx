import SearchBar from '@/components/SearchBar';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import yelp from '../api/yelp'

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const [searchText, setSearchText] = useState('')
  const [restaurants, setRestaurants] = useState([])
  const callApi = async () => {
    try {
      const response = await yelp.get('/businesses/search', {
        params: {
          limit: 50,
          term: searchText,
          location: 'san jose'
        }
      })
      console.log(response.data)
      setRestaurants(response.data.businesses)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <View style={styles.titleContainer}>
      <SearchBar
        text={searchText}
        onSearchTextChange={setSearchText}
        onSearchSubmit={callApi}
      />
      <Text style={[styles.text, { color: colorScheme === 'dark' ? 'white' : 'black' }]}>Hello world from index! </Text>
      <Text style={[styles.text, { color: colorScheme === 'dark' ? 'white' : 'black' }]}>We have found {restaurants.length} results</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginHorizontal: 10,
    marginVertical: 20
  },
  text: {
    fontSize: 20
  }
});
