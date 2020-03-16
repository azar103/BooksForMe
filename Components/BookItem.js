import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


class BookItem extends React.Component {
    constructor(props){
        super(props)
    }
    
    render() {
        console.log(this.props.book)
        const {id,  title, imageLink, author, description, emailUser, category, vote_average} = this.props.book
        const displayDetailForBook = this.props.displayDetailForBook
        return(
            <TouchableOpacity
                 style={styles.main_container}
                 onPress={() => displayDetailForBook(id, title, description, imageLink, author, category, vote_average, emailUser)}
            >
                <Image style={styles.image}
                    source={{uri: imageLink}}
                    />
                <View style={styles.content_container}>   
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.author}>By {author}</Text>
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
        borderColor: '#D0D0D0',
        borderBottomWidth: 0,
 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        
    },
    image: {
        padding: 3,
        width: 80,
        height: 90,
        backgroundColor:'#DEDEDE',
        margin: 20
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
        marginTop: 20,
        fontWeight:'bold'
    },
    author: {
        fontSize: 17,
        color: 	'#AE9B07',
        fontWeight:'bold',
        marginBottom: 30
    }
    

})



export default BookItem