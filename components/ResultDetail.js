import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function ResultDetail({result}) {
  return (
    <View style={styles.container}>
        <Image 
            style={styles.image} 
            source={result.image_url ?{uri:result.image_url}:null}/>
            <Text style={styles.name}>{result.name}</Text>
           <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text>{result.rating}</Text>
              <AntDesign style={styles.icon} name="star" size={14} color="yellow" />
      <Text>, {result.review_count} Değerlendirme</Text>

            </View>
      

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginLeft:10,
  },
  image:{
    width:250, 
    height:120,
    borderRadius:12,
    marginBottom:6,
  },
  name:{
    fontWeight:'bold',

  },
  icon:{
    textShadowColor: 'black', 
    textShadowOffset: { width: 1, height: 1 }, 
    textShadowRadius: 2
  }
})