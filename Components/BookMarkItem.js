import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


class BookMarkItem extends React.Component {
    constructor(props){
        super(props)
    }


    _displayRating(rating){
        if(rating == 0){
             return(
                 <Image 
                    style = {styles.ratingIcone}
                    source={require('../Images/one.png')}
                 />
             )
        }else if(rating == 0.5) {
            return(
                <Image
                style = {styles.ratingIcone} 
                source={require('../Images/two.png')}
             />
            )
        }else if(rating == 1) {
            return(
                <Image 
                style = {styles.ratingIcone}
                source={require('../Images/three.png')}
             />
            )
        } else if(rating == 1.5) {
            return(
                <Image 
                style = {styles.ratingIcone}
                source={require('../Images/four.png')}
             />
            )
        }  else if(rating == 2) {
            return(
                <Image 
                style = {styles.ratingIcone}
                source={require('../Images/five.png')}
             />
            )
        } else if(rating == 2.5) {
            return(
                <Image 
                style = {styles.ratingIcone}
                source={require('../Images/six.png')}
             />
            )
        } else if(rating == 3){
            return(
                <Image 
                style = {styles.ratingIcone}
                source={require('../Images/sevenOne.png')}
             />
            )
        } else if(rating == 3.5){
            return(
                <Image 
                style = {styles.ratingIcone}
                source={require('../Images/seven.png')}
             />
            )
        } else if(rating == 4) {
            return(
                <Image 
                style = {styles.ratingIcone}
                source={require('../Images/eight.png')}
             />
            )
        } else if(rating == 4.5) {
            return(
                <Image 
                style = {styles.ratingIcone}
                source={require('../Images/nine.png')}
             />
            )
        } else if(rating == 5) {
            return(
                <Image 
                style = {styles.ratingIcone}
                source={require('../Images/ten.png')}
             />
            )
        } else {
            return(
                <Image 
                   style = {styles.ratingIcone}
                   source={require('../Images/one.png')}
                />
            )
        }

     }
    

    render() {
        const { id, title, imageLink, author, description, category, vote_average } = this.props.book
        const displayDetailForBook = this.props.displayDetailForBook
        return(
            <TouchableOpacity style={styles.main_container} onPress={() => displayDetailForBook(id, title, description, imageLink, author, category)}>
              <Image style={styles.image}

                source={{uri: imageLink}}
                />
              <View style={styles.content_container}>  
            
              <Text style={styles.title} >{title}</Text>
              {this._displayRating(vote_average)}
              <Text style={styles.category}>{category}</Text>
              <Text style={styles.author}>By {author}</Text>
               
              <View style={styles.description_container}>
              <Text style={styles.description_label}>Description:</Text>
              <Text style={styles.description} numberOfLines={2}>{description}</Text>
              </View>
          
            </View>   
           </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection: 'row',
        margin: 4,
        borderWidth: 0,
        borderRadius: 2,
   
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        
    },
    image: {
        width: 120,
        height: 200,
        backgroundColor:'#DEDEDE',
        margin: 10
        
    },
    content_container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    title: {
        fontSize: 16,
        width: 200,
        flex: 1,
        marginTop: 25,
        fontWeight: 'bold'
    },
    author: {
        fontSize: 17,
        color: '#000',
        fontWeight: 'bold'
    },
    description_label:{
        color: '#000',
        fontWeight:'bold',
        fontSize: 15
    },
    description: {
      fontSize:  17,
      marginBottom: 10
    },
    date: {
        color: 	'#AE9B07',
        fontWeight:'bold'
    },
    description_container: {
        marginBottom:12
    },
    category: {
        color: 	'#1A0000',
        fontWeight:'bold'
    },
    vote_average: {
        fontWeight: 'bold',
        fontSize:32,
        color:'#E60026'
    },
    ratingIcone: {
        marginBottom: 10
    }
})

export default BookMarkItem