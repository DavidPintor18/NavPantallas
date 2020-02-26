
import React, { Component } from "react";
import { Container, View, Content, Card, CardItem, Text, Body, Button, Item, Label, Input, Icon } from "native-base";


import {
  StyleSheet,
} from 'react-native';



class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {usuario: '', contra: ''};
  }

  render(){
  const navegar = this.props.navigation;
  return (
    <>
    
       <Container>
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered style= {misEstilos.arribaTexto}>
  <Text style = {misEstilos.textCenter} >Login</Text>
            </CardItem>
            <CardItem>
              <Body style = {misEstilos.body}>
                  <Item lineLabel>
                     <Icon type = 'FontAwesome' name = 'user'></Icon>
                      <Input type="text" 
                            placeholder="Usuario"
                            value= {this.state.usuario}
                            onChangeText= {(usuario) => this.setState({usuario})}
                      />

                  </Item>
            
                  <Item lineLabel>
                    <Icon type = 'FontAwesome' name = 'lock'></Icon>
                    <Input type="text" placeholder = 'Constraseña' 
                          value= {this.state.contra}
                          onChangeText= {(contra) => this.setState({contra})}/>
                  </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered style = { misEstilos.pie}>
            <Button style = { loginButton.loginButton} onPress={() => navegar.navigate('Perfil', {contra: this.state.contra, usuario: this.state.usuario})} ><Text> Iniciar Sesión </Text></Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
     
      
    </>
  );
}
}


const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  
  },

  textCenter: {
    textAlign: 'center',
    width: '100%',
    color: 'white'
  },

  pie: {
    justifyContent: 'center',
    
  },

  centrar: {
    flex: 1,
    marginLeft: '50%',
    justifyContent: 'center'
  },

  body: {
    paddingVertical: 35,
  },

  arribaTexto: {
    backgroundColor: '#2874A6'
  },

  abajoDatos: {
  }
});


const loginButton = StyleSheet.create({
  loginButton: {
    width: '100%',
    height: '135%',
    justifyContent: 'center',
    alignItems: 'center',
 }
});

export default Login;