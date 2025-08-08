// components/InstructionsCard.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

interface InstructionsCardProps {
  onNext: () => void;
}

export default function InstructionsCard({ onNext }: InstructionsCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={require('../../../assets/Vocabulary\ Builder.png')} style={styles.icon} />
        <Text style={styles.title}>Vocabulary Builder</Text>
      </View>

      <Text style={styles.instructionsTitle}>Instructions:</Text>

      <Text style={styles.instructionsText}>
        <Text style={{ fontStyle: 'italic' }}>
          Read the word and choose the correct definition or meaning.
        </Text>
        {'\n\n'}
        <Text style={{ fontStyle: 'italic' }}>Some questions may ask for synonyms or usage.</Text>
        {'\n\n'}
        <Text style={{ fontStyle: 'italic' }}>Only one choice is correct.</Text>
      </Text>

      <Text style={styles.tip}>💡 Tip: Use clues from the choices to find the best match!</Text>

      <TouchableOpacity style={styles.nextButton} onPress={onNext}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 20,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  instructionsTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  instructionsText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  tip: {
    fontSize: 13,
    color: '#777',
    marginBottom: 30,
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#5E67CC',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  nextText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
});
