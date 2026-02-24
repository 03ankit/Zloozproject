import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import Background from '../../components/Background';
import Header from '../../components/Header';
import { usePreventRemove } from '@react-navigation/native';

const DATA = [
  {
    id: '1',
    name: 'Jordan Blackwood',
    msg: 'Hey, are we meeting today?',
    time: '12:16 pm',
    img: 'https://i.pravatar.cc/150?img=1',
    unread: true,
    type: 'chat',
  },
  {
    id: '2',
    name: 'Samantha Rivers',
    msg: 'Thanks for the feedback!',
    time: '11:45 am',
    img: 'https://i.pravatar.cc/150?img=2',
    unread: false,
    type: 'chat',
  },
  {
    id: '3',
    name: 'Michael Thompson',
    msg: 'Meeting postponed',
    time: '10:25 am',
    img: 'https://i.pravatar.cc/150?img=3',
    unread: true,
    type: 'group',
  },
];

export default function Home({ navigation }) {
  const [search, setSearch] = useState('');

  const [activeTab, setActiveTab] = useState('all');

  const filteredData = DATA.filter(item => {
    // tab filter
    if (activeTab === 'unread' && !item.unread) return false;
    if (activeTab === 'group' && item.type !== 'group') return false;

    // search filter
    if (search.trim().length > 0) {
      const text = search.toLowerCase();
      return (
        item.name.toLowerCase().includes(text) ||
        item.msg.toLowerCase().includes(text)
      );
    }

    return true;
  });


  usePreventRemove(true, ({ data }) => {
    navigation.dispatch(data.action);
  });

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}
      onPress={() =>
        navigation.navigate("Message", {
          name: item.name,
          image: item.img,
          status: item.unread ? "Online" : "Offline",
        })}>
      <Image source={{ uri: item.img }} style={styles.avatar} />

      <View style={styles.textBox}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.msg}>{item.msg}</Text>
      </View>

      <Text style={styles.time}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <Background showBg={true}>
      <Header
        showlogo={true}
        showNewChat
        onNewChat={() => navigation.navigate('Adduser')}
      />
      {/* Search */}
      <View style={styles.searchBox}>
        <View style={styles.searchContainer}>

          <Image
            source={require('../../assets/icons/searchicon.png')}
            style={styles.searchIcon}
            resizeMode="contain"
          />

          <TextInput
            placeholder="Search"
            placeholderTextColor="#999"
            value={search}
            onChangeText={setSearch}
            style={styles.searchInput}
          />

        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.tabs}>
          {['all', 'unread', 'group'].map(tab => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={styles.tab}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab === 'all'
                  ? 'All Chat'
                  : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Text>

              {activeTab === tab && <View style={styles.activeLine} />}
            </TouchableOpacity>
          ))}
        </View>

        {/* Chat List */}
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </Background>
  );
}
