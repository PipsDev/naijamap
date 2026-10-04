import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';

export default function SearchScreen() {
  const [searchText, setSearchText] = useState('');

  const suggestions = [
    {
      name: 'Ikeja',
      description: 'Lagos, Nigeria',
      icon: 'location-outline' as const,
    },
    {
      name: 'Oshodi',
      description: 'Lagos, Nigeria',
      icon: 'location-outline' as const,
    },
    {
      name: 'Lekki Phase 1',
      description: 'Lagos, Nigeria',
      icon: 'location-outline' as const,
    },
    {
      name: 'CMS',
      description: 'Lagos Island, Lagos',
      icon: 'location-outline' as const,
    },
  ];

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar style="light" />

      {/* HEADER */}
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons
            name="arrow-back"
            size={23}
            color="#FFFFFF"
          />
        </Pressable>

        <Text style={styles.headerTitle}>
          Search
        </Text>
      </View>

      {/* SEARCH INPUT */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search-outline"
          size={21}
          color="#20C878"
        />

        <TextInput
          style={styles.input}
          placeholder="Where are you going?"
          placeholderTextColor="#8B949E"
          value={searchText}
          onChangeText={setSearchText}
          autoFocus
        />

        {searchText.length > 0 && (
          <Pressable
            onPress={() => setSearchText('')}
          >
            <Ionicons
              name="close-circle"
              size={20}
              color="#8B949E"
            />
          </Pressable>
        )}
      </View>

      {/* CURRENT LOCATION */}
      <Pressable style={styles.currentLocation}>
        <View style={styles.currentLocationIcon}>
          <Ionicons
            name="locate"
            size={20}
            color="#20C878"
          />
        </View>

        <View style={styles.locationText}>
          <Text style={styles.locationTitle}>
            Use current location
          </Text>

          <Text style={styles.locationSubtitle}>
            Find routes from where you are
          </Text>
        </View>
      </Pressable>

      {/* RECENT / SUGGESTIONS */}
      <Text style={styles.sectionTitle}>
        {searchText.length > 0 ? 'Places' : 'Recent searches'}
      </Text>

      <View style={styles.results}>
        {suggestions
          .filter((place) =>
            place.name
              .toLowerCase()
              .includes(searchText.toLowerCase())
          )
          .map((place) => (
            <Pressable
              key={place.name}
              style={styles.resultItem}
              onPress={() => {
                router.push({
                  pathname: '/routes',
                  params: {
                    destination: place.name,
                  },
                });
              }}
            >
              <View style={styles.resultIcon}>
                <Ionicons
                  name={place.icon}
                  size={20}
                  color="#20C878"
                />
              </View>

              <View style={styles.resultText}>
                <Text style={styles.resultName}>
                  {place.name}
                </Text>

                <Text style={styles.resultDescription}>
                  {place.description}
                </Text>
              </View>

              <Ionicons
                name="chevron-forward"
                size={19}
                color="#68737D"
              />
            </Pressable>
          ))}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071019',
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 55,
    marginBottom: 20,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#111B25',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  headerTitle: {
    color: '#FFFFFF',
    fontFamily: 'outfit-bold',
    fontSize: 21,
  },

  searchContainer: {
    height: 54,
    backgroundColor: '#111B25',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  input: {
    flex: 1,
    color: '#FFFFFF',
    fontFamily: 'outfit',
    fontSize: 15,
    marginLeft: 10,
  },

  currentLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
    paddingVertical: 12,
  },

  currentLocationIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#10271F',
    justifyContent: 'center',
    alignItems: 'center',
  },

  locationText: {
    marginLeft: 12,
  },

  locationTitle: {
    color: '#FFFFFF',
    fontFamily: 'outfit-medium',
    fontSize: 14,
  },

  locationSubtitle: {
    color: '#8B949E',
    fontFamily: 'outfit',
    fontSize: 12,
    marginTop: 3,
  },

  sectionTitle: {
    color: '#8B949E',
    fontFamily: 'outfit-medium',
    fontSize: 13,
    marginTop: 20,
    marginBottom: 8,
  },

  results: {
    marginTop: 2,
  },

  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#111B25',
  },

  resultIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#111B25',
    justifyContent: 'center',
    alignItems: 'center',
  },

  resultText: {
    flex: 1,
    marginLeft: 12,
  },

  resultName: {
    color: '#FFFFFF',
    fontFamily: 'outfit-medium',
    fontSize: 15,
  },

  resultDescription: {
    color: '#8B949E',
    fontFamily: 'outfit',
    fontSize: 12,
    marginTop: 3,
  },
});