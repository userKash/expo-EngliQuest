import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const topics = [
    {
      title: 'Vocabulary Builder',
      desc: 'Learn new words with flashcards',
      image: require('../../assets/Vocabulary Builder.png'),
      screen: 'VocabularyBuilder',
    },
    {
      title: 'Grammar Practice',
      desc: 'Master English grammar rules',
      image: require('../../assets/Grammar Practice.png'),
      screen: 'GrammarPractice',
    },
    {
      title: 'Reading Comprehension',
      desc: 'Improve reading skills',
      image: require('../../assets/Reading Comprehension.png'),
      screen: 'ReadingComprehension',
    },
    {
      title: 'Filipino to English',
      desc: 'Practice translation skills',
      image: require('../../assets/Filipino to English.png'),
      screen: 'FilipinoToEnglish',
    },
    {
      title: 'Sentence Construction',
      desc: 'Arrange jumbled words',
      image: require('../../assets/Sentence Construction.png'),
      screen: 'SentenceConstruction',
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={require('../../assets/userProfile.png')} style={styles.avatar} />
          <View>
            <Text style={styles.greeting}>Hello, Sebastian</Text>
            <Text style={styles.subtext}>Let's play, learn, and have fun</Text>
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.welcome}>Welcome back to</Text>
          <Text style={styles.brand}>EngliQuest</Text>

          <View style={styles.progressCard}>
            <Text style={styles.cardTitle}>Overall Progress</Text>
            <Text style={styles.cardLabel}>Completion</Text>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: '0%' }]} />
            </View>
            <Text style={styles.totalQuizzes}>Total Quizzes: 1</Text>
          </View>

          <Text style={styles.sectionTitle}>Recommended topics</Text>

          {topics.map((topic, idx) => (
            <View key={idx} style={styles.topicCard}>
              <View style={styles.topicLeft}>
                <Image source={topic.image} style={styles.topicIcon} />
                <View>
                  <Text style={styles.topicTitle}>{topic.title}</Text>
                  <Text style={styles.topicDesc}>{topic.desc}</Text>
                  <View style={styles.progressBarBg}>
                    <View style={[styles.progressBarFill, { width: '0%' }]} />
                  </View>
                </View>
              </View>

              <TouchableOpacity
                style={styles.startBtn}
                onPress={() => navigation.navigate(topic.screen)}>
                <Text style={styles.startText}>Start</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View style={styles.bottomNav}>
          <Feather name="home" size={24} color="#5E67CC" />
          <Feather name="bar-chart-2" size={24} color="#9CA3AF" />
          <Feather name="user" size={24} color="#9CA3AF" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContainer: {
    padding: 20,
    paddingBottom: 120,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 20,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  greeting: {
    fontSize: 14,
    color: '#333',
  },
  subtext: {
    fontSize: 12,
    color: '#888',
    fontFamily: 'PoppinsRegular',
  },
  welcome: {
    fontSize: 24,
    color: '#5E67CC',
    textAlign: 'center',
    fontFamily: 'PoppinsBoldItalic',
  },
  brand: {
    fontSize: 24,
    fontFamily: 'PoppinsBoldItalic',
    textAlign: 'center',
    color: '#5E67CC',
    marginBottom: 20,
  },
  progressCard: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  progressBarBg: {
    height: 6,
    borderRadius: 3,
    backgroundColor: '#e5e7eb',
    overflow: 'hidden',
    marginBottom: 6,
  },
  progressBarFill: {
    height: 6,
    backgroundColor: '#5E67CC',
  },
  totalQuizzes: {
    fontSize: 10,
    color: '#999',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  topicCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
  },
  topicLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    flex: 1,
  },
  topicIcon: {
    width: 28,
    height: 28,
    marginTop: 3,
  },
  topicTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  topicDesc: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 6,
  },
  startBtn: {
    backgroundColor: '#5E67CC',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  startText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#e5e7eb',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
