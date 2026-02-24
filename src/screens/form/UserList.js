import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/action';
import Background from '../../components/Background';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { navigate } from '../../navigation/NavigationService';


export default function UserList({navigation}) {
  //const[name, setname] =useState(null);
   const[name, setname] =useState({});
  name.firstname
      // const navigation = useNavigation();
    const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          padding: 15,
          marginBottom: 12,
          borderRadius: 10,
          elevation: 3,
        }}
      >
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>

        <View style={styles.btnRow}>
          <TouchableOpacity
            style={styles.editBtn}
           onPress={() =>  navigation.navigate('Adduser', { user: item })}
          >
            <Text style={styles.btnText}>Edit</Text>
          </TouchableOpacity>

          {/* 🗑 Delete */}
          <TouchableOpacity
            style={styles.deleteBtn}
            onPress={() => dispatch(deleteUser(item.id))}
          >
            <Text style={styles.btnText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <Background showBg>
      <Header showlogo />

      <View style={styles.container}>
        {/* User List */}
        <FlatList
          data={users}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 100,
          }}
          ListEmptyComponent={() => (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#777', fontSize: 16 }}>
                No Users Found
              </Text>
            </View>
          )}
        />

        <TouchableOpacity
          style={styles.fab}
          onPress={() => navigation.navigate('Adduser')}
        >
          <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}
