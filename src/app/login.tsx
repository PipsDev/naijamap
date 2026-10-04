import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>
          Welcome back
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 30,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#111111',
  },

  subtitle: {
    fontSize: 16,
    color: '#777777',
    marginTop: 8,
  },
});