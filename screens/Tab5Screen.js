import React from 'react';
import { Text, View, ScrollView, Pressable, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  thead: {
    margin: 16,
    marginBottom: 0,
    paddingBottom: 16,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1
  },
  tbody: {
    margin: 16
  },
  row: {
    flexDirection: 'row',
    margin: 16,
  },
  column: {
    flex: 1,
    textAlign:'center'
  }

});

export default function Tab5Screen() {
  return (
    <>
      <View name="thead" style={styles.thead}>
        <View style={styles.row}>
          <Text style={styles.column}>이름</Text>
          <Text style={styles.column}>나이</Text>
          <Text style={styles.column}>수정</Text>
          <Text style={styles.column}>삭제</Text>
        </View>
      </View>
      <ScrollView name="tbody" style={styles.tbody}>
        <View style={styles.row}>
          <Text style={styles.column}>홍길동</Text>
          <Text style={styles.column}>39</Text>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.column, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.column, { color: '#EA4335'}]}
            />
          </Pressable>
        </View>
        <View style={styles.row}>
          <Text style={styles.column}>홍길동</Text>
          <Text style={styles.column}>39</Text>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.column, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.column, { color: '#EA4335'}]}
            />
          </Pressable>
        </View>
        <View style={styles.row}>
          <Text style={styles.column}>홍길동</Text>
          <Text style={styles.column}>39</Text>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.column, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.column, { color: '#EA4335'}]}
            />
          </Pressable>
        </View>
        <View style={styles.row}>
          <Text style={styles.column}>홍길동</Text>
          <Text style={styles.column}>39</Text>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.column, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.column, { color: '#EA4335'}]}
            />
          </Pressable>
        </View>
        <View style={styles.row}>
          <Text style={styles.column}>홍길동</Text>
          <Text style={styles.column}>39</Text>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.column, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.column, { color: '#EA4335'}]}
            />
          </Pressable>
        </View>
        <View style={styles.row}>
          <Text style={styles.column}>홍길동</Text>
          <Text style={styles.column}>39</Text>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.column, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.column, { color: '#EA4335'}]}
            />
          </Pressable>
        </View>
        <View style={styles.row}>
          <Text style={styles.column}>홍길동</Text>
          <Text style={styles.column}>39</Text>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.column, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.column, { color: '#EA4335'}]}
            />
          </Pressable>
        </View>
        <View style={styles.row}>
          <Text style={styles.column}>홍길동</Text>
          <Text style={styles.column}>39</Text>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.column, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.column, { color: '#EA4335'}]}
            />
          </Pressable>
        </View>
        <View style={styles.row}>
          <Text style={styles.column}>홍길동</Text>
          <Text style={styles.column}>39</Text>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.column, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.column, { color: '#EA4335'}]}
            />
          </Pressable>
        </View>
        <View style={styles.row}>
          <Text style={styles.column}>홍길동</Text>
          <Text style={styles.column}>39</Text>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.column, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.column, { color: '#EA4335'}]}
            />
          </Pressable>
        </View>
        <View style={styles.row}>
          <Text style={styles.column}>홍길동</Text>
          <Text style={styles.column}>39</Text>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.column, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.column, { color: '#EA4335'}]}
            />
          </Pressable>
        </View>
        <View style={styles.row}>
          <Text style={styles.column}>홍길동</Text>
          <Text style={styles.column}>39</Text>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.column, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.column, { color: '#EA4335'}]}
            />
          </Pressable>
        </View>
        <View style={styles.row}>
          <Text style={styles.column}>홍길동</Text>
          <Text style={styles.column}>39</Text>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.column, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.column, { color: '#EA4335'}]}
            />
          </Pressable>
        </View>
        <View style={styles.row}>
          <Text style={styles.column}>홍길동</Text>
          <Text style={styles.column}>39</Text>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.column, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.column, { color: '#EA4335'}]}
            />
          </Pressable>
        </View>
        <View style={styles.row}>
          <Text style={styles.column}>홍길동</Text>
          <Text style={styles.column}>39</Text>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.column, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.column, { color: '#EA4335'}]}
            />
          </Pressable>
        </View>
        <View style={styles.row}>
          <Text style={styles.column}>홍길동</Text>
          <Text style={styles.column}>39</Text>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.column, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.column, { color: '#EA4335'}]}
            />
          </Pressable>
        </View>
        <View style={styles.row}>
          <Text style={styles.column}>홍길동</Text>
          <Text style={styles.column}>39</Text>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.column, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.column, { color: '#EA4335'}]}
            />
          </Pressable>
        </View>
        <View style={styles.row}>
          <Text style={styles.column}>홍길동</Text>
          <Text style={styles.column}>39</Text>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="edit"
              size={24}
              style={[styles.column, { color: '#FBBC05' }]}
            />
          </Pressable>
          <Pressable style={styles.column} onPress={() => {}}>
            <FontAwesome
              name="trash"
              size={24}
              style={[styles.column, { color: '#EA4335'}]}
            />
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}