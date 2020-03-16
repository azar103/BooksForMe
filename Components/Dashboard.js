import React from 'react'
import {FlatList, Text, View, StyleSheet, Image, Button, YellowBox} from 'react-native'
import { connect } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'
import * as firebase from 'firebase'
class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            books: []
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
                books: items.reverse()
            })
        })}

   _displayView(id){
        if(this.props.favoritesBooks.findIndex((item) => item.id === id && item.emailUser === firebase.auth().currentUser.email) !== -1){
         
            return(
               <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>

                <Image 
                style={styles.icone}  
                source={require('../Images/ic_favorite_border.png')}  
             />
                 </View>
            )
        } 
   }



    render() {
        return(
            <ScrollView style={styles.main_container}>
                <View style={{flex: 1}}>
                <View style={styles.section_header}>
                    <Text style={styles.title}>Top Pickes <Text style={styles.new_arrivals}>(New Arrivals)</Text></Text>                    
                </View>
                <FlatList
                         keyExtractor={(item) => item.id.toString()}
                         horizontal={true}
                         data={this.state.books.slice(0, 3)}                
                         renderItem={({item}) =><View style={{flex:1, flexDirection:'column'}}>
                             <Image style={styles.image} source={{uri: item.imageLink}} /> 
                             {this._displayView(item.id)} 
                            </View>
                            }          
                  />
                </View>
                {this.state.books.filter((item) => item.category === 'Fiction').length !== 0  ?
                <View style={{flex: 1}}>
                <View style={styles.section_header}>
                    <Text style={styles.title}><Text style={styles.title}>Fiction</Text></Text>                    
                </View>
                <FlatList
                         keyExtractor={(item) => item.id.toString()}
                         horizontal={true}
                         data={this.state.books.filter((item) => item.category === 'Fiction')}
                         renderItem={({item}) =><View style={{flex:1, flexDirection:'column'}}>
                             <Image style={styles.image} source={{uri: item.imageLink}} /> 
                             {this._displayView(item.id)} 
                            </View>
                            }          
                  />
                </View> : <View style={{flex: 1}}>
                <View style={styles.section_header}>
                    <Text style={styles.title}><Text style={styles.title}>Fiction</Text></Text>                    
                </View>
                <Text style={styles.message}>There is no Books Avalaible For this category</Text>
                </View>
                }
                {this.state.books.filter((item) => item.category === 'Drame' ).length !== 0  ?
                <View style={{flex: 1}}>
                <View style={styles.section_header}>
                    <Text style={styles.title}><Text style={styles.title}>Drame</Text></Text>                    
                </View>
                <FlatList
                         keyExtractor={(item) => item.id.toString()}
                         horizontal={true}
                         data={this.state.books.filter((item) => item.category === 'Drame')}
                         renderItem={({item}) =><View style={{flex:1, flexDirection:'column'}}>
                             <Image style={styles.image} source={{uri: item.imageLink}} /> 
                            
                             { this._displayView(item.id)} 
                            </View>
                            }          
                  />
                </View> : <View style={{flex: 1}}>
                <View style={styles.section_header}>
                    <Text style={styles.title}><Text style={styles.title}>Drame</Text></Text>                    
                </View>
                <Text style={styles.message}>There is no Books Avalaible For this category</Text>
                </View>
                }
               {this.state.books.filter((item) => item.category === 'Education') ?
                <View style={{flex: 1}}>
                <View style={styles.section_header}>
                    <Text style={styles.title}><Text style={styles.title}>Education</Text></Text>                    
                </View>
                <FlatList
                         keyExtractor={(item) => item.id.toString()}
                         horizontal={true}
                         data={this.state.books.filter((item) => item.category === 'Education')}
                         renderItem={({item}) =><View style={{flex:1, flexDirection:'column'}}>
                             <Image style={styles.image} source={{uri: item.imageLink}} /> 
                             { this._displayView(item.id)}
                            </View>
                            }          
                  />
                </View> : <View style={{flex: 1}}>
                <View style={styles.section_header}>
                    <Text style={styles.title}><Text style={styles.title}>Education</Text></Text>                    
                </View>
                <Text style={styles.message}>There is no Books Avalaible For this category</Text>
                </View>
                }
                {this.state.books.filter((item) => item.category === 'Horror').length !== 0  ?
                <View style={{flex: 1}}>
                <View style={styles.section_header}>
                    <Text style={styles.title}><Text style={styles.title}>Horror</Text></Text>                    
                </View>
                <FlatList
                         keyExtractor={(item) => item.id.toString()}
                         horizontal={true}
                         data={this.state.books.filter((item) => item.category === 'Horror')}
                         renderItem={({item}) =><View style={{flex:1, flexDirection:'column'}}>
                             <Image style={styles.image} source={{uri: item.imageLink}} /> 
                             {this._displayView(item.id)} 
                            </View>
                            }          
                  />
                </View> : <View style={{flex: 1}}>
                <View style={styles.section_header}>
                    <Text style={styles.title}><Text style={styles.title}>Horror</Text></Text>                    
                </View>
                <Text style={styles.message}>There is no Books Avalaible For this category</Text>
                </View>}
                {this.state.books.filter((item) => item.category === 'Romance').length !== 0  ?
                <View style={{flex: 1}}>
                <View style={styles.section_header}>
                    <Text style={styles.title}><Text style={styles.title}>Romance</Text></Text>                    
                </View>
                <FlatList
                         keyExtractor={(item) => item.id.toString()}
                         horizontal={true}
                         data={this.state.books.filter((item) => item.category === 'Romance')}
                         renderItem={({item}) =><View style={{flex:1, flexDirection:'column'}}>
                             <Image style={styles.image} source={{uri: item.imageLink}} /> 
                             {this._displayView(item.id)} 
                            </View>
                            }          
                  />
                </View> : <View style={{flex: 1}}>
                <View style={styles.section_header}>
                    <Text style={styles.title}><Text style={styles.title}>Romance</Text></Text>                    
                </View>
                <Text style={styles.message}>There is no Books Avalaible For this category</Text>
                </View>}
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#FFD700'
    },
    section_header: {
      
        height:60,
        justifyContent:'center',
        marginLeft: 5,
        marginRight: 5,
        marginTop:5
    },
    title: {
        fontWeight: 'bold',
        marginLeft: 10
    },
    image: {
        width: 200,
        height: 350,
        margin: 5
    },
    new_arrivals: {
        color: '#F00'
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
    message: {
        marginLeft:14 ,color: 'red'
    },
    icone: {
        height: 40,
        width: 40
    }
    
})

const mapStateToProps = (state) => {
    return {
        favoritesBooks: state.favoritesBooks
    }
}

export default connect(mapStateToProps)(Dashboard)