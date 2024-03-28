import { StyleSheet, View, Text, SafeAreaView, Platform } from 'react-native';


export default function Pokemoncard() {
    return (
        <SafeAreaView style={styles.container}>

            <Text>Pokemon card</Text>
        </SafeAreaView>
    );
}


console.log("Platform.OS", Platform.OS)


const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 200,
        paddingTop: Platform.OS == "android" ? 100 : 0
    }
}) 