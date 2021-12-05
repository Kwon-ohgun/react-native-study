import React from 'react';
import { Button, View } from 'react-native';

export default function Tab2Screen({ navigation }) {
  return (
    <View>
      <Button
        title="Open Modal1"
        onPress={() => navigation.navigate('Modal1')}
      />
    </View>
  );
}