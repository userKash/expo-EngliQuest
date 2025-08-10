import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export type VocabQuestion = {
  prompt: string;
  choices: string[];
  correctIndex: number;
  sentence?: string;
};

type Props = {
  items: VocabQuestion[];
  header?: string;
  onFinish?: (score: number) => void;
};

export default function VocabularyQuizUI({ items, header, onFinish }: Props) {
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const question = items[qIndex];
  const choiceLabels = ['A', 'B', 'C', 'D'];

  const handleSelect = (i: number) => {
    setSelected(i);
    if (i === question.correctIndex) {
      setScore((prev) => prev + 10);
    }
  };

  const handleNext = () => {
    setSelected(null);
    if (qIndex < items.length - 1) {
      setQIndex((prev) => prev + 1);
    } else {
      if (onFinish) onFinish(score);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        {header && <Text style={styles.header}>{header}</Text>}

        {/* Card */}
        <View style={styles.card}>
          {question.sentence && <Text style={styles.sentence}>{question.sentence}</Text>}
          <Text style={styles.prompt}>{question.prompt}</Text>

          {question.choices.map((choice, i) => {
            const correct = question.correctIndex === i;
            const isSelected = selected === i;

            let choiceStyle = styles.choice;
            let choiceTextStyle = styles.choiceText;

            if (selected !== null) {
              if (correct) {
                choiceStyle = { ...choiceStyle, ...styles.correctChoice };
              } else if (isSelected) {
                choiceStyle = { ...choiceStyle, ...styles.wrongChoice };
              }
            }

            return (
              <TouchableOpacity
                key={i}
                style={choiceStyle}
                onPress={() => handleSelect(i)}
                disabled={selected !== null}>
                <Text style={styles.choiceLabel}>{choiceLabels[i]}</Text>
                <Text style={choiceTextStyle}>{choice}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Feedback */}
        {selected !== null && (
          <View style={styles.feedbackContainer}>
            <Text style={styles.feedbackText}>
              {selected === question.correctIndex ? `✅ Correct! +10 points` : '❌ Incorrect'}
            </Text>
            <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
              <Text style={styles.nextBtnText}>
                {qIndex < items.length - 1 ? 'Next Question' : 'Finish'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
  },
  header: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 16,
  },
  sentence: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
  },
  prompt: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 45,
    fontWeight: 'bold',
  },
  choice: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 18,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  choiceLabel: {
    fontWeight: 'bold',
    marginRight: 10,
    color: '#333',
  },
  choiceText: { fontSize: 14, flexShrink: 1 },
  correctChoice: {
    backgroundColor: '#d4edda',
    borderColor: '#28a745',
  },
  wrongChoice: {
    backgroundColor: '#f8d7da',
    borderColor: '#dc3545',
  },
  feedbackContainer: {
    borderWidth: 1,
    borderColor: '#28a745',
    backgroundColor: '#eafbea',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  feedbackText: {
    textAlign: 'center',
    color: '#28a745',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  nextBtn: {
    backgroundColor: '#5E5CE6',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  nextBtnText: { color: '#fff', fontWeight: 'bold' },
});
