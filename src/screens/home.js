import React, { Component } from "react"
import {  ScrollView, Button, View, Image, TextInput, Text } from "react-native"
import styles from "./styles"
class Home extends Component{
  constructor(props){
    super(props)
    this.state={
      meeting:""
    }
  }
  onMeetingChange = (meeting) =>{
    this.setState({meeting:meeting})
  }
  startMeet = () =>{
    const meeting= this.state.meeting
    if(meeting.length > 4){
      this.props.navigation.navigate('syno', {room:meeting})

    }
  }
  render (){
    const {meeting} = this.state
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
                source={require("./logo_blanco.png")}
                resizeMode="contain"
                style={styles.image}
              ></Image>
            </View>
            <View style={styles.rect2}>
              <Text style={styles.consultorioVirtual}>Consultorio Virtual</Text>
            </View>
          </View>
          <Image
            source={require("./landing.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <TextInput
            placeholder="Ingresa el código de acceso"
            autoCorrect={false}
            blurOnSubmit={true}
            textBreakStrategy="highQuality"
            style={styles.textInput}
            onChangeText={this.onMeetingChange}
          ></TextInput>

          <Button
            style={styles.cupertinoButtonInfo}
            title="Ingresa la cita en línea"
            onPress={this.startMeet}
          />
        </ScrollView>
      </View>
    </View>
    );
  }
}

export default Home