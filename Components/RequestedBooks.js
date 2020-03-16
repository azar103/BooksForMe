import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import * as firebase from 'firebase'
import { FlatList } from 'react-native-gesture-handler'
import BookMarkItem from './BookMarkItem'
import MyItem from './MyItem'

class RequestedBooks extends React.Component {
    constructor(props){
          super(props)
          this.state = {
               books: [],
               user: undefined
          }
    }
    componentDidMount() {
         firebase.auth().onAuthStateChanged(user => {
             if(user){
                 this.setState({
                     user: user
                 })
             }
         })
         firebase.database()
                 .ref('/books')
                 .on('value', (snap) => {
                     var items = []
                     snap.forEach((child) => {
                         items.push({
                            id: child.key,
                            title: child.val().title,
                            description: child.val().description,
                            author: child.val().author,
                            imageLink: child.val().imageLink,
                            category: child.val().category,
                            vote_average: child.val().vote_average,
                            emailUser: child.val().emailUser
                         })
                
                        
                     })
                     this.setState({
                         books: items.filter((item) => item.emailUser === firebase.auth().currentUser.email).reverse()
                     })
                 })  
               
    }

    _deleteBook(id){
        firebase.database().ref('/books/'+id).remove()
    }

    _displayDetailForBook = (id, title, description, imageLink, author, category, vote_average)  =>{
        this.props.navigation.navigate("BookDetail", {id: id, title: title, description: description, imageLink: imageLink, author: author, category: category, vote_average: vote_average})
     }


    render() {
       
        return(
              <View style={styles.main_container}>
                  <FlatList
                   data={this.state.books}
                   renderItem={({item}) => <MyItem 
                                               book={item} 
                                               displayDetailForBook={this._displayDetailForBook}
                                               deleteBook={this._deleteBook}
                                            />} 
                  keyExtractor={item => item.id}                          
                
                />
              </View> 
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    }
})

export default RequestedBooks
