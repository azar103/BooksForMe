import React from 'react'
import { TextInput, View, Button, StyleSheet, Text } from 'react-native'
import FilmList from '../Components/FilmList'
import { connect } from 'react-redux'
class Favorites extends React.Component{
    render(){

        return(
             <FilmList
                films={this.props.favoritesFilm}
                navigation = {this.props.navigation}
                favoriteList= {true}
            />
        )
      }
    }


const mapStateToProps = (state) => {
    return {
        favoritesFilm: state.favoritesFilm
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 30
    }
})


export default  connect(mapStateToProps)(Favorites)