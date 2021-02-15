import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  TextInput
} from "react-native";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.rectStack}>
            <View style={styles.rect}>
              <Image
                source={require("../assets/images/logo_blanco@4x.png")}
                resizeMode="contain"
                style={styles.image}
              ></Image>
            </View>
            <View style={styles.rect2}>
              <Text style={styles.consultorioVirtual}>Consultorio Virtual</Text>
            </View>
          </View>
          <Image
            source={require("../assets/images/landing@4x.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <TextInput
            placeholder="Ingresa el código de acceso"
            autoCorrect={false}
            blurOnSubmit={true}
            textBreakStrategy="highQuality"
            style={styles.textInput}
          ></TextInput>
          <CupertinoButtonInfo
            entrar="Ingresa la cita en línea"
            style={styles.cupertinoButtonInfo}
          ></CupertinoButtonInfo>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollArea: {
    width: 375,
    height: 724,
    marginTop: -40
  },
  scrollArea_contentContainerStyle: {
    height: 724,
    width: 375
  },
  rect: {
    top: 0,
    left: 0,
    width: 375,
    height: 280,
    position: "absolute",
    backgroundColor: "rgba(24,221,208,1)",
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35
  },
  image: {
    width: 175,
    height: 110,
    marginTop: 120,
    marginLeft: 108
  },
  rect2: {
    top: 260,
    left: 34,
    width: 306,
    height: 40,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.29,
    shadowRadius: 10
  },
  consultorioVirtual: {
    fontFamily: "roboto-regular",
    color: "rgba(152,93,183,1)",
    textAlign: "center",
    marginTop: 12,
    marginLeft: 99
  },
  rectStack: {
    width: 375,
    height: 300
  },
  image2: {
    width: 245,
    height: 245,
    marginTop: 15,
    marginLeft: 68
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 45,
    width: 301,
    backgroundColor: "rgba(230, 230, 230,1)",
    textAlign: "center",
    borderRadius: 100,
    marginTop: 50,
    alignSelf: "center"
  },
  cupertinoButtonInfo: {
    height: 44,
    width: 301,
    marginTop: 25,
    marginLeft: 37,
    alignSelf: "center"
  }
});

export default Untitled;
