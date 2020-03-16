import React from 'react'
import { FlatList } from 'react-native'
import FilmItem from './FilmItem'
import {connect} from 'react-redux'
class FilmList extends React.Component{
    constructor(props){
        super(props)
    }
    _displayDetailForFilm = (id) => {
        this.props.navigation.navigate("FilmDetail", { idFilm: id})
      }
   render(){
       return (
        <FlatList
        data={this.props.films}
        extraData={this.props.favoritesFilm}
        keyExtractor={(item) => item.id.toString()}
        renderItem={
             ({item}) =>
             <FilmItem 
             film={item}
             displayDetailForFilm = {this._displayDetailForFilm}
             isFilmFavorite={this.props.favoritesFilm.findIndex(film => film.id === item.id)!== -1? true : false }
        />}
        onEndReachedThreshold={0.5}
        onEndReached={()=>{
          if(this.props.page<this.props.totalPages && !this.props.favoriteList){
            this.props.loadFilms()
          }
        }}
    />
       )
   }
}

const mapStateToProps  = (state) => {
    return {
        favoritesFilm: state.favoritesFilm
    }
}
export default connect(mapStateToProps)(FilmList)