import { View, Text, StyleSheet } from 'react-native';

export default function GrammarPracticeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Grammar Practice Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, fontFamily: 'PoppinsRegular' },
});
