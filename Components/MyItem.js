import  React from 'react'
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native'

class MyItem extends React.Component {
    constructor(props){
        super(props)
        
    }

    render() {
        const { id, title, imageLink, author, description, published_date, category, vote_average } = this.props.book
        const displayDetailForBook = this.props.displayDetailForBook
        return(
            <TouchableOpacity
                 style={styles.main_container}
                 onPress={() => displayDetailForBook(id, title, description, imageLink, published_date, author, category, vote_average)}
            >
                <Image style={styles.image}
                    source={{uri: imageLink}}
                    />
                <View style={styles.content_container}>  
                <View style={styles.title_author_container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.author}>By {author}</Text>
                </View> 
                <TouchableOpacity
                 onPress={() => this.props.deleteBook(id)}
                >
                <Image 
                  style={styles.icone}
                  source={require('../Images/trash.png')}
                  />
                  </TouchableOpacity>
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
        flexDirection: 'row',
        justifyContent:'center'
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
    },
    title_author_container: {
       flex: 1,
       flexDirection:'column'
    },
    icone: {
        width:40,
        height:40,
        marginTop:35
    }
    

})
export default MyItem
