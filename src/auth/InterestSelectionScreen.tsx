import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/type';
import type { RouteProp } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'InterestSelection'>;
type RouteProps = RouteProp<RootStackParamList, 'InterestSelection'>;

type FeatherIconName = React.ComponentProps<typeof Feather>['name'];

const interestsList: {
  id: string;
  title: string;
  description: string;
  icon: FeatherIconName;
  color: string;
}[] = [
  {
    id: '1',
    title: 'Adventure Stories',
    description: 'Exciting journeys and quests',
    icon: 'compass',
    color: '#FAA030',
  },
  {
    id: '2',
    title: 'Friendship',
    description: 'Stories about bonds and relationships',
    icon: 'users',
    color: '#F59E0B',
  },
  {
    id: '3',
    title: 'Fantasy & Magic',
    description: 'Spells and mythical creatures',
    icon: 'star',
    color: '#8B5CF6',
  },
  {
    id: '4',
    title: 'Music & Arts',
    description: 'Creative expression and performance',
    icon: 'music',
    color: '#10B981',
  },
  {
    id: '5',
    title: 'Sports & Games',
    description: 'Athletic activities and competition',
    icon: 'activity',
    color: '#3B82F6',
  },
  {
    id: '6',
    title: 'Nature & Animals',
    description: 'Wildlife and environmental themes',
    icon: 'globe',
    color: '#22C55E',
  },
  {
    id: '7',
    title: 'Filipino Culture',
    description: 'Traditional stories and customs',
    icon: 'flag',
    color: '#EC4899',
  },
  {
    id: '8',
    title: 'Family Values',
    description: 'Family bonds and traditions',
    icon: 'heart',
    color: '#EF4444',
  },
];

export default function InterestSelectionScreen() {
  const [selected, setSelected] = useState<string[]>([]);
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();

  const { fullName, email, password } = route.params;

  const toggleInterest = (title: string) => {
    setSelected((prev) =>
      prev.includes(title) ? prev.filter((i) => i !== title) : [...prev, title]
    );
  };

  const handleCreateAccount = async () => {
    if (selected.length < 3) {
      Alert.alert('Selection Required', 'Please select at least 3 interests.');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          password,
          interests: selected,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        Alert.alert('Success', 'Account created successfully!');
        navigation.navigate('Login');
      } else {
        Alert.alert('Registration Failed', data.error || 'Something went wrong.');
      }
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Could not connect to the server.');
    }
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
        contentContainerStyle={{ paddingTop: 10 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, selected.includes(item.title) && styles.cardSelected]}
            onPress={() => toggleInterest(item.title)}>
            <Feather name={item.icon} size={24} color={item.color} style={{ marginBottom: 8 }} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.createBtn} onPress={handleCreateAccount}>
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
    paddingBottom: 10,
  },
  card: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    margin: 8,
    padding: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
    textAlign: 'center',
  },
  createBtn: {
    backgroundColor: '#5E67CC',
    padding: 16,
    borderRadius: 10,
    marginTop: 20,
  },
  createText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
