import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as firebase from 'firebase'

class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user: null
        }
    }


    _navigateToCollections(){
        this.props.navigation.navigate("Favorites")
    }

    _navigateToCreateBook = () => {
        this.props.navigation.navigate("CreateBook")
    }
    
    _navigateToRequestedBooks = () => {
        this.props.navigation.navigate("RequestedBooks")
    }

    _logout = () => {
        firebase.auth().signOut().then(() => this.props.navigation.navigate("Login"))
                                 .catch((error) => console.log({error}))
    }

    _navigateToMyFavoritesBooks = () => {
        this.props.navigation.navigate("FavoritesBooks")
    }
    
    render() {
        var user = firebase.auth().currentUser;
        return(
            <View style={styles.main_container}>
                
                <View style={styles.coordinates_container}>
             
                <Text style={styles.coordinates_address}>{user.email}</Text>    
                </View>

                <TouchableOpacity 
                  style = {styles.button} 
                  onPress={() => this._navigateToRequestedBooks()}
                  activeOpacity={.7}                                    
                       >
                   <Text style={styles.text}>My Requested Books</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style = {styles.button} 
                  activeOpacity={.7} 
                  onPress={() => this._navigateToCreateBook()}                                   
                       >
                   <Text style={styles.text}>Add Book</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                   activeOpacity={.7}
                   onPress={() => this._navigateToMyFavoritesBooks()}
                >
                <Text style={styles.text} >My Favorites Books</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                   activeOpacity={.7}
                   onPress={() => this._logout()}
                >
                <Text style={styles.text} >Logout</Text>
                </TouchableOpacity>
             
            </View>


        )
    }
}


const styles = StyleSheet.create({
       main_container: {
           flex: 1,
           flexDirection:'column',
           alignItems: 'center'      
       },
       image_profile: {
           backgroundColor: 'gray',
           borderRadius: 80,
           width: 120,
           height: 120,
           marginTop: 14
       },
       button: {
           marginTop:10,
           width:300,
           borderRadius:20,
           backgroundColor:'#FFD700',
           padding: 20
       },
       coordinates_name: {
           color: 'gray',
           fontWeight:'bold',
           fontSize:30
       },
       coordinates_address: {
        color: 'gray',
        fontWeight:'bold',
        fontSize:20,
        marginTop: 10
    },
       coordinates_container: {
           flex: 1,
           alignItems:'center'
       },
       text: {
           color: '#000',
           textAlign:'center',
           fontWeight:'bold'
       }

})

export default Profile