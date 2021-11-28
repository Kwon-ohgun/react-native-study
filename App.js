import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Tab1Screen() {
  return (
    <View>
      <Text>스크린1</Text>
    </View>
  );
}

function Tab2Screen() {
  return (
    <View>
      <Text>스크린2</Text>
    </View>
  );
}

function Tab3Screen() {
  return (
    <View>
      <Text>스크린3</Text>
    </View>
  );
}

function Tab4Screen() {
  return (
    <View>
      <Text>스크린4</Text>
    </View>
  );
}

function Tab5Screen() {
  return (
    <View>
      <Text>스크린5</Text>
    </View>
  );
}

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
