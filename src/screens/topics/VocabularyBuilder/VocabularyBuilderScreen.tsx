import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Image } from 'react-native';

export default function VocabularyBuilderScreen() {
  const [easyExpanded, setEasyExpanded] = useState(false);
  const rotation = useState(new Animated.Value(0))[0];

  const toggleExpand = () => {
    Animated.timing(rotation, {
      toValue: easyExpanded ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
    setEasyExpanded(!easyExpanded);
  };

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });

  return (
    <View style={styles.container}>
      {/* Progress */}
      <View style={styles.progressCard}>
        <Text style={styles.progressTitle}>Your Progress</Text>
        <Text style={styles.progressText}>1 of 3 levels completed</Text>
        <View style={styles.progressDots}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>

      {/* Easy Level */}
      <View style={styles.levelCard}>
        <View style={styles.levelCircle}>
          <Text style={styles.levelNumber}>1</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.levelTitle}>
            Easy <Text style={styles.badge}>Not Started</Text>
          </Text>
          <Text style={styles.levelDesc}>Basic level</Text>
        </View>
        <TouchableOpacity style={styles.startButton} onPress={toggleExpand}>
          <Animated.Image
            source={require('../../../../assets/arrow.png')}
            style={[styles.arrowIcon, { transform: [{ rotate: rotateInterpolate }] }]}
          />
          <Text style={styles.startButtonText}>Start</Text>
        </TouchableOpacity>
      </View>

      {/* Sub-levels */}
      {easyExpanded && (
        <>
          <View style={styles.subLevelCard}>
            <View style={{ flex: 1 }}>
              <Text style={styles.subLevelTitle}>
                Level 1 <Text style={styles.badge}>Not Started</Text>
              </Text>
              <Text style={styles.subLevelDesc}>Basic level</Text>
            </View>
            <TouchableOpacity style={styles.startButton}>
              <Image source={require('../../../../assets/arrow.png')} style={styles.arrowIcon} />
              <Text style={styles.startButtonText}>Start</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.subLevelCard}>
            <View style={{ flex: 1 }}>
              <Text style={styles.subLevelTitle}>
                Level 2 <Text style={styles.badge}>Not Started</Text>
              </Text>
              <Text style={styles.subLevelDesc}>Basic level</Text>
            </View>
            <TouchableOpacity style={[styles.startButton, styles.buttonDisabled]}>
              <Image source={require('../../../../assets/arrow.png')} style={styles.arrowIcon} />
              <Text style={styles.startButtonText}>Start</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      {/* Medium */}
      <View style={[styles.levelCard, styles.levelLocked]}>
        <View style={styles.levelCircle}>
          <Text style={styles.levelNumber}>3</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.levelTitle}>
            Medium <Text style={styles.lockedText}>🔒 Locked</Text>
          </Text>
          <Text style={styles.levelDesc}>Intermediate level</Text>
        </View>
        <TouchableOpacity style={[styles.startButton, styles.buttonDisabled]}>
          <Image source={require('../../../../assets/arrow.png')} style={styles.arrowIcon} />
          <Text style={styles.startButtonText}>Start</Text>
        </TouchableOpacity>
      </View>

      {/* Hard */}
      <View style={[styles.levelCard, styles.levelLocked]}>
        <View style={styles.levelCircle}>
          <Text style={styles.levelNumber}>4</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.levelTitle}>
            Hard <Text style={styles.lockedText}>🔒 Locked</Text>
          </Text>
          <Text style={styles.levelDesc}>Advanced level</Text>
        </View>
        <TouchableOpacity style={[styles.startButton, styles.buttonDisabled]}>
          <Image source={require('../../../../assets/arrow.png')} style={styles.arrowIcon} />
          <Text style={styles.startButtonText}>Start</Text>
        </TouchableOpacity>
      </View>

      {/* Tips */}
      <View style={styles.tipsCard}>
        <Text style={styles.tipsText}>
          Complete each level in order. Pass Easy, Medium, and Hard with 70% to unlock the next
          level.
        </Text>
        <Text style={styles.tip}>💡 Learning Tips</Text>
        <Text style={styles.tip}>• Start with Easy level to build confidence</Text>
        <Text style={styles.tip}>• Practice regularly for better retention</Text>
        <Text style={styles.tip}>• Complete all levels to master the skill</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  progressCard: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },
  progressTitle: { fontWeight: 'bold', fontSize: 16, marginBottom: 4 },
  progressText: { fontSize: 14, color: '#666' },
  progressDots: { flexDirection: 'row', marginTop: 10 },
  dot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#ddd', marginRight: 6 },
  dotActive: { backgroundColor: '#5E67CC' },
  levelCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
  },
  subLevelCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    padding: 14,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  levelLocked: { opacity: 0.5 },
  levelCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#E5E7FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  levelNumber: { fontWeight: 'bold', color: '#5E67CC', fontSize: 16 },
  levelTitle: { fontWeight: 'bold', fontSize: 16 },
  subLevelTitle: { fontWeight: '600', fontSize: 15 },
  badge: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#555',
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  lockedText: { fontSize: 12, color: '#999' },
  levelDesc: { fontSize: 13, color: '#777' },
  subLevelDesc: { fontSize: 12, color: '#777' },
  startButton: {
    backgroundColor: '#5E67CC',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  arrowIcon: {
    width: 17,
    height: 17,
    tintColor: '#fff',
    marginRight: 6,
  },
  startButtonText: { color: '#fff', fontSize: 13 },
  buttonDisabled: { backgroundColor: '#ccc' },
  tipsCard: {
    marginTop: 20,
    backgroundColor: '#F6F4FF',
    borderRadius: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: '#D0C4F7',
  },
  tipsText: { fontSize: 13, marginBottom: 10, color: '#444' },
  tip: { fontSize: 13, color: '#555', marginBottom: 6 },
});
