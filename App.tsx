import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/app/store'
import Ionicons from '@react-native-vector-icons/ionicons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { enableScreens } from 'react-native-screens'
import { View, Text } from 'react-native'

enableScreens()

// Screens
import JTCChai from './src/screens/JTCChai'
import CartScreen from './src/screens/cartScreen'
import CustomHeader from './src/components/CustomHeader'
import HomeScreen from './src/screens/homeScreen'
// Navigators
const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

// Dummy screens
const Explore = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Explore</Text>
  </View>
)

const Profile = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Profile</Text>
  </View>
)

//  Cart Stack 
function CartStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CartMain"
        component={CartScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

//  Main App
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>

        <Tab.Navigator
          screenOptions={({ route }) => ({
            header: () => <CustomHeader />,
          
            tabBarIcon: ({ focused, size }) => {
              let iconName = ''
          
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline'
              } 
              else if (route.name === 'Products') {
                iconName = focused ? 'cafe' : 'cafe-outline'
              } 
              else if (route.name === 'Explore') {
                iconName = focused ? 'search' : 'search-outline'
              } 
              else if (route.name === 'Cart') {
                iconName = focused ? 'cart' : 'cart-outline'
              } 
              else if (route.name === 'Profile') {
                iconName = focused ? 'person' : 'person-outline'
              }
          
              return (
                <Ionicons
                  name={iconName}
                  size={size}
                  color={focused ? '#5C3A21' : 'gray'}
                />
              )
            },

            tabBarActiveTintColor: '#5C3A21',
            tabBarInactiveTintColor: 'gray',
          
            tabBarLabelStyle: {
              fontWeight: '600'
            }
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Products" component={JTCChai} />
          <Tab.Screen name="Cart" component={CartStack} />
          <Tab.Screen name="Profile" component={Profile} />

        </Tab.Navigator>

      </NavigationContainer>
    </Provider>
  )
}