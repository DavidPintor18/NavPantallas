/*
Autor:Pintor Aranda David Fecha:02/02/2020
Practica: ActivityIndicator/Switch
Materia:Desarrollo Movil Multiplataforma
Profesor:Hector Saldaña Benitez
*/
import React, { Component } from 'react';
import { View, Text, Button, } from 'react-native';


import { styles } from './styles/styles';

class Inicio extends Component {

  render() {
    const navegar = this.props.navigation;
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Inicio</Text>
            <Button
                title='Iniciar Sesión'
                onPress={() => navegar.navigate('Inicio de sesión')}
              />
              <Text></Text>
             <Button
                title='Registrarse'
                onPress={() => navegar.navigate('Registro')}
              /> 
            
      </View>
    );
  }
}

export default Inicio;

