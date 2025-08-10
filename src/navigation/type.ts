import { MCQ } from '../components/QuizCard';
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  InterestSelection: {
    fullName: string;
    email: string;
    password: string;
  };
  Home: undefined;
  Progress: undefined;
  Profile: undefined;
  WordOfTheDay: undefined;

  VocabularyBuilder: undefined;
  VocabularyGame: undefined;

  GrammarPractice: undefined;

  ReadingComprehension: undefined;

  FilipinoToEnglish: undefined;

  SentenceConstruction: undefined;
};
