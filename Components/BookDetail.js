import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import { ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import * as firebase from 'firebase'

class BookDetail extends React.Component {
    constructor(props){
        super(props)
    }


    _toggleFavorite = () => {
            const action = { type:"TOGGLE_FAVORITE", value: {
                id: this.props.navigation.state.params.id,
                author: this.props.navigation.state.params.author,
                title: this.props.navigation.state.params.title,
                description: this.props.navigation.state.params.description,
                imageLink: this.props.navigation.state.params.imageLink,
                category: this.props.navigation.state.params.category,
                emailUser: firebase.auth().currentUser.email
                }}
            this.props.dispatch(action)
    }
   
    _displayHeart(){
        if(this.props.favoritesBooks.findIndex((item) => item.id === this.props.navigation.state.params.id && item.emailUser === firebase.auth().currentUser.email) !== -1){
            return(
                    <TouchableOpacity
                    style={styles.container}
                    onPress={() => this._toggleFavorite()}
                  >
                  
                        <Image 
                        style={styles.icone}  
                        source={require('../Images/ic_favorite_border.png')}
                     />
                  </TouchableOpacity>   
                      
            )
        } else {
              return(
                <TouchableOpacity
                style={styles.container}
                onPress={() => this._toggleFavorite()}
              >
              
                    <Image 
                    style={styles.icone}  
                    source={require('../Images/ic_favorite.png')}
                 />
              </TouchableOpacity>   
              )
        }
    }
   
    
    render() {
        const {title, description, imageLink, author, category} = this.props.navigation.state.params
    
        return(
            <ScrollView style={styles.main_container}>
                <View style={styles.header}>
                <Text style={styles.category}>{category}</Text>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.author}>By {author}</Text>
              
                {this._displayHeart()}
      
                </View>
                <Image 
                style={styles.image}
                   source={{uri: imageLink}}
                />
              
                <Text  style={styles.description}>
                    {description}
                </Text>
                
            </ScrollView>
        )
    }

}

const styles= StyleSheet.create({
    main_container: {
        flex: 1
    },
    title: {
        textAlign:'left',
        fontSize: 29,
        color: '#000',
        fontWeight:'bold'
    },
    header: {
        backgroundColor: '#FFE207'
    },
    image: {
        width: 400,
        height: 300
    },
    description:{
        fontSize: 18,
        fontWeight:'bold',
        color: '#858A90',
        backgroundColor: '#fff',
        margin: 5,
        lineHeight: 30
    },
    author:{
        fontSize: 18,
        fontWeight:'bold',
        marginBottom:10
    },
    category: {
        color: 	'#000',
        fontSize: 16,
        fontWeight:'bold'
    },
    buttonStyle: {
        backgroundColor: '#000',
        marginStart: 5,
        marginEnd: 5
    },
    icone: {
        width:50, 
        height: 50
    },
    container: {
        justifyContent:'center',
        alignItems:'center'
    }
})

const mapStateToProps = (state) => {
    return {
        favoritesBooks: state.favoritesBooks
    }
}

export default connect(mapStateToProps)(BookDetail)