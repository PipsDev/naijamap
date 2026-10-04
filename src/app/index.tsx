import { StyleSheet, Text, View, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  const [loaded, error] = useFonts({
    outfit: require('../../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('../../assets/fonts/Outfit-SemiBold.ttf'),
    'outfit-bold': require('../../assets/fonts/Outfit-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={styles.container}>

      {/* ================= MAP ================= */}
      <MapView
        style={styles.map}
        mapType="standard"
        initialRegion={{
          latitude: 6.6018,
          longitude: 3.3515,
          latitudeDelta: 0.12,
          longitudeDelta: 0.12,
        }}
      >

        {/* Oshodi */}
        <Marker
          coordinate={{
            latitude: 6.5244,
            longitude: 3.3792,
          }}
          title="Oshodi"
          description="Transport junction"
        >
          <View style={styles.busMarker}>
            <Ionicons
              name="bus"
              size={18}
              color="#FFFFFF"
            />
          </View>
        </Marker>

        {/* Lekki */}
        <Marker
          coordinate={{
            latitude: 6.4474,
            longitude: 3.4722,
          }}
          title="Lekki Phase 1"
          description="Transport location"
        >
          <View style={styles.busMarker}>
            <Ionicons
              name="bus"
              size={18}
              color="#FFFFFF"
            />
          </View>
        </Marker>

      </MapView>


      {/* ================= TOP CONTENT ================= */}
      <View style={styles.topContainer}>

        {/* Logo */}
        <View style={styles.logoRow}>

          <View style={styles.logoIcon}>
            <Ionicons
              name="navigate"
              size={20}
              color="#FFFFFF"
            />
          </View>

          <Text style={styles.logoText}>
            Naija<Text style={styles.logoGreen}>Map</Text>
          </Text>

          <Pressable style={styles.profileButton}>
            <Ionicons
              name="person-outline"
              size={20}
              color="#FFFFFF"
            />
          </Pressable>

        </View>


        {/* Search */}
        <Pressable
  style={styles.searchBar}
  onPress={() => router.push('/search')}
>

          <Ionicons
            name="location-outline"
            size={21}
            color="#20C878"
          />

          <Text style={styles.searchText}>
            Where are you going?
          </Text>

          <Ionicons
            name="mic-outline"
            size={20}
            color="#FFFFFF"
          />

        </Pressable>


        {/* Quick filters */}
        <View style={styles.quickRow}>

          <QuickButton
            icon="home-outline"
            text="Home"
          />

          <QuickButton
            icon="briefcase-outline"
            text="Work"
          />

          <QuickButton
            icon="school-outline"
            text="School"
          />

          <QuickButton
            icon="bookmark-outline"
            text="Saved"
          />

        </View>

      </View>


      {/* ================= CURRENT LOCATION ================= */}
      <Pressable style={styles.locationButton}>
        <Ionicons
          name="locate"
          size={22}
          color="#FFFFFF"
        />
      </Pressable>


      {/* ================= BOTTOM INFO CARD ================= */}
      <View style={styles.bottomCard}>

        <View style={styles.bottomCardIcon}>
          <Ionicons
            name="bus"
            size={22}
            color="#FFFFFF"
          />
        </View>

        <View style={styles.bottomCardText}>

          <Text style={styles.bottomTitle}>
            Find the best way
          </Text>

          <Text style={styles.bottomSubtitle}>
            Buses • Minibus • Tricycles • More
          </Text>

        </View>

        <Ionicons
          name="chevron-forward"
          size={22}
          color="#FFFFFF"
        />

      </View>


      {/* ================= BOTTOM NAV ================= */}
      <View style={styles.bottomNav}>

        <NavItem
    icon="compass-outline"
    label="Explore"
    active
    onPress={() => router.push('/')}
  />

  <NavItem
    icon="time-outline"
    label="Trips"
    onPress={() => router.push('/trips')}
  />

  <NavItem
    icon="bookmark-outline"
    label="Saved"
    onPress={() => router.push('/saved')}
  />

  <NavItem
    icon="person-outline"
    label="More"
    onPress={() => router.push('/profile')}
  />

      </View>


      <StatusBar style="light" />

    </View>
  );
}


/* ================= QUICK BUTTON ================= */

function QuickButton({
  icon,
  text,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  text: string;
}) {
  return (
    <Pressable style={styles.quickButton}>

      <Ionicons
        name={icon}
        size={15}
        color="#FFFFFF"
      />

      <Text style={styles.quickText}>
        {text}
      </Text>

    </Pressable>
  );
}


/* ================= NAV ITEM ================= */

function NavItem({
  icon,
  label,
  active,
  onPress,
}: {
  icon: any;
  label: string;
  active?: boolean;
  onPress?: () => void;
}) {
  return (
    <Pressable
      style={styles.navItem}
      onPress={onPress}
    >
      <Ionicons
        name={icon}
        size={22}
        color={active ? '#20C878' : '#68737D'}
      />

      <Text
        style={[
          styles.navLabel,
          active && styles.activeNavLabel,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}


/* ================= STYLES ================= */

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#071019',
  },


  /* MAP */

  map: {
    flex: 1,
  },


  /* TOP */

  topContainer: {
    position: 'absolute',
    top: 55,
    left: 14,
    right: 14,
  },


  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },


  logoIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#20C878',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },


  logoText: {
    fontFamily: 'outfit-bold',
    fontSize: 22,
    color: '#FFFFFF',
  },


  logoGreen: {
    color: '#20C878',
  },


  profileButton: {
    marginLeft: 'auto',
    width: 38,
    height: 38,
    borderRadius: 20,
    backgroundColor: '#111B25',
    justifyContent: 'center',
    alignItems: 'center',
  },


  /* SEARCH */

  searchBar: {
    height: 52,
    backgroundColor: '#111B25',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },


  searchText: {
    flex: 1,
    color: '#9CA5AE',
    fontFamily: 'outfit',
    fontSize: 15,
    marginLeft: 10,
  },


  /* QUICK BUTTONS */

  quickRow: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 7,
  },


  quickButton: {
    backgroundColor: '#111B25',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },


  quickText: {
    color: '#FFFFFF',
    fontFamily: 'outfit-medium',
    fontSize: 12,
  },


  /* MAP MARKERS */

  busMarker: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#20C878',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },


  /* LOCATION */

  locationButton: {
    position: 'absolute',
    right: 16,
    bottom: 180,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#111B25',
    justifyContent: 'center',
    alignItems: 'center',
  },


  /* BOTTOM CARD */

  bottomCard: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 80,
    height: 70,
    backgroundColor: '#111B25',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },


  bottomCardIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#20C878',
    justifyContent: 'center',
    alignItems: 'center',
  },


  bottomCardText: {
    flex: 1,
    marginLeft: 12,
  },


  bottomTitle: {
    color: '#FFFFFF',
    fontFamily: 'outfit-bold',
    fontSize: 15,
  },


  bottomSubtitle: {
    color: '#8B949E',
    fontFamily: 'outfit',
    fontSize: 12,
    marginTop: 2,
  },


  /* BOTTOM NAV */

  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 72,
    backgroundColor: '#071019',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },


  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },


  navText: {
    color: '#8B949E',
    fontFamily: 'outfit',
    fontSize: 11,
  },

  navLabel: {
  color: '#68737D',
  fontFamily: 'outfit',
  fontSize: 11,
  marginTop: 4,
},

activeNavLabel: {
  color: '#20C878',
},


  navTextActive: {
    color: '#20C878',
    fontFamily: 'outfit-medium',
  },

});