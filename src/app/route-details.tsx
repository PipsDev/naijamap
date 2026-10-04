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

export default function RouteDetailsScreen() {
  const { destination, route } = useLocalSearchParams<{
    destination?: string;
    route?: string;
  }>();

  const place = destination || 'Lekki Phase 1';
  const selectedRoute = route || 'fastest';

  const routeInfo = {
    fastest: {
      title: 'Fastest route',
      time: '45 min',
      fare: '₦800',
      description: 'Quickest way to get there',
    },
    cheapest: {
      title: 'Cheapest route',
      time: '1 hr 5 min',
      fare: '₦500',
      description: 'Save money on your trip',
    },
    alternative: {
      title: 'Alternative route',
      time: '55 min',
      fare: '₦650',
      description: 'Another way to get there',
    },
  };

  const currentRoute =
    routeInfo[selectedRoute as keyof typeof routeInfo] ||
    routeInfo.fastest;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Fake map area */}
      <View style={styles.mapArea}>
        {/* Back button */}
        <Pressable
          style={styles.mapBackButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={23} color="#FFFFFF" />
        </Pressable>

        {/* Map route illustration */}
        <View style={styles.mapRoute}>
          <View style={styles.routeLineOne} />
          <View style={styles.routeLineTwo} />
          <View style={styles.routeLineThree} />

          <View style={styles.startMarker}>
            <Ionicons
              name="navigate"
              size={17}
              color="#071019"
            />
          </View>

          <View style={styles.destinationMarker}>
            <Ionicons
              name="location"
              size={19}
              color="#FFFFFF"
            />
          </View>

          <View style={styles.mapLabelStart}>
            <Text style={styles.mapLabelText}>You</Text>
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

      {/* Bottom sheet */}
      <View style={styles.bottomSheet}>
        <View style={styles.dragHandle} />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.sheetContent}
        >
          {/* Destination */}
          <View style={styles.destinationHeader}>
            <View>
              <Text style={styles.toLabel}>TO</Text>
              <Text style={styles.destinationTitle}>
                {place}
              </Text>
            </View>

            <View style={styles.routeBadge}>
              <Ionicons
                name={
                  selectedRoute === 'cheapest'
                    ? 'wallet-outline'
                    : selectedRoute === 'alternative'
                    ? 'git-branch-outline'
                    : 'flash'
                }
                size={16}
                color="#20C878"
              />
              <Text style={styles.routeBadgeText}>
                {currentRoute.title}
              </Text>
            </View>
          </View>

          {/* Time / fare */}
          <View style={styles.summaryCard}>
            <View style={styles.summaryItem}>
              <Ionicons
                name="time-outline"
                size={20}
                color="#20C878"
              />

              <View>
                <Text style={styles.summaryValue}>
                  {currentRoute.time}
                </Text>
                <Text style={styles.summaryLabel}>
                  Estimated time
                </Text>
              </View>
            </View>

            <View style={styles.summaryDivider} />

            <View style={styles.summaryItem}>
              <Ionicons
                name="cash-outline"
                size={20}
                color="#20C878"
              />

              <View>
                <Text style={styles.summaryValue}>
                  {currentRoute.fare}
                </Text>
                <Text style={styles.summaryLabel}>
                  Estimated fare
                </Text>
              </View>
            </View>
          </View>

          {/* Route steps */}
          <Text style={styles.sectionTitle}>Your journey</Text>

          <View style={styles.stepsContainer}>
            {/* Step 1 */}
            <View style={styles.step}>
              <View style={styles.stepTimeline}>
                <View style={styles.stepIcon}>
                  <Ionicons
                    name="walk"
                    size={18}
                    color="#20C878"
                  />
                </View>

                <View style={styles.timelineLine} />
              </View>

              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>
                  Walk to Ikeja Bus Stop
                </Text>

                <Text style={styles.stepDescription}>
                  Walk for about 5 minutes
                </Text>

                <View style={styles.stepMeta}>
                  <Text style={styles.stepMetaText}>
                    5 min
                  </Text>
                </View>
              </View>
            </View>

            {/* Step 2 */}
            <View style={styles.step}>
              <View style={styles.stepTimeline}>
                <View style={[styles.stepIcon, styles.busIcon]}>
                  <Ionicons
                    name="bus"
                    size={18}
                    color="#4DA6FF"
                  />
                </View>

                <View style={styles.timelineLine} />
              </View>

              <View style={styles.stepContent}>
                <View style={styles.transportTitleRow}>
                  <Text style={styles.stepTitle}>
                    Take bus to Oshodi
                  </Text>

                  <View style={styles.transportBadge}>
                    <Text style={styles.transportBadgeText}>
                      BUS
                    </Text>
                  </View>
                </View>

                <Text style={styles.stepDescription}>
                  Board at Ikeja Bus Stop
                </Text>

                <Text style={styles.stepDescription}>
                  Tell the driver you are going to Oshodi
                </Text>

                <View style={styles.stepMeta}>
                  <Text style={styles.stepMetaText}>
                    20 min
                  </Text>

                  <Text style={styles.metaDot}>•</Text>

                  <Text style={styles.stepMetaText}>
                    ₦300
                  </Text>
                </View>
              </View>
            </View>

            {/* Step 3 */}
            <View style={styles.step}>
              <View style={styles.stepTimeline}>
                <View
                  style={[styles.stepIcon, styles.transferIcon]}
                >
                  <Ionicons
                    name="swap-horizontal"
                    size={18}
                    color="#FFB84D"
                  />
                </View>

                <View style={styles.timelineLine} />
              </View>

              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>
                  Change at Oshodi
                </Text>

                <Text style={styles.stepDescription}>
                  Get down and walk to the next bus stop
                </Text>

                <View style={styles.stepMeta}>
                  <Text style={styles.stepMetaText}>
                    5 min
                  </Text>
                </View>
              </View>
            </View>

            {/* Step 4 */}
            <View style={styles.step}>
              <View style={styles.stepTimeline}>
                <View style={[styles.stepIcon, styles.busIcon]}>
                  <Ionicons
                    name="bus"
                    size={18}
                    color="#4DA6FF"
                  />
                </View>

                <View style={styles.timelineLine} />
              </View>

              <View style={styles.stepContent}>
                <View style={styles.transportTitleRow}>
                  <Text style={styles.stepTitle}>
                    Take bus to {place}
                  </Text>

                  <View style={styles.transportBadge}>
                    <Text style={styles.transportBadgeText}>
                      BUS
                    </Text>
                  </View>
                </View>

                <Text style={styles.stepDescription}>
                  Board the bus heading towards your destination
                </Text>

                <View style={styles.stepMeta}>
                  <Text style={styles.stepMetaText}>
                    15 min
                  </Text>

                  <Text style={styles.metaDot}>•</Text>

                  <Text style={styles.stepMetaText}>
                    ₦500
                  </Text>
                </View>
              </View>
            </View>

            {/* Destination */}
            <View style={styles.step}>
              <View style={styles.stepTimeline}>
                <View
                  style={[
                    styles.stepIcon,
                    styles.destinationIcon,
                  ]}
                >
                  <Ionicons
                    name="location"
                    size={18}
                    color="#FFFFFF"
                  />
                </View>
              </View>

              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>
                  Arrive at {place}
                </Text>

                <Text style={styles.stepDescription}>
                  You have arrived at your destination
                </Text>
              </View>
            </View>
          </View>

          {/* Start navigation */}
          <Pressable
            style={styles.navigationButton}
            onPress={() =>
              router.push({
                pathname: '/navigation',
                params: {
                  destination: place,
                  route: selectedRoute,
                },
              })
            }
          >
            <Ionicons
              name="navigate"
              size={20}
              color="#071019"
            />

            <Text style={styles.navigationButtonText}>
              Start Navigation
            </Text>
          </Pressable>

          <Pressable style={styles.saveRouteButton}>
            <Ionicons
              name="bookmark-outline"
              size={19}
              color="#20C878"
            />

            <Text style={styles.saveRouteText}>
              Save this route
            </Text>
          </Pressable>

          <View style={styles.warningBox}>
            <Ionicons
              name="information-circle-outline"
              size={19}
              color="#20C878"
            />

            <Text style={styles.warningText}>
              Times and fares are estimates. Actual fares may
              vary depending on traffic, route conditions and
              current transport prices.
            </Text>
          </View>
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
    height: '42%',
    backgroundColor: '#15242D',
    position: 'relative',
    overflow: 'hidden',
  },

  mapBackButton: {
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

  mapControls: {
    position: 'absolute',
    right: 16,
    top: 55,
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

  mapRoute: {
    flex: 1,
    position: 'relative',
  },

  routeLineOne: {
    position: 'absolute',
    width: 5,
    height: 150,
    backgroundColor: '#20C878',
    transform: [
      {
        rotate: '45deg',
      },
    ],
    top: 95,
    left: 125,
    borderRadius: 5,
  },

  routeLineTwo: {
    position: 'absolute',
    width: 5,
    height: 135,
    backgroundColor: '#20C878',
    transform: [
      {
        rotate: '-50deg',
      },
    ],
    top: 165,
    left: 200,
    borderRadius: 5,
  },

  routeLineThree: {
    position: 'absolute',
    width: 5,
    height: 100,
    backgroundColor: '#20C878',
    transform: [
      {
        rotate: '35deg',
      },
    ],
    top: 235,
    left: 275,
    borderRadius: 5,
  },

  startMarker: {
    position: 'absolute',
    top: 105,
    left: 105,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#20C878',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#0D1A22',
  },

  destinationMarker: {
    position: 'absolute',
    top: 285,
    right: 70,
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#E05252',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#0D1A22',
  },

  mapLabelStart: {
    position: 'absolute',
    top: 153,
    left: 92,
    backgroundColor: '#111B25',
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 8,
  },

  mapLabelDestination: {
    position: 'absolute',
    top: 335,
    right: 38,
    backgroundColor: '#111B25',
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 8,
  },

  mapLabelText: {
    color: '#FFFFFF',
    fontFamily: 'outfit-medium',
    fontSize: 10,
  },

  bottomSheet: {
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
    marginBottom: 3,
  },

  sheetContent: {
    paddingHorizontal: 16,
    paddingTop: 15,
    paddingBottom: 35,
  },

  destinationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  toLabel: {
    color: '#68737D',
    fontFamily: 'outfit-medium',
    fontSize: 10,
    letterSpacing: 1,
  },

  destinationTitle: {
    color: '#FFFFFF',
    fontFamily: 'outfit-bold',
    fontSize: 20,
    marginTop: 3,
  },

  routeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#10271F',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
  },

  routeBadgeText: {
    color: '#20C878',
    fontFamily: 'outfit-medium',
    fontSize: 10,
    marginLeft: 5,
  },

  summaryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111B25',
    borderRadius: 16,
    padding: 15,
    marginTop: 15,
  },

  summaryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 9,
  },

  summaryValue: {
    color: '#FFFFFF',
    fontFamily: 'outfit-medium',
    fontSize: 14,
  },

  summaryLabel: {
    color: '#68737D',
    fontFamily: 'outfit',
    fontSize: 10,
    marginTop: 2,
  },

  summaryDivider: {
    width: 1,
    height: 30,
    backgroundColor: '#293640',
    marginHorizontal: 12,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontFamily: 'outfit-medium',
    fontSize: 15,
    marginTop: 23,
    marginBottom: 13,
  },

  stepsContainer: {
    backgroundColor: '#111B25',
    borderRadius: 18,
    padding: 16,
  },

  step: {
    flexDirection: 'row',
    minHeight: 74,
  },

  stepTimeline: {
    width: 43,
    alignItems: 'center',
  },

  stepIcon: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: '#10271F',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },

  busIcon: {
    backgroundColor: '#102237',
  },

  transferIcon: {
    backgroundColor: '#2D2415',
  },

  destinationIcon: {
    backgroundColor: '#26343D',
  },

  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#293640',
    marginTop: -1,
  },

  stepContent: {
    flex: 1,
    paddingLeft: 10,
    paddingBottom: 18,
  },

  stepTitle: {
    color: '#FFFFFF',
    fontFamily: 'outfit-medium',
    fontSize: 13,
    marginTop: 2,
  },

  stepDescription: {
    color: '#68737D',
    fontFamily: 'outfit',
    fontSize: 11,
    lineHeight: 16,
    marginTop: 4,
  },

  transportTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  transportBadge: {
    backgroundColor: '#102237',
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 6,
    marginLeft: 8,
  },

  transportBadgeText: {
    color: '#4DA6FF',
    fontFamily: 'outfit-medium',
    fontSize: 8,
  },

  stepMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },

  stepMetaText: {
    color: '#20C878',
    fontFamily: 'outfit-medium',
    fontSize: 10,
  },

  metaDot: {
    color: '#68737D',
    marginHorizontal: 6,
    fontSize: 10,
  },

  navigationButton: {
    height: 53,
    backgroundColor: '#20C878',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
  },

  navigationButtonText: {
    color: '#071019',
    fontFamily: 'outfit-bold',
    fontSize: 14,
    marginLeft: 8,
  },

  saveRouteButton: {
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#20302A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  saveRouteText: {
    color: '#20C878',
    fontFamily: 'outfit-medium',
    fontSize: 13,
    marginLeft: 7,
  },

  warningBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#0D1A22',
    borderRadius: 13,
    padding: 12,
    marginTop: 12,
  },

  warningText: {
    flex: 1,
    color: '#68737D',
    fontFamily: 'outfit',
    fontSize: 10,
    lineHeight: 15,
    marginLeft: 8,
  },
});