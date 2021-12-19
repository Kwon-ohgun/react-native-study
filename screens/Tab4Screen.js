import React from 'react';
import { Text, View } from 'react-native';

export default function Tab4Screen() {
  return (
    <View name="wrap" style={{flexDirection: 'row'}}>
      <View name="nav" style={{flex: 0}}>
        <Text>⛪</Text>
        <Text>🎡</Text>
        <Text>🎠</Text>
        <Text>🎮</Text>
        <Text>📷</Text>
        <Text>📼</Text>
      </View>
      <View name="section" style={{flex: 1}}>
        <View name="header" style={{flexDirection: 'row'}}>
          <Text name="home" style={{flex: 1}}>⛪</Text>
          <Text style={{flex: 1}}>🤖</Text>
        </View>
        <View name="contents" style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Home</Text>
        </View>
      </View>
    </View>
  );
}