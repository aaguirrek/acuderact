import { StyleSheet} from "react-native"
import { Dimensions } from 'react-native';
const win = Dimensions.get('window');
export default  StyleSheet.create({
        container: {
            flex: 1
        },
        scrollArea: {
            width:win.width,
            height: win.height,
            marginTop: -40
        },
        scrollArea_contentContainerStyle: {
            height: win.height,
            width:win.width
        },
        rect: {
            top: 0,
            left: 0,
            width: win.width,
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
            marginLeft: win.width/2 - 87.5
        },
        rect2: {
            top: 260,
            left: win.width/2 - 155,
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
            color: "rgba(152,93,183,1)",
            textAlign: "center",
            marginTop: 12
        },
        rectStack: {
            width: window.width,
            height: 300
        },
        image2: {
            width: 245,
            height: 245,
            marginTop: 15,
            marginLeft: 68
        },
        textInput: {
            color: "#121212",
            height: 45,
            width: 306,
            backgroundColor: "rgba(230, 230, 230,1)",
            textAlign: "center", 
            borderRadius: 100,
            marginTop: 50,
            marginVertical:60,
            alignSelf: "center"
            
        },
        cupertinoButtonInfo: {
            marginTop: 50,
            marginVertical:50,
            width: 306,
            marginLeft:  win.width/2 - 205,
            alignSelf: "center"
        }
    });