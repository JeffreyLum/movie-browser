import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ScreenOne from '../Screens/ScreenOne'
import ScreenTwo from '../Screens/ScreenTwo'
import ScreenThree from '../Screens/ScreenThree'
import QuickSearchScreen from '../Screens/QuickSearchScreen'

// header styles: https://reactnavigation.org/docs/stack-navigator/

const Stack = createStackNavigator()


function HomeScreenStack() {

    return (
        <Stack.Navigator>

            <Stack.Screen name='ScreenOne' component={ScreenOne}
                options={{
                    title: 'Movie Browser',

                    headerTransparent: true,

                    headerShown: true,

                    headerTitleAlign: 'center',

                    headerStyle: {
                        backgroundColor: '#0C2D48',
                    },

                    headerTitleStyle: {
                        color: '#B1D4E0'
                    },
                }} />

            <Stack.Screen name='ScreenTwo' component={ScreenTwo}
                options={{
                    title: 'Search Results',

                    headerTransparent: false,

                    headerStyle: {
                        backgroundColor: '#0C2D48'
                    },

                    headerTitleStyle: {
                        color: '#B1D4E0'
                    },
                }} />

            <Stack.Screen name='ScreenThree' component={ScreenThree} options={{
                title: 'Movie Details',

                headerTransparent: true,

                headerTitleStyle: {
                    color: '#B1D4E0'
                },
            }} />

            <Stack.Screen name='QuickSearchScreen' component={QuickSearchScreen} options={{
                title: 'Movie Details',

                headerTransparent: true,

                headerTitleStyle: {
                    color: '#B1D4E0'
                },
            }} />


        </Stack.Navigator>
    )
}

export { HomeScreenStack }