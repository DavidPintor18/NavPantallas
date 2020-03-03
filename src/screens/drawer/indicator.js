/*
Autor:Pintor Aranda David Fecha:02/02/2020
Practica: ActivityIndicator/Switch
Materia:Desarrollo Movil Multiplataforma
Profesor:Hector Saldaña Benitez
*/
import React from 'react';
import {ActivityIndicator,StyleSheet,Text,View,Modal} from 'react-native';

function Indicator ({isVisible}) {
   
    return (
    <Modal
    visible={isVisible}   
    >
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#01C0ff" />
      </View>
    </Modal>
    )
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});
export default Indicator;