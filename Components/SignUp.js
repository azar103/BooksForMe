import React from 'react'
import { View, Text, StyleSheet, YellowBox } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import * as firebase from 'firebase'
import md5 from 'md5'


class SignUp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            emailError: '',
            loginError: '',
            passwordError: ''
        }
        YellowBox.ignoreWarnings(['Setting a timer']);
    }
    
  
    
   
    emailValidtor(){
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

    passwordValidtor(){
        if(this.state.password == ''){
            this.setState({
                passwordError: 'password field cannot be empty'
            })
        }
        else if(this.state.password === this.state.confirmPassword){
            this.setState({
                passwordError: 'password does not match'
            })
        }
        else {
            this.setState({
                passwordError: ''
            })
        }
    }
 
   

    _handleChangeEmail(text){

        this.setState({
            email: text
        })
    }
    _handleChangePassword(text) {
        this.setState({
            password: text
        })
    }

    _handleChangeConfirmPassword(text) {
        this.setState({
           confirmPassword: text
        })
    }

 


    saveUser(email, password) {
        if(email !== '' && password !== ''){
            if(password === this.state.confirmPassword){
                firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
                    console.log('The User is added !')
                    this.props.navigation.navigate("Login")
                }).catch(() => this.setState({error : 'SignUp Failed'}))
            } else {
                alert('Passwords not matched')
            }   
        }
        else if(login == '' && email == ''&& password == '' && this.state.confirmPassword == '' ) {
            alert('empty fields')
        }
        
    }
    render() {  
        return(
            <View style={styles.main_container}>
            <View 
                style={styles.input_block}
               
            >
            
             <TextInput 
             style={styles.input}
             placeholder={'Email'}
             onBlur={() => this.emailValidtor()}
             placeholderTextColor='#808080'
             value={this.state.email}
             textContentType='emailAddress'
             onChangeText={(text) => this._handleChangeEmail(text)}
            />
            <Text style={styles.error}>{this.state.emailError}</Text>
            <TextInput
             style={styles.input}
             placeholder={'Password'}
             placeholderTextColor='#808080'
             secureTextEntry={true}
             value={this.state.password}
             onBlur={()=> this.passwordValidtor()}
             onChangeText={(text) => this._handleChangePassword(text)}
            />
            <Text style={styles.error}>{this.state.passwordError}</Text>
            <TextInput 
             style={styles.input}
             secureTextEntry={true}
             placeholder={'Confirm Password'}
             placeholderTextColor='#808080'
             onChangeText={(text) => this._handleChangeConfirmPassword(text)}
             onBlur={()=> this.passwordValidtor()}
            />
                <Text style={styles.error}>{this.state.passwordError}</Text>

            </View>
            <TouchableOpacity style={styles.button}
                     onPress={() => {this.saveUser(this.state.email, this.state.password)}}
                     activeOpacity={0.8}
                     style={styles.button_signup}
                   >
                <Text style={styles.text}>Submit</Text>
             </TouchableOpacity>
             <View style={{flex: 1, flexDirection:'row', marginTop: 40}}>
                <Text style={{color: '#000'}}>Already have an account? </Text>
                <Text style={{fontWeight:'bold'}} onPress={() => this.props.navigation.navigate("Login")}>SignIn</Text>
                </View> 
            </View>

            
        ) 
    }
}


const styles = StyleSheet.create({
       main_container: {
           flex: 1,
           alignItems:'center'
       },
       input: {
        marginLeft: 5,
        marginEnd: 5,
        borderWidth: 1,
        borderRadius: 5.5,
        borderColor: '#000',
        marginTop:3,
        width: 210,
        padding: 4,
        backgroundColor:'#FFF'
    },  
    input_block: {
        marginTop:24
    },
    button_signup: {
        backgroundColor:'#FFD700',
        width:205,
        borderRadius:10,
        padding: 10,
        alignItems:'center',
        marginTop: 5
    },
    error: {
        color: 'red',
        marginLeft: 7
    }
})

export default SignUp