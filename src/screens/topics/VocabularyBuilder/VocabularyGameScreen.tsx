import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import InstructionsCard from '../../../components/InstructionsCard';
import VocabularyQuizUI, { VocabQuestion } from '../../../components/VocabularyQuizUI';
import BottomNav from '../../../components/BottomNav';

export default function VocabularyGameScreen() {
  const [step, setStep] = useState<'instructions' | 'quiz'>('instructions');

  const instructions = {
    title: 'Vocabulary Builder',
    body:
      'Instruction: \n\n' +
      'Read the word and choose the correct definition or meaning.\n\n' +
      'Some questions may ask for synonyms or example usage.\n\n' +
      'Only one choice is correct.',
    tip: 'Use context clues to find the best answer.',
  };

  const questions: VocabQuestion[] = [
    {
      sentence: 'word',
      prompt: 'Question',
      choices: ['Correct', 'Answer 2', 'Answer 3', 'Answer 4'],
      correctIndex: 0,
    },
    {
      sentence:
        'Even though the movie was three hours long, the audience was enthralled, sitting in complete silence and awe until the very end.',
      prompt: 'What does the word "enthralled" most likely mean?',
      choices: [
        'Bored and restless',
        'Fascinated and deeply interested',
        'Confused and uncertain',
        'Shocked and frightened',
      ],
      correctIndex: 1,
    },
  ];

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        {step === 'instructions' ? (
          <InstructionsCard
            {...instructions}
            onNext={() => setStep('quiz')}
            titleIcon={require('../../../../assets/Vocabulary Builder.png')}
            tipIcon={require('../../../../assets/flat-color-icons_idea.png')}
          />
        ) : (
          <VocabularyQuizUI
            items={questions}
            onFinish={(score) => alert(`Score: ${score}/${questions.length}`)}
          />
        )}
      </View>
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, padding: 20 },
});
