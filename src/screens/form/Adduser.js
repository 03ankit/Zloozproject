import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addUser, updateUser } from '../../redux/action';
import Background from '../../components/Background';
import Header from '../../components/Header';
import styles from './styles';

export default function Adduser({ navigation, route }) {
  const editUser = route?.params?.user;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    if (editUser) {
      setName(editUser.name);
      setEmail(editUser.email);
      setPhone(editUser.phone);
      setAddress(editUser.address);
    }
  }, []);

  const dataSave = () => {
    if (!name || !email || !phone || !address) return;

    if (editUser) {
      const updatedUser = {
        id: editUser.id,
        name,
        email,
        phone,
        address,
      };
      dispatch(updateUser(updatedUser));
    } else {
      // ADD
      const user = {
        id: Date.now(),
        name,
        email,
        phone,
        address,
      };

      dispatch(addUser(user));
    }

    navigation.reset({
        index:0,
        routes:[{name:'User_List'}]
    });

  };
  return (
    <Background showbg={true}>
      <Header showlogo={true} />
      <View style={styles.container}>

      <Text style={styles.title}>
        {editUser ? 'Update User' : 'Add User'}
      </Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="Enter name"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholder="Enter email"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Phone</Text>
      <TextInput
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
        placeholder="Enter phone"
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Address</Text>
      <TextInput
        value={address}
        onChangeText={setAddress}
        style={styles.input}
        placeholder="Enter address"
        multiline
      />

      <TouchableOpacity style={styles.btn} onPress={dataSave}>
        <Text style={styles.btnText}>
          {editUser ? 'Update' : 'Save'}
        </Text>
      </TouchableOpacity>

    </View>
    </Background>
  );
}
