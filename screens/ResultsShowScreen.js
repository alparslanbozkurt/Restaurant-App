import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from '../api/yelp';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function ResultsShowScreen({ route }) {
    const [result, setResult] = useState(null);
    const id = route.params.id;

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text style={styles.title}>{result.name}</Text>
            <Text style={styles.phone}>{result.phone}</Text>

            <View style = {styles.icon}>
            {
                result.is_closed ? <AntDesign name="closecircleo" size={30} color="red" /> :
                <MaterialIcons name="check-box" size={30} color="green" />
            }
            </View>


            {/* Ana resim gösterme */}
            <Image style={styles.image} source={{ uri: result.image_url }} />

            {/* FlatList ile çoklu resim gösterme */}
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo} // URL'yi anahtar olarak kullan
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />;
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height:180,
        margin:10,
        borderRadius:8
    },
    
    title:{
        alignSelf:'center',
        fontSize:25,
        marginVertical:10,
    },

    phone:{
        alignSelf:'center',
        fontSize:20,
    },

    icon:{
        alignSelf:'center'
    }
});
