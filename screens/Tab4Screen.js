import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row'
  },
  nav: {
    // flex: 0,  // `flex: 0`은 web에서 영역이 할당 안 될 수 있으므로 주석 처리 한다.
    borderRightColor: 'lightgray',
    borderRightWidth: 1
  },
  section: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1
  },
  home: {
    flex: 1
  },
  contents: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    margin: 16,
    fontSize: 16
  }
});

export default function Tab4Screen() {
  return (
    <View name="wrap" style={styles.wrap}>
      <View name="nav" style={styles.nav}>
        <Text style={styles.icon}>⛪</Text>
        <Text style={styles.icon}t>🎡</Text>
        <Text style={styles.icon}>🎠</Text>
        <Text style={styles.icon}>🎮</Text>
        <Text style={styles.icon}>📷</Text>
        <Text style={styles.icon}>📼</Text>
      </View>
      <View name="section" style={styles.section}>
        <View name="header" style={styles.header}>
          <Text name="home" style={[styles.home, styles.icon]}>⛪</Text>
          <Text style={styles.icon}>🤖</Text>
        </View>
        <View name="contents" style={styles.contents}>
          <Text>Home</Text>
        </View>
      </View>
    </View>
  );
}