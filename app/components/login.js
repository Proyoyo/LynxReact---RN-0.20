'use strict';

import React, {
    StyleSheet,
    Component,
    Text,
    Platform,
    View,
    TextInput,
    TouchableHighlight
} from 'react-native';
var Button = require('react-native-button');

var login = '';
var password = '';

class LoginPage extends Component {

  constructor(props) {
    super(props);

    // Early binding
    this.onLoginPressed = this.onLoginPressed.bind(this)
    this.onSignUpPressed = this.onSignUpPressed.bind(this)
  //  this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  //  this.componentWillMount = this.componentWillMount.bind(this)
  }

  componentWillMount() {
    console.log("CHECKING LOGIN");
    // if(this.props.state.user._id !== undefined) {
    //   this.props.navActions.myAccount();
    // }
  }

  onLoginPressed() {
      console.log(login);
      console.log(password);
      this.props.actions.doLogin({'login': login, 'password': password});
      //this.props.navActions.account();

  }

  onSignUpPressed() {
    this.props.navActions.signup();
  }

  onLoginTextChanged(event) {
    login = event.nativeEvent.text;
  }

  onPasswordTextChanged(event) {
    password = event.nativeEvent.text;
  }


  componentWillReceiveProps(props) {
      if(props.user._id && props.routerState.length == 2) {
        props.navActions.account();
      }
  }


  render(){
        var Actions = this.props.routes;
        var account = this.props.accountState;

        return (
            <View style={styles.container}>

                  <Text style={styles.error}>{account.error ? account.error : ''}</Text>
                  <View style={styles.inputContainer}>
                      <TextInput
                          autoCapitalize='none'
                          style={styles.textInput}
                          onChange={this.onLoginTextChanged}
                          placeholder="Login"/>
                  </View>
                  <View style={styles.inputContainer}>
                      <TextInput
                          style={styles.textInput}
                          autoCapitalize='none'
                          secureTextEntry={true}
                          onChange={this.onPasswordTextChanged}
                          placeholder="Password"/>
                  </View>

                  <View style = {styles.buttonRow} >
                    <TouchableHighlight style = {styles.button}
                               underlayColor = '#ffc266'
                               onPress = {this.onLoginPressed}>
                               <Text style = {styles.buttonText}>Login</Text>
                     </TouchableHighlight>

                     <TouchableHighlight style = {styles.buttonOther}
                                underlayColor = '#ffc266'
                                onPress = {this.onSignUpPressed}>
                                <Text style = {styles.buttonOtherText}>Sign Up</Text>
                      </TouchableHighlight>
                  </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: (Platform.OS ==='ios') ? 80 : 120,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    inputContainer: {
      // marginTop:80,
      flexDirection:'row',
      alignItems: 'center',
      alignSelf:'stretch'
    },
    error: {
      color: "red"
    },
    textInput: {
      flex: 1,
      height: 36,
      padding: 4,
      margin : 10,
      fontSize: 18,
      color: 'gray',
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 8,
      backgroundColor: '#fff5e6'
    },
    buttonRow: {
      flexDirection: 'row',
      alignSelf: 'stretch',
    },
    button: {
      flex: 1,
       height: 36,
       backgroundColor: '#ff9900',
       borderColor: '#F90',
       borderWidth: 1,
       borderRadius: 8,
       margin: 10,
       alignSelf: 'stretch',
       justifyContent: 'center'
   },
   buttonOther: {
     flex: 1,
      height: 36,
      backgroundColor: '#FFF',
      borderColor: '#F90',
      borderWidth: 1,
      borderRadius: 8,
      margin: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
   },
   buttonText: {
          fontSize: 18,
          color: 'white',
          alignSelf: 'center'
    },
  buttonOtherText: {
         fontSize: 18,
         color: '#F90',
         alignSelf: 'center'
     },
});


module.exports = LoginPage
