import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function Untitled1(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Recurso_1.png")}
        resizeMode="contain"
        style={styles.image1}
      ></Image>
      <Text style={styles.loremIpsum}>
        Ingresando a su cita en línea{"\n"}Por favor espere...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image1: {
    width: 200,
    height: 200,
    marginTop: 118,
    alignSelf: "center"
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(80,80,80,1)",
    fontSize: 20,
    textAlign: "center",
    marginTop: 127,
    alignSelf: "center"
  }
});

export default Untitled1;
