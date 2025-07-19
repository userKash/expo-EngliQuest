import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/type';
import { Feather } from '@expo/vector-icons'; // for arrow-left icon

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;

const interestsList = [
  { id: '1', title: 'Adventure Stories', description: 'Exciting journeys and quests' },
  { id: '2', title: 'Friendship', description: 'Stories about bonds and relationships' },
  { id: '3', title: 'Fantasy & Magic', description: 'Exciting journeys and quests' },
  { id: '4', title: 'Music & Arts', description: 'Creative expression and performance' },
  { id: '5', title: 'Sports & Games', description: 'Athletic activities and competition' },
  { id: '6', title: 'Nature & Animals', description: 'Wildlife and environmental themes' },
  { id: '7', title: 'Filipino Culture', description: 'Traditional stories and customs' },
  { id: '8', title: 'Family Values', description: 'Family bonds and traditions' },
];

export default function InterestSelectionScreen() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleInterest = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>What interests you?</Text>
      <Text style={styles.subtext}>
        Select at least 3 topics you enjoy. We'll create personalized stories and lessons just for
        you!
      </Text>

      <FlatList
        data={interestsList}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, selected.includes(item.title) && styles.cardSelected]}
            onPress={() => toggleInterest(item.title)}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.createBtn}>
        <Text style={styles.createText}>Create</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtext: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
    color: '#555',
  },
  grid: {
    justifyContent: 'center',
    marginTop: 50,
  },
  card: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    margin: 8,
    padding: 12,
    backgroundColor: '#fff',
  },
  cardSelected: {
    borderColor: '#5E67CC',
    backgroundColor: '#eef2ff',
  },
  title: {
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 6,
  },
  description: {
    fontSize: 12,
    color: '#666',
  },
  createBtn: {
    backgroundColor: '#5E67CC',
    padding: 16,
    borderRadius: 10,
    marginBottom: 50,
  },
  createText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
