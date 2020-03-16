import React from 'react'
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import BookMarkItem from './BookMarkItem'
import * as firebase from 'firebase'
class BookMark extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            books: [],
            isLoading: false
        }
    }

    componentDidMount(){
        firebase.database().ref('/books').on('value', (snap) => {
            var items = []
            snap.forEach((child) => {
                items.push({
                    id: child.key,
                    title: child.val().title,
                    description: child.val().description,
                    author: child.val().author,
                    imageLink: child.val().imageLink,
                    category: child.val().category,
                    vote_average: child.val().vote_average
                })
            })
            this.setState({
                books: items.reverse()
            })
        })
    }
    backFun = () => {
        this.forceUpdate()
    }
    _displayDetailForBook = (id, title, description, imageLink, author, category, emailUser, vote_average)  =>{
        this.props.navigation.navigate("BookDetail", {id: id, title: title, description: description, imageLink: imageLink, author: author, category: category, emailUser: emailUser, vote_average: vote_average, backFun: this.backFun})
     }

     
    render() {

    
       
        return(
               <View style={styles.main_container}>
                <FlatList
                   data={this.state.books}
                   renderItem={({item}) => <BookMarkItem  
                                               book={item} 
                                               displayDetailForBook={this._displayDetailForBook}
                                            />} 
                  keyExtractor={item => item.id}                          
                
                />
     
               </View>
        )
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


export default BookMark