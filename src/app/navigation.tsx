import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

export default function NavigationScreen() {
  const { destination, route } = useLocalSearchParams<{
    destination?: string;
    route?: string;
  }>();

  const place = destination || 'Lekki Phase 1';

  const currentRoute = route || 'fastest';

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Map Area */}
      <View style={styles.mapArea}>
        {/* Back button */}
        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={23} color="#FFFFFF" />
        </Pressable>

        {/* Route information */}
        <View style={styles.topRouteCard}>
          <View style={styles.routeDirectionIcon}>
            <Ionicons
              name="arrow-forward"
              size={20}
              color="#071019"
            />
          </View>

          <View style={styles.routeDirectionText}>
            <Text style={styles.nextInstruction}>
              Head towards Oshodi
            </Text>

            <Text style={styles.instructionDistance}>
              Continue for 2.4 km
            </Text>
          </View>
        </View>

        {/* Fake route on map */}
        <View style={styles.mapRoute}>
          <View style={styles.mapRoadOne} />
          <View style={styles.mapRoadTwo} />
          <View style={styles.mapRoadThree} />

          {/* Current position */}
          <View style={styles.currentLocationMarker}>
            <View style={styles.currentLocationPulse} />
            <View style={styles.currentLocationDot} />
          </View>

          {/* Transport point */}
          <View style={styles.transportMarker}>
            <Ionicons
              name="bus"
              size={17}
              color="#071019"
            />
          </View>

          {/* Destination */}
          <View style={styles.destinationMarker}>
            <Ionicons
              name="location"
              size={19}
              color="#FFFFFF"
            />
          </View>

          <View style={styles.mapLabelCurrent}>
            <Text style={styles.mapLabelText}>You</Text>
          </View>

          <View style={styles.mapLabelTransport}>
            <Text style={styles.mapLabelText}>Bus stop</Text>
          </View>

          <View style={styles.mapLabelDestination}>
            <Text style={styles.mapLabelText}>{place}</Text>
          </View>
        </View>

        {/* Map controls */}
        <View style={styles.mapControls}>
          <Pressable style={styles.mapControl}>
            <Ionicons
              name="locate-outline"
              size={21}
              color="#FFFFFF"
            />
          </Pressable>

          <Pressable style={styles.mapControl}>
            <Ionicons
              name="layers-outline"
              size={21}
              color="#FFFFFF"
            />
          </Pressable>
        </View>
      </View>

      {/* Bottom navigation panel */}
      <View style={styles.bottomPanel}>
        <View style={styles.dragHandle} />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.panelContent}
        >
          {/* Trip summary */}
          <View style={styles.tripHeader}>
            <View>
              <Text style={styles.goingTo}>GOING TO</Text>

              <Text style={styles.destinationTitle}>
                {place}
              </Text>
            </View>

            <View style={styles.routeType}>
              <Ionicons
                name={
                  currentRoute === 'cheapest'
                    ? 'wallet-outline'
                    : currentRoute === 'alternative'
                    ? 'git-branch-outline'
                    : 'flash'
                }
                size={16}
                color="#20C878"
              />

              <Text style={styles.routeTypeText}>
                {currentRoute === 'cheapest'
                  ? 'Cheapest'
                  : currentRoute === 'alternative'
                  ? 'Alternative'
                  : 'Fastest'}
              </Text>
            </View>
          </View>

          {/* Trip stats */}
          <View style={styles.statsCard}>
            <View style={styles.stat}>
              <Ionicons
                name="time-outline"
                size={19}
                color="#20C878"
              />

              <View>
                <Text style={styles.statValue}>45 min</Text>
                <Text style={styles.statLabel}>
                  Remaining
                </Text>
              </View>
            </View>

            <View style={styles.statDivider} />

            <View style={styles.stat}>
              <Ionicons
                name="walk-outline"
                size={19}
                color="#20C878"
              />

              <View>
                <Text style={styles.statValue}>2.4 km</Text>
                <Text style={styles.statLabel}>
                  Distance
                </Text>
              </View>
            </View>

            <View style={styles.statDivider} />

            <View style={styles.stat}>
              <Ionicons
                name="cash-outline"
                size={19}
                color="#20C878"
              />

              <View>
                <Text style={styles.statValue}>₦800</Text>
                <Text style={styles.statLabel}>
                  Est. fare
                </Text>
              </View>
            </View>
          </View>

          {/* Current step */}
          <Text style={styles.sectionTitle}>
            Current step
          </Text>

          <View style={styles.currentStepCard}>
            <View style={styles.currentStepIcon}>
              <Ionicons
                name="walk"
                size={21}
                color="#20C878"
              />
            </View>

            <View style={styles.currentStepContent}>
              <Text style={styles.currentStepTitle}>
                Walk towards Oshodi Bus Stop
              </Text>

              <Text style={styles.currentStepDescription}>
                Follow the route on the map. Your next
                transport connection is at Oshodi.
              </Text>

              <View style={styles.currentStepMeta}>
                <Text style={styles.metaText}>
                  5 min walk
                </Text>

                <Text style={styles.metaDot}>•</Text>

                <Text style={styles.metaText}>
                  400 m
                </Text>
              </View>
            </View>
          </View>

          {/* Upcoming steps */}
          <Text style={styles.sectionTitle}>
            Up next
          </Text>

          <View style={styles.upcomingCard}>
            {/* Bus */}
            <View style={styles.upcomingStep}>
              <View
                style={[
                  styles.upcomingIcon,
                  styles.busBackground,
                ]}
              >
                <Ionicons
                  name="bus"
                  size={18}
                  color="#4DA6FF"
                />
              </View>

              <View style={styles.upcomingContent}>
                <Text style={styles.upcomingTitle}>
                  Take bus to Oshodi
                </Text>

                <Text style={styles.upcomingDescription}>
                  Board at Oshodi Bus Stop
                </Text>
              </View>

              <Text style={styles.upcomingTime}>
                20 min
              </Text>
            </View>

            <View style={styles.upcomingLine} />

            {/* Transfer */}
            <View style={styles.upcomingStep}>
              <View
                style={[
                  styles.upcomingIcon,
                  styles.transferBackground,
                ]}
              >
                <Ionicons
                  name="swap-horizontal"
                  size={18}
                  color="#FFB84D"
                />
              </View>

              <View style={styles.upcomingContent}>
                <Text style={styles.upcomingTitle}>
                  Change transport
                </Text>

                <Text style={styles.upcomingDescription}>
                  Transfer at Oshodi
                </Text>
              </View>
            </View>

            <View style={styles.upcomingLine} />

            {/* Destination */}
            <View style={styles.upcomingStep}>
              <View
                style={[
                  styles.upcomingIcon,
                  styles.destinationBackground,
                ]}
              >
                <Ionicons
                  name="location"
                  size={18}
                  color="#FFFFFF"
                />
              </View>

              <View style={styles.upcomingContent}>
                <Text style={styles.upcomingTitle}>
                  Arrive at {place}
                </Text>

                <Text style={styles.upcomingDescription}>
                  Your destination
                </Text>
              </View>
            </View>
          </View>

          {/* End navigation */}
          <Pressable
            style={styles.endButton}
            onPress={() => router.replace('/')}
          >
            <Ionicons
              name="close-circle-outline"
              size={20}
              color="#FF6B6B"
            />

            <Text style={styles.endButtonText}>
              End Navigation
            </Text>
          </Pressable>

          <Pressable style={styles.reportButton}>
            <Ionicons
              name="flag-outline"
              size={18}
              color="#68737D"
            />

            <Text style={styles.reportButtonText}>
              Report a problem with this route
            </Text>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071019',
  },

  mapArea: {
    height: '48%',
    backgroundColor: '#15242D',
    position: 'relative',
    overflow: 'hidden',
  },

  backButton: {
    position: 'absolute',
    top: 55,
    left: 16,
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#111B25',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },

  topRouteCard: {
    position: 'absolute',
    top: 55,
    left: 70,
    right: 16,
    height: 60,
    backgroundColor: '#111B25',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    zIndex: 10,
  },

  routeDirectionIcon: {
    width: 36,
    height: 36,
    borderRadius: 11,
    backgroundColor: '#20C878',
    justifyContent: 'center',
    alignItems: 'center',
  },

  routeDirectionText: {
    marginLeft: 10,
  },

  nextInstruction: {
    color: '#FFFFFF',
    fontFamily: 'outfit-medium',
    fontSize: 13,
  },

  instructionDistance: {
    color: '#68737D',
    fontFamily: 'outfit',
    fontSize: 10,
    marginTop: 3,
  },

  mapRoute: {
    flex: 1,
    position: 'relative',
  },

  mapRoadOne: {
    position: 'absolute',
    width: 5,
    height: 180,
    backgroundColor: '#20C878',
    transform: [{ rotate: '38deg' }],
    top: 135,
    left: 100,
    borderRadius: 5,
  },

  mapRoadTwo: {
    position: 'absolute',
    width: 5,
    height: 145,
    backgroundColor: '#20C878',
    transform: [{ rotate: '-52deg' }],
    top: 205,
    left: 190,
    borderRadius: 5,
  },

  mapRoadThree: {
    position: 'absolute',
    width: 5,
    height: 110,
    backgroundColor: '#20C878',
    transform: [{ rotate: '35deg' }],
    top: 270,
    left: 260,
    borderRadius: 5,
  },

  currentLocationMarker: {
    position: 'absolute',
    top: 150,
    left: 85,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  currentLocationPulse: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#20C878',
    opacity: 0.25,
  },

  currentLocationDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#20C878',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },

  transportMarker: {
    position: 'absolute',
    top: 230,
    left: 195,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4DA6FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#15242D',
  },

  destinationMarker: {
    position: 'absolute',
    top: 310,
    right: 55,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#E05252',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#15242D',
  },

  mapLabelCurrent: {
    position: 'absolute',
    top: 185,
    left: 75,
    backgroundColor: '#111B25',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 7,
  },

  mapLabelTransport: {
    position: 'absolute',
    top: 276,
    left: 165,
    backgroundColor: '#111B25',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 7,
  },

  mapLabelDestination: {
    position: 'absolute',
    top: 360,
    right: 20,
    backgroundColor: '#111B25',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 7,
  },

  mapLabelText: {
    color: '#FFFFFF',
    fontFamily: 'outfit-medium',
    fontSize: 9,
  },

  mapControls: {
    position: 'absolute',
    right: 16,
    bottom: 20,
    gap: 9,
  },

  mapControl: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#111B25',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomPanel: {
    flex: 1,
    backgroundColor: '#071019',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -18,
    zIndex: 5,
  },

  dragHandle: {
    width: 42,
    height: 4,
    borderRadius: 3,
    backgroundColor: '#34414B',
    alignSelf: 'center',
    marginTop: 10,
  },

  panelContent: {
    paddingHorizontal: 16,
    paddingTop: 15,
    paddingBottom: 30,
  },

  tripHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  goingTo: {
    color: '#68737D',
    fontFamily: 'outfit-medium',
    fontSize: 9,
    letterSpacing: 1,
  },

  destinationTitle: {
    color: '#FFFFFF',
    fontFamily: 'outfit-bold',
    fontSize: 19,
    marginTop: 3,
  },

  routeType: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#10271F',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 9,
  },

  routeTypeText: {
    color: '#20C878',
    fontFamily: 'outfit-medium',
    fontSize: 10,
    marginLeft: 5,
  },

  statsCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111B25',
    borderRadius: 16,
    padding: 14,
    marginTop: 14,
  },

  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 7,
  },

  statValue: {
    color: '#FFFFFF',
    fontFamily: 'outfit-medium',
    fontSize: 12,
  },

  statLabel: {
    color: '#68737D',
    fontFamily: 'outfit',
    fontSize: 9,
    marginTop: 2,
  },

  statDivider: {
    width: 1,
    height: 28,
    backgroundColor: '#293640',
    marginHorizontal: 7,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontFamily: 'outfit-medium',
    fontSize: 15,
    marginTop: 20,
    marginBottom: 11,
  },

  currentStepCard: {
    backgroundColor: '#111B25',
    borderRadius: 17,
    padding: 15,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#1B4C39',
  },

  currentStepIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#10271F',
    justifyContent: 'center',
    alignItems: 'center',
  },

  currentStepContent: {
    flex: 1,
    marginLeft: 11,
  },

  currentStepTitle: {
    color: '#FFFFFF',
    fontFamily: 'outfit-medium',
    fontSize: 13,
  },

  currentStepDescription: {
    color: '#68737D',
    fontFamily: 'outfit',
    fontSize: 10,
    lineHeight: 15,
    marginTop: 4,
  },

  currentStepMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },

  metaText: {
    color: '#20C878',
    fontFamily: 'outfit-medium',
    fontSize: 10,
  },

  metaDot: {
    color: '#68737D',
    marginHorizontal: 6,
    fontSize: 10,
  },

  upcomingCard: {
    backgroundColor: '#111B25',
    borderRadius: 17,
    padding: 15,
  },

  upcomingStep: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  upcomingIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  busBackground: {
    backgroundColor: '#102237',
  },

  transferBackground: {
    backgroundColor: '#2D2415',
  },

  destinationBackground: {
    backgroundColor: '#26343D',
  },

  upcomingContent: {
    flex: 1,
    marginLeft: 10,
  },

  upcomingTitle: {
    color: '#FFFFFF',
    fontFamily: 'outfit-medium',
    fontSize: 12,
  },

  upcomingDescription: {
    color: '#68737D',
    fontFamily: 'outfit',
    fontSize: 10,
    marginTop: 3,
  },

  upcomingTime: {
    color: '#68737D',
    fontFamily: 'outfit',
    fontSize: 10,
  },

  upcomingLine: {
    width: 2,
    height: 20,
    backgroundColor: '#293640',
    marginLeft: 18,
  },

  endButton: {
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#3B2929',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },

  endButtonText: {
    color: '#FF6B6B',
    fontFamily: 'outfit-medium',
    fontSize: 13,
    marginLeft: 7,
  },

  reportButton: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  reportButtonText: {
    color: '#68737D',
    fontFamily: 'outfit',
    fontSize: 11,
    marginLeft: 6,
  },
});