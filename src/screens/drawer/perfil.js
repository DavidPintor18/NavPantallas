import React, { Component } from 'react';
import { View, Text, Button,ActivityIndicator,Switch, } from 'react-native';
import {CardItem} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';


import { styles } from '../../styles/styles';

class Perfil extends Component {

  
  state = {switch1Value:false}



  toggleSwitch1=(value) => {
    this.setState({switch1Value:value})
    console.log('Switch 1 is: '+value)
  }

  render() {
    const navegar = this.props.navigation;
    return (
      <View style={styles.center}>
        <Text style={styles.title}>¡Hola, {this.props.route.params.usuario}!</Text>
        <Text style={styles.title}>Tu contraseña es: {this.props.route.params.contra}</Text>
        <Button
                title='Aceptar'
                onPress={() => navegar.navigate('Inicio de sesión')}
              /> 
  
            <Switch onValueChange = {this.toggleSwitch1} value={this.state.switch1Value}/>
          <Text>{this.state.switch1Value ?'Prendido':'Apagado'}</Text>
          
            
      </View>
    );
  }
}

export default Perfil;

