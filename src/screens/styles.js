import { StyleSheet} from "react-native"
export default  StyleSheet.create({
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