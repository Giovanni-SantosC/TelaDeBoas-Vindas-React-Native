import React from 'react';
import { Image, Text, View, StyleSheet, } from 'react-native';


export default function SocialPost() {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.userName}>Giovanni Dos Santos</Text>
        <Image source={{uri: 'https://avatars.githubusercontent.com/u/164267847?v=4'}}
        style={styles.postImage}
        >

        </Image>
        <Text style={styles.postDescription}>Este é um post de exemplo em uma rede social, mostrando uma foto com um abreve descrição</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  postContainer:{
    backgroundColor: '#fff',
    borderRadius:10,
    padding:15,
    shadowColor:'#000',
    shadowOffset:{width:0, height:2},
    shadowOpacity:0.3,
    shadowRadius:4,
    elevation:5,
    margin:20,
  },
  userName:{
    fontSize:18,
    fontWeight:'bold',
    marginBottom:10,
  },
  postImage:{
    width:'100%',
    height:400,
    borderRadius:10,
    marginBottom:10,
  },
  postDescription:{
    fontSize:16,
    color:'#666',
    textAlign:'justify',
  }

})

