import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from './screens/Tab1Screen';
import Tab2Screen from './screens/Tab2Screen';
import Tab3Screen from './screens/Tab3Screen';
import Tab4Screen from './screens/Tab4Screen';
import Tab5Screen from './screens/Tab5Screen';
import Tab1Detail from './screens/Tab1Detail';

const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Tab1">
      <BottomTab.Screen
        name="Tab1"
        component={Tab1Screen}
        options={{
          title: '받은 요청',
          tabBarLabel: '받은 요청',
          headerTitleAlign: 'center'
        }}
      />
      <BottomTab.Screen
        name="Tab2"
        component={Tab2Screen}
        options={{
          title: '바로 견적',
          tabBarLabel: '바로 견적',
          headerTitleAlign: 'center'
        }}
      />
      <BottomTab.Screen
        name="Tab3"
        component={Tab3Screen}
        options={{
          title: '채팅',
          tabBarLabel: '채팅',
          headerTitleAlign: 'center'
        }}
      />
      <BottomTab.Screen
        name="Tab4"
        component={Tab4Screen}
        options={{
          title: '프로필',
          tabBarLabel: '프로필',
          headerTitleAlign: 'center'
        }}
      />
      <BottomTab.Screen
        name="Tab5"
        component={Tab5Screen}
        options={{
          title: '마이페이지',
          tabBarLabel: '마이페이지',
          headerTitleAlign: 'center'
        }}
      />
    </BottomTab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Tab1Detail" component={Tab1Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
