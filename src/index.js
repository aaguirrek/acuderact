import React from 'react'
import { createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from './screens/home'
import Syno from './screens/SynoLive'
const SynoNavigator = createStackNavigator(
    {
        home:Home,
        syno:Syno
    },
    {
        headerShown:false,
        initialRouteName: 'syno',
        defaultNavigationOptions: {headerShown:false}
        
    })
export default createAppContainer(SynoNavigator)