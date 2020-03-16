import React from 'react'
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Image } from 'react-native'
import BookMarkItem from './BookMarkItem'
import * as firebase from 'firebase'
import { connect } from 'react-redux'
import BookItem from './BookItem'

class FavoritesBooks extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            books: this.props.favoritesBooks.filter((item) => item.emailUser === firebase.auth().currentUser.email)
        }
    }
  

     
    render() {
        if(this.state.books.length > 0){
            return(
                <View style={styles.main_container}>
                 <FlatList
                    data={this.state.books}
                    renderItem={({item}) => <BookItem
                                                book={item} 
                                               
                                             />} 
                   keyExtractor={item => item.id}                          
                 
                 />
      
                </View>
         )
        }else {
           return(
            <View
            style={{flex: 1, alignItems:'center', justifyContent:'center'}}
            >
               <Image style={{width: 90, height: 90}} source={require('../Images/ic_favorite.png')} />
               <Text style={{color:'#505050', fontWeight:'bold'}}>No Favorites</Text>
            </View>
           )
            
        }
        
    }
}


const styles = StyleSheet.create({
   main_container: {
       flex: 1,
       backgroundColor: '#FFD700'
   },
   loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
}
})

const mapStateToProps = (state) => {
    return {
        favoritesBooks: state.favoritesBooks
    }
}
export default connect(mapStateToProps)(FavoritesBooks)
