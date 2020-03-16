import React from 'react'
import { createAppContainer} from 'react-navigation'
import { createBottomTabNavigator  } from 'react-navigation-tabs'
import { createStackNavigator} from 'react-navigation-stack'
import {StyleSheet, Image} from 'react-native'
import Search from '../Components/Search'
import Dashboard from '../Components/Dashboard'
import BookMark from '../Components/BookMark'
import Profile from '../Components/Profile'
import Login from '../Components/Login'
import SignUp from '../Components/SignUp'
import BookDetail from '../Components/BookDetail'
import CreateBook from '../Components/CreateBook'
import RequestedBooks from '../Components/RequestedBooks'
import FavoritesBooks from '../Components/FavoritesBooks'

const DashBoardStackNavigator = createStackNavigator({
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            title: 'Dashboard'
        }
    }
})

const BookMarkStackNavigator = createStackNavigator({
    BookMark: {
        screen: BookMark,
        navigationOptions: {
            title: 'BookMark'
        }
    },
    BookDetail: {
        screen: BookDetail,
        navigationOptions: {
            title: 'BookDetail'
        }
    }
})

const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Search'
        }
    },
    BookDetail: {
        screen: BookDetail,
        navigationOptions: {
            title: 'BookDetail'
        }
    }
})


const ProfileStackNavigator = createStackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: {
            title: 'Profile'
        }
    },
    FavoritesBooks: {
        screen: FavoritesBooks,
        navigationOptions: {
            title: 'My Collections'
        }
    },
    BookDetail: {
        screen: BookDetail,
        navigationOptions: {
            title: 'BookDetail'
        }
    },
    CreateBook: {
        screen: CreateBook,
        navigationOptions: {
            title: 'Create Book'
        }
    },
    RequestedBooks: {
        screen: RequestedBooks,
        navigationOptions: {
            title: 'My Requested Books'
        }
    },
    FavoritesBooks: {
        screen: FavoritesBooks,
        navigationOptions: {
            title: 'My FavoritesBooks'
        }
    }

})
const BooksTabNavigator = createBottomTabNavigator({
    Dashboard: {
        screen: DashBoardStackNavigator,
        navigationOptions: {
            tabBarIcon: () => {return <Image 
               source={require('../Images/ic_home.png')}
               style={styles.icon}      
            />}
        }
    },
    Search: {
        screen: SearchStackNavigator,
        navigationOptions: {
            tabBarIcon: () => {
                return <Image 
                     source={require('../Images/ic_search.png')}
                     style={styles.icon}
                />
            }
        }
    },
    BookMark: {
        screen: BookMarkStackNavigator,
        navigationOptions: {
            tabBarIcon: () => {
                return <Image 
                     source={require('../Images/ic_bookmark.png')}
                     style={styles.icon}
                />
            }
        }
    },
    
    Profile: {
        screen: ProfileStackNavigator,
        navigationOptions: {
            tabBarIcon: () => {
                return <Image 
                     source={require('../Images/ic_profile.png')}
                     style={styles.icon}
                />
            }
        }
    },

},


    {
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            activeBackgroundColor: '#DDDDDD',
            inactiveBackgroundColor: '#FFFFFF',
            HeaderBackground: '#FCC708'
        }
    }
)
const LoginStackNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false
        }
 
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: 'SignUp',

        }
    },
    Dashboard: {
        screen: BooksTabNavigator,
        navigationOptions: {
            header: null

        }
    },

    

},
{
    initialRouteName: 'Login'
})

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})
export default createAppContainer(LoginStackNavigator)