import { StyleSheet, TextInput, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ text, onSearchTextChange, onSearchSubmit }: any) => {
    return (
        <View style={styles.titleContainer}>
            <Feather name='search' style={styles.icon} />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder='Search'
                value={text}
                onChangeText={onSearchTextChange}
                onEndEditing={onSearchSubmit}
            />

        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginVertical: 20,
        height: 50,
        borderRadius: 8,
        flexDirection: 'row',
        paddingHorizontal: 5,
        gap: 5
    },
    inputStyle: {
        flex: 1,
        fontSize: 20
    },
    text: {
        fontSize: 20
    },
    icon: {
        fontSize: 30,
        alignSelf: 'center',
    }
});