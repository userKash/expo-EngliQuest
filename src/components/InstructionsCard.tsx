import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

type Props = {
  title: string;
  body: string;
  tip?: string;
  ctaLabel?: string;
  onNext: () => void;
  titleIcon?: any;
  tipIcon?: any;
};

export default function InstructionsCard({
  title,
  body,
  tip,
  ctaLabel = 'Next',
  onNext,
  titleIcon,
  tipIcon,
}: Props) {
  return (
    <View style={styles.wrapper}>
      {/* Card with instructions */}
      <View style={styles.card}>
        {/* Title with icon */}
        <View style={styles.rowCenter}>
          {titleIcon && <Image source={titleIcon} style={styles.icon} />}
          <Text style={styles.title}>{title}</Text>
        </View>

        <Text style={styles.body}>{body}</Text>

        {/* Tip with icon */}
        {tip ? (
          <View style={styles.rowCenter}>
            {tipIcon && <Image source={tipIcon} style={styles.iconSmall} />}
            <Text style={styles.tip}>{tip}</Text>
          </View>
        ) : null}
      </View>

      {/* Button outside border */}
      <TouchableOpacity style={styles.button} onPress={onNext}>
        <Text style={styles.buttonText}>{ctaLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 90,
  },
  card: {
    borderWidth: 0.8,
    borderColor: '#A2A2A2',
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#fff',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  icon: {
    width: 28,
    height: 28,
    marginRight: 8,
    resizeMode: 'contain',
  },
  iconSmall: {
    width: 18,
    height: 18,
    marginRight: 6,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  body: {
    marginTop: 30,
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 20,
    textAlign: 'center',
  },
  tip: {
    marginTop: 30,
    fontStyle: 'italic',
    color: '#666',
    textAlign: 'center',
    flexShrink: 1,
  },
  button: {
    backgroundColor: '#5E5CE6',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
