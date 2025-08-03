import { View, Text, StyleSheet } from 'react-native';

export default function VocabularyBuilderScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Vocabulary Builder Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, fontFamily: 'PoppinsRegular' },
});
