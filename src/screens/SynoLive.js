import React from 'react'
import { StyleSheet, View, Image, TextInput, Text } from "react-native"
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet'
import CupertinoButtonInfo from "../components/CupertinoButtonInfo"
import { Colors} from 'react-native/Libraries/NewAppScreen'
import styles from './styles'
let url = "https://meeting.syno.live/";
class VideoCall extends React.Component {
  
    constructor(props) {
        super(props)
        this.onConferenceTerminated = this.onConferenceTerminated.bind(this);
        this.onConferenceJoined = this.onConferenceJoined.bind(this);
        this.onConferenceWillJoin = this.onConferenceWillJoin.bind(this); 
    }
    componentDidMount() {
        this.startJitsi()
    }
     componentWillUnmount() {
        JitsiMeet.endCall()
    }
    onConferenceTerminated(nativeEvent) {
        this.props.navigation.navigate('home')
    }

    onConferenceJoined(nativeEvent) {
        /* Conference joined event */
    }

    onConferenceWillJoin(nativeEvent) {
        /* Conference will join event */
    }
    startJitsi=()=>{
        const { room } = this.props.navigation.state.params
        url = "https://conference.acudeapp.com/"+room
        setTimeout(() => {
            console.log(url)
            const   userInfo = { displayName: 'Paciente'}
            JitsiMeet.call(url, userInfo)
        }, 1000);
      /* You can also use JitsiMeet.audioCall(url) for audio only call */
      /* You can programmatically end the call with JitsiMeet.endCall() */
    }
  render() {
    return (
            <View style={{ backgroundColor: 'black',flex: 1 }}>
                <JitsiMeetView onConferenceTerminated={this.onConferenceTerminated} onConferenceJoined={this.onConferenceJoined} onConferenceWillJoin={this.onConferenceWillJoin} style={{ flex: 1, height: '100%', width: '100%' }} />
            </View>
    );
  }
} 

export default VideoCall;