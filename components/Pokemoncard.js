import { StyleSheet, View, Text, Platform, Image } from 'react-native';


export default function Pokemoncard({
    name,
    image,
    type,
    hp,
    moves,
    weaknesses,
}) {
    const { borderColor, emoji } = getTypeDetails(type);

    return (
        <View style={styles.card}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.hp}>❤️️{hp}</Text>
            </View>
            <Image source={image} accessibilityLabel={`${name} pokemon`} resizeMode='contain' style={styles.image} />
            {/* <Image source={image} accessibilityLabel={`${name} Pokemon`} style={styles.image} resizeMode="contain"/> */}

            <View style={styles.typeContainer}>
                <View style={[styles.badge, { borderColor }]}>
                    <Text style={styles.typeEmoji}>{emoji}</Text>
                    <Text style={styles.typeText}>{type}</Text>
                </View>
            </View>



            <View style={styles.movesContainer}>
                <Text style={styles.movesText}>Moves: {moves.join(", ")}</Text>
            </View>



            <View style={styles.movesContainer}>
                <Text style={styles.movesText}>Weaknesses: {weaknesses.join(", ")}</Text>
            </View>



        </View>
    );
}


const getTypeDetails = (type) => {
    switch (type.toLowerCase()) {
        case "electric":
            return { borderColor: "#FFD700", emoji: "⚡️" };
        case "water":
            return { borderColor: "#6493EA", emoji: "💧" };
        case "fire":
            return { borderColor: "#FF5733", emoji: "🔥" };
        case "grass":
            return { borderColor: "#66CC66", emoji: "🌿" };
        default:
            return { borderColor: "#A0A0A0", emoji: "❓" };
    }
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 2, height: 2 },
                shadowColor: "#333",
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    nameContainer: {
        // flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 32,
        width: "100%",
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    hp: {
        fontSize: 22,
        alignItems: "center",
        marginLeft: 25
    },
    image: {
        width: '100%',
        height: 200,
    },
    typeContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 40,
        marginTop: 32,

    },
    badge: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 4,
    },
    typeEmoji: {
        fontSize: 25,
        marginRight: 12,
    },
    typeText: {
        fontSize: 22,
        fontWeight: "bold",
    },
    movesContainer: {
        marginBottom: 12,
    },
    movesText: {
        fontSize: 22,
        fontWeight: "bold",
    },

    weaknessContainer: {
        marginBottom: 8,
    },
    weaknessText: {
        fontSize: 22,
        fontWeight: "bold",
    },
}) 