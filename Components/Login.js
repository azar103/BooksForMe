import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import * as firebase from 'firebase'
class Login extends React.Component {
     constructor(props){
         super(props)
         this.state={
             email: '',
             password: '',
             emailError: '',
             passwordError: ''
         }
     }



     _navigateToSignUp = () => {
        this.props.navigation.navigate("SignUp")
     }
      
      
       
    
     _handleLogin = () => {
        const { email, password } = this.state
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => this.props.navigation.navigate('Dashboard'))
          .catch(() => alert('SignIn failed'))
     }
     emailValidtor = () => {
        if(this.state.email == ''){
            this.setState({
                emailError: 'email field cannot be empty'
            })
        }else {
            this.setState({
                emailError: ''
            })
        }
    }
    _handleChangeEmail = (text) =>{
         this.setState({
             email: text
         })
    }

    _handleChangePassword = (text) => {
        this.setState({
            password: text
        })
    }

    passwordValidtor = () =>{
        if(this.state.password == ''){
            this.setState({
                passwordError: 'password field cannot be empty'
            })
        }
        else {
            this.setState({
                passwordError: ''
            })
        }
    }


     render(){
         return(
             <View style={styles.main_container}>
                   <Image 
                      source={require('../Images/ic_books.png')}
                      style={styles.icone}
                   /> 
                   <Text 
                   style={{fontWeight:'bold', fontSize:20}}
                   >
                       Welcome to Book4Me
                   </Text>
                   <View style={styles.input_block}
                   >
                   <TextInput 
                    style={styles.input}
                    placeholder='Email' 
                    placeholderTextColor='#808080'
                    keyboardType='email-address'
                    onBlur={() => this.emailValidtor()}
                    onChangeText={(text) => this._handleChangeEmail(text)}
                   />
                     <Text style={styles.error}>{this.state.emailError}</Text>
                    <TextInput 
                    style={styles.input}
                    placeholder='Password'
                    placeholderTextColor='#808080'
                    secureTextEntry={true}
                    onBlur={() => this.passwordValidtor()}
                    onChangeText={(text)=>this._handleChangePassword(text)}
                   />
                     <Text style={styles.error}>{this.state.passwordError}</Text>
                   </View>
                   <TouchableOpacity style={styles.button}           
                   activeOpacity={0.8}
                   onPress={this._handleLogin}
                   >
                <Text style={styles.text} >Login</Text>
                </TouchableOpacity>       

                <View style={{flex: 1, flexDirection:'row', marginTop: 40}}>

                <Text style={{color: '#000'}}>Don't have an account yet? </Text>
                <Text style={{fontWeight:'bold'}} onPress={() => this.props.navigation.navigate("SignUp")}>SignUp</Text>
                
                </View> 
                </View>
         )
     }
}


const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
       backgroundColor:'#FFD700'
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
        marginTop:95
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
    textFacebook: {
        fontWeight:'bold',
        color:'#FFF'
    },
    error: {
        color: 'red',
        marginLeft: 11,
        
    }
})

export default Login