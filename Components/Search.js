import React  from 'react'
import { StyleSheet, View,  TextInput, Text, FlatList, Button, ActivityIndicator, Image } from 'react-native'
import * as firebase from 'firebase'
import BookItem from './BookItem'
class Search extends React.Component {
     constructor(props){
         super(props)
         this.state = {
             data: [],
             searchedText: '',
             isClicked: false,
             books: [],
             isLoading: false
         }
     } 

     componentDidMount() {
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
                data: items
            })
        })
     }
     _displayDetailForBook = (title, description, imageLink, author)  =>{
        this.props.navigation.navigate("BookDetail", {title: title, description: description, imageLink: imageLink, author: author})
     }

     _handleChange = (text) => {
         this.setState({
             searchedText: text
         })
     }


     _loadBooksBySearchedText = (t)  => {
       
         let text= t.toLowerCase()
         if(text.length > 0){
             this.setState({
                 isLoading: true
             })
             this.setState({
                 books: this.state.data.filter((item) => item.title.toLowerCase().match(text)),
                 isLoading: false
             })
         }

     }
     _displayLoading(){
         if(this.state.isLoading) {
            return(
                <View style={styles.loading_container} >
                  <ActivityIndicator size='large'/>
              </View>
            )
       
         }
     }
     render() {
         return(
             <View style={styles.container}>
              <View style={styles.search_container}>
              <Image source={require('../Images/ic_search.png')} style={styles.icone} />
                 <TextInput style={styles.textinput} placeholder="search here" 
                 placeholderTextColor='black' 
                 onChangeText={(text) => this._handleChange(text)}
                 onSubmitEditing={() => {

                    this._loadBooksBySearchedText(this.state.searchedText)}}
                 />  
              </View>   
              {this.state.searchedText.length > 0 ? 
              
              <FlatList
              data={this.state.books}
              renderItem={({item}) => <BookItem   
              book={item} 
              displayDetailForBook={this._displayDetailForBook}        
              />
               
            }
              keyExtractor={(item) => item.id.toString()}

           /> : <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                 <Text style={{fontWeight:'bold'}}>No results</Text>
           </View>
            }  
             {this._displayLoading()}
             </View>
         ) 
     }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFD700'
    },
    textinput: {
        height: 50,
        width: 300,
        padding: 5,
        borderRadius: 1.5,
        marginRight:5,
        marginLeft: 5,
        color: '#000'

    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop:10,
        width:300,
        borderRadius:20,
        backgroundColor:'#000',
        padding: 20,
        alignItems:'center',
        textAlign:'center'
    },
    text:{
        color:'#FFD700'
    },
    search_container: {
        height: 60,
        flexDirection: 'row',
        justifyContent:'center',
        borderWidth: 1,
        borderStyle:"solid",
        borderRadius: 5.5,
        marginStart:5,
        marginEnd:5,
        marginTop:4

    },
    icone: {
        width: 20,
        height: 20,
        marginTop: 19
    }
    
})

export default Search