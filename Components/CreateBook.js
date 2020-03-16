import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { TextInput, TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import * as firebase from 'firebase'
import { DropDown, Dropdown } from 'react-native-material-dropdown'
class CreateBook extends React.Component {
     constructor(props){
         super(props)
         this.state={
            title: '',
            description: '',
            author: '',
            imageLink: '',
            category: '',
            vote_average: 0,
            titleError: '',
            descriptionError: '',
            authorError: '',
            imageLinkError: '',
            categoryError: '',
            vote_averageError: '',
            user: undefined
         }
         
     }

    componentDidMount(){
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({
                user: user
            })
        })
    }

    _handleChangeTitle = (text) =>{
         this.setState({
             title: text
         }  )
    }

    _handleChangeDescription = (text) =>{
        this.setState({
            description: text
        }
        )
   }


   _handleChangeAuthor = (text) =>{
    this.setState({
        author: text
    }
    )
   }
   _handleChangeImageLink = (text) =>{
    this.setState({
        imageLink: text
    }
    )
   }
   _handleChangeCategory = (text) =>{
    this.setState({
        category: text
    }
    )
  } 
  _handleChangeVoteAverage = (text) =>{
    this.setState({
        vote_average: text
    }
    )
  } 
  _titleValidator = () => {
    if(this.state.title == ''){
        this.setState({
            titleError: 'title field cannot be empty'
        })
    }else {
        this.setState({
            titleError: ''
        })
    }
  }
  _descriptionValidator = () => {
    if(this.state.description == ''){
        this.setState({
            descriptionError: 'description field cannot be empty'
        })
    }else {
        this.setState({
            descriptionError: ''
        })
    }
  }
  _authorValidator = () => {
    if(this.state.author == ''){
        this.setState({
            authorError: 'author field cannot be empty'
        })
    }else {
        this.setState({
            authorError: ''
        })
    }
  }

  _imageLinkValidator = () => {
    if(this.state.imageLink == ''){
        this.setState({
            imageLinkError: 'imageLink field cannot be empty'
        })
    }else {
        this.setState({
            imageLinkError: ''
        })
    }
  }

  _categoryValidator = () => {
    if(this.state.category == ''){
        this.setState({
            categoryError: 'category field cannot be empty'
        })
    }else {
        this.setState({
            categoryError: ''
        })
    }
   }
   _ratingValidator = () => {
    if(this.state.vote_average == ''){
        this.setState({
            vote_averageError: 'rating field cannot be empty'
        })
    }else {
        this.setState({
            vote_averageError: ''
        })
    }
  }



  _saveBook = () => {
      const { title, description, author, imageLink, category, vote_average} = this.state
        if(title !== '' && description !== '' && author !== '' && imageLink !== ''  && category !== '' && vote_average!=='')
        {
            firebase.database().ref('/books')
            .push({
                title: title,
                description: description,
                author: author,
                imageLink: imageLink,
                category: category,
                vote_average: vote_average,
                emailUser: this.state.user.email
            }).then(()=>{
                //success callback
                alert('the book is added !')
            }).catch((error)=>{
                //error callback
                console.log('error ' , error)
            })
        }else {
            alert('empty fields')
        }
        
      
  }
  

  
   


     render(){
        let data = [{
            value: 0,
          }, {
            value: 0.5,
          }, {
            value: 1,
          }, {
              value: 1.5
          }, {
              value: 2
          }, {
              value: 2.5
          }, {
              value: 3
          }, {
              value: 3.5
          }, {
              value: 4
          }, {
              value: 4.5
          }, {
              value: 5
          }];
         return(
             <ScrollView  style={styles.main_container}
             >
                   <View style={{flex: 1}}>
                   <View style={styles.input_block}
                   >

                   <TextInput 
                    style={styles.input}
                    placeholderTextColor='#808080'
                    placeholder="title"
                    onChangeText={(text) => this._handleChangeTitle(text)}
                    />   
                    <Text style={styles.error}>{this.state.titleError}</Text>
                    <TextInput 
                    style={styles.input}
                    placeholderTextColor='#808080'
                    placeholder="description"
                    multiline={true}
                    value={this.state.description}
                    onChangeText={(text) => this._handleChangeDescription(text)}
                    /> 
                    <Text style={styles.error}>{this.state.descriptionError}</Text>
                    <TextInput 
                    style={styles.input}
                    placeholderTextColor='#808080'
                    placeholder="author"
                    onChangeText={(text) => this._handleChangeAuthor(text)}
                    /> 
                    <Text style={styles.error}>{this.state.authorError}</Text>  
                    <TextInput 
                    style={styles.input}
                    placeholderTextColor='#808080'
                    placeholder="imageLink"
                    onChangeText={(text) => this._handleChangeImageLink(text)}
                    />     
                    <Text style={styles.error}>{this.state.imageLinkError}</Text>
                    <TextInput 
                    style={styles.input}
                    placeholderTextColor='#808080'
                    placeholder="category"
                    onChangeText={(text) => this._handleChangeCategory(text)}
                    />     
                    <Text style={styles.error}>{this.state.categoryError}</Text> 
                    <Dropdown
                       
                       data={data}
                       label='rating'
                       containerStyle={{width: 200, backgroundColor: '#FFF'}}
             
                       onChangeText={(text) => this._handleChangeVoteAverage(text)}
                    />         
                    <Text style={styles.error}>{this.state.vote_averageError}</Text>
                    
                    <TouchableOpacity style={styles.button}           
                        activeOpacity={0.8}
                        onPress={() => this._saveBook()}
                   >
                <Text style={styles.text} >Submit</Text>
                </TouchableOpacity>    
                   </View>
                   </View>    
             </ScrollView>
         )
     }
}


const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor:'#FFD700',
    },
    icone: {
        height: 100,
        width: 100,
        marginTop: 24
    },
    input: {
        marginLeft: 10,
        marginEnd: 10,
        borderWidth: 1,
        borderRadius: 5.5,
        borderColor: '#000',
        marginTop:4,
        width: 200,
        padding: 4,
        backgroundColor:'#FFF'
    },
    input_block: {
        marginTop:15,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    button: {
        marginTop:10,
        width:200,
        borderRadius:10,
        backgroundColor:'#000',
        padding: 10,
        alignItems:'center'
    },
    buttonFacebook: {
        marginTop:10,
        width:200,
        borderRadius:10,
        backgroundColor:'#365899',
        color:'#FFF',
        padding: 10,
        alignItems:'center'
    },
    text: {
        fontWeight:'bold',
        color:'#FFD700'
    },
    error: {
        color: 'red',
        marginLeft: 7
    },
    dropdpwn: {
        marginLeft: 10,
        marginEnd: 10,
        borderWidth: 1,
        borderRadius: 5.5,
        borderColor: '#000',
        marginTop:4,
        width: 400,
        padding: 4,
        backgroundColor:'#FFF'
    }
})

export default CreateBook