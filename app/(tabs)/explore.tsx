import { StyleSheet, View, Text } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.text}>Hello world from explorer!</Text>
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
