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

export default function RoutesScreen() {
  const { destination } = useLocalSearchParams<{
    destination?: string;
  }>();

  const place = destination || 'Lekki Phase 1';

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Header */}
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={23} color="#FFFFFF" />
        </Pressable>

        <View style={styles.headerText}>
          <Text style={styles.headerTitle}>Route Options</Text>
          <Text style={styles.headerSubtitle}>
            Find the best way to get there
          </Text>
        </View>
      </View>

      {/* From / To */}
      <View style={styles.locationCard}>
        <View style={styles.locationRow}>
          <View style={styles.locationDot}>
            <Ionicons
              name="navigate"
              size={17}
              color="#20C878"
            />
          </View>

          <View style={styles.locationInfo}>
            <Text style={styles.locationLabel}>FROM</Text>
            <Text style={styles.locationValue}>
              Current location
            </Text>
          </View>
        </View>

        <View style={styles.connector} />

        <View style={styles.locationRow}>
          <View style={styles.destinationDot}>
            <Ionicons
              name="location"
              size={17}
              color="#FFFFFF"
            />
          </View>

          <View style={styles.locationInfo}>
            <Text style={styles.locationLabel}>TO</Text>
            <Text style={styles.locationValue}>{place}</Text>
          </View>
        </View>
      </View>

      {/* Transport filters */}
      <View style={styles.filterSection}>
        <Text style={styles.sectionTitle}>Transport</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterList}
        >
          <Pressable style={[styles.filter, styles.activeFilter]}>
            <Ionicons name="apps" size={17} color="#071019" />
            <Text style={styles.activeFilterText}>All</Text>
          </Pressable>

          <Pressable style={styles.filter}>
            <Ionicons name="bus" size={17} color="#20C878" />
            <Text style={styles.filterText}>Bus</Text>
          </Pressable>

          <Pressable style={styles.filter}>
            <Ionicons name="car" size={17} color="#20C878" />
            <Text style={styles.filterText}>Minibus</Text>
          </Pressable>

          <Pressable style={styles.filter}>
            <Ionicons
              name="bicycle"
              size={17}
              color="#20C878"
            />
            <Text style={styles.filterText}>Tricycle</Text>
          </Pressable>
        </ScrollView>
      </View>

      {/* Route heading */}
      <View style={styles.routesHeader}>
        <Text style={styles.sectionTitle}>Available routes</Text>
        <Text style={styles.routeCount}>3 routes</Text>
      </View>

      {/* Route cards */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.routesList}
      >
        {/* Fastest */}
        <Pressable
          style={styles.routeCard}
          onPress={() =>
            router.push({
              pathname: '/route-details',
              params: {
                destination: place,
                route: 'fastest',
              },
            })
          }
        >
          <View style={styles.routeTop}>
            <View style={styles.routeTitleRow}>
              <View style={styles.routeIcon}>
                <Ionicons
                  name="flash"
                  size={20}
                  color="#20C878"
                />
              </View>

              <View>
                <Text style={styles.routeTitle}>Fastest</Text>
                <Text style={styles.routeSubtitle}>
                  Quickest route
                </Text>
              </View>
            </View>

            <View style={styles.recommendedBadge}>
              <Text style={styles.recommendedText}>
                Recommended
              </Text>
            </View>
          </View>

          <View style={styles.routeStats}>
            <View>
              <Text style={styles.statValue}>45 min</Text>
              <Text style={styles.statLabel}>Estimated time</Text>
            </View>

            <View style={styles.statDivider} />

            <View>
              <Text style={styles.statValue}>₦800</Text>
              <Text style={styles.statLabel}>Estimated fare</Text>
            </View>

            <View style={styles.arrowContainer}>
              <Ionicons
                name="chevron-forward"
                size={20}
                color="#68737D"
              />
            </View>
          </View>

          <View style={styles.routePath}>
            <View style={styles.pathPoint}>
              <View style={styles.greenDot} />
              <Text style={styles.pathText}>
                Walk to Ikeja Bus Stop
              </Text>
            </View>

            <Ionicons
              name="arrow-forward"
              size={15}
              color="#68737D"
            />

            <View style={styles.pathPoint}>
              <View style={styles.blueDot} />
              <Text style={styles.pathText}>Bus to Oshodi</Text>
            </View>

            <Ionicons
              name="arrow-forward"
              size={15}
              color="#68737D"
            />

            <View style={styles.pathPoint}>
              <View style={styles.orangeDot} />
              <Text style={styles.pathText}>Bus to {place}</Text>
            </View>
          </View>
        </Pressable>

        {/* Cheapest */}
        <Pressable
          style={styles.routeCard}
          onPress={() =>
            router.push({
              pathname: '/route-details',
              params: {
                destination: place,
                route: 'cheapest',
              },
            })
          }
        >
          <View style={styles.routeTop}>
            <View style={styles.routeTitleRow}>
              <View style={styles.routeIcon}>
                <Ionicons
                  name="wallet-outline"
                  size={20}
                  color="#20C878"
                />
              </View>

              <View>
                <Text style={styles.routeTitle}>Cheapest</Text>
                <Text style={styles.routeSubtitle}>
                  Save money
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.routeStats}>
            <View>
              <Text style={styles.statValue}>1 hr 5 min</Text>
              <Text style={styles.statLabel}>Estimated time</Text>
            </View>

            <View style={styles.statDivider} />

            <View>
              <Text style={styles.statValue}>₦500</Text>
              <Text style={styles.statLabel}>Estimated fare</Text>
            </View>

            <View style={styles.arrowContainer}>
              <Ionicons
                name="chevron-forward"
                size={20}
                color="#68737D"
              />
            </View>
          </View>

          <View style={styles.routePath}>
            <View style={styles.pathPoint}>
              <View style={styles.greenDot} />
              <Text style={styles.pathText}>
                Walk to Ikeja
              </Text>
            </View>

            <Ionicons
              name="arrow-forward"
              size={15}
              color="#68737D"
            />

            <View style={styles.pathPoint}>
              <View style={styles.blueDot} />
              <Text style={styles.pathText}>Bus to Oshodi</Text>
            </View>

            <Ionicons
              name="arrow-forward"
              size={15}
              color="#68737D"
            />

            <View style={styles.pathPoint}>
              <View style={styles.orangeDot} />
              <Text style={styles.pathText}>Bus to {place}</Text>
            </View>
          </View>
        </Pressable>

        {/* Alternative */}
        <Pressable
          style={styles.routeCard}
          onPress={() =>
            router.push({
              pathname: '/route-details',
              params: {
                destination: place,
                route: 'alternative',
              },
            })
          }
        >
          <View style={styles.routeTop}>
            <View style={styles.routeTitleRow}>
              <View style={styles.routeIcon}>
                <Ionicons
                  name="git-branch-outline"
                  size={20}
                  color="#20C878"
                />
              </View>

              <View>
                <Text style={styles.routeTitle}>
                  Alternative
                </Text>
                <Text style={styles.routeSubtitle}>
                  Another way to go
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.routeStats}>
            <View>
              <Text style={styles.statValue}>55 min</Text>
              <Text style={styles.statLabel}>Estimated time</Text>
            </View>

            <View style={styles.statDivider} />

            <View>
              <Text style={styles.statValue}>₦650</Text>
              <Text style={styles.statLabel}>Estimated fare</Text>
            </View>

            <View style={styles.arrowContainer}>
              <Ionicons
                name="chevron-forward"
                size={20}
                color="#68737D"
              />
            </View>
          </View>

          <View style={styles.routePath}>
            <View style={styles.pathPoint}>
              <View style={styles.greenDot} />
              <Text style={styles.pathText}>
                Walk to Ikeja
              </Text>
            </View>

            <Ionicons
              name="arrow-forward"
              size={15}
              color="#68737D"
            />

            <View style={styles.pathPoint}>
              <View style={styles.blueDot} />
              <Text style={styles.pathText}>Bus to CMS</Text>
            </View>

            <Ionicons
              name="arrow-forward"
              size={15}
              color="#68737D"
            />

            <View style={styles.pathPoint}>
              <View style={styles.orangeDot} />
              <Text style={styles.pathText}>Bus to {place}</Text>
            </View>
          </View>
        </Pressable>

        <View style={styles.infoBox}>
          <Ionicons
            name="information-circle-outline"
            size={20}
            color="#20C878"
          />

          <Text style={styles.infoText}>
            Times and fares are estimates and may change
            depending on traffic and transport fares.
          </Text>
        </View>
      </ScrollView>
    </View>
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

  headerText: {
    flex: 1,
  },

  headerTitle: {
    color: '#FFFFFF',
    fontFamily: 'outfit-bold',
    fontSize: 21,
  },

  headerSubtitle: {
    color: '#8B949E',
    fontFamily: 'outfit',
    fontSize: 12,
    marginTop: 3,
  },

  locationCard: {
    backgroundColor: '#111B25',
    borderRadius: 18,
    padding: 16,
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  locationDot: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#10271F',
    justifyContent: 'center',
    alignItems: 'center',
  },

  destinationDot: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#20313D',
    justifyContent: 'center',
    alignItems: 'center',
  },

  locationInfo: {
    marginLeft: 12,
    flex: 1,
  },

  locationLabel: {
    color: '#68737D',
    fontFamily: 'outfit-medium',
    fontSize: 10,
    letterSpacing: 1,
  },

  locationValue: {
    color: '#FFFFFF',
    fontFamily: 'outfit-medium',
    fontSize: 14,
    marginTop: 3,
  },

  connector: {
    width: 1,
    height: 16,
    backgroundColor: '#34414B',
    marginLeft: 19,
    marginVertical: 3,
  },

  filterSection: {
    marginTop: 20,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontFamily: 'outfit-medium',
    fontSize: 15,
    marginBottom: 10,
  },

  filterList: {
    gap: 9,
  },

  filter: {
    height: 40,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: '#111B25',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },

  activeFilter: {
    backgroundColor: '#20C878',
  },

  filterText: {
    color: '#FFFFFF',
    fontFamily: 'outfit-medium',
    fontSize: 13,
  },

  activeFilterText: {
    color: '#071019',
    fontFamily: 'outfit-medium',
    fontSize: 13,
  },

  routesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 22,
  },

  routeCount: {
    color: '#68737D',
    fontFamily: 'outfit',
    fontSize: 12,
  },

  routesList: {
    paddingBottom: 30,
  },

  routeCard: {
    backgroundColor: '#111B25',
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
  },

  routeTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  routeTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  routeIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#10271F',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 11,
  },

  routeTitle: {
    color: '#FFFFFF',
    fontFamily: 'outfit-medium',
    fontSize: 15,
  },

  routeSubtitle: {
    color: '#68737D',
    fontFamily: 'outfit',
    fontSize: 11,
    marginTop: 3,
  },

  recommendedBadge: {
    backgroundColor: '#10271F',
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 8,
  },

  recommendedText: {
    color: '#20C878',
    fontFamily: 'outfit-medium',
    fontSize: 9,
  },

  routeStats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 17,
  },

  statValue: {
    color: '#FFFFFF',
    fontFamily: 'outfit-medium',
    fontSize: 14,
  },

  statLabel: {
    color: '#68737D',
    fontFamily: 'outfit',
    fontSize: 10,
    marginTop: 3,
  },

  statDivider: {
    width: 1,
    height: 28,
    backgroundColor: '#293640',
    marginHorizontal: 22,
  },

  arrowContainer: {
    marginLeft: 'auto',
  },

  routePath: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 17,
    paddingTop: 13,
    borderTopWidth: 1,
    borderTopColor: '#202C35',
    gap: 7,
  },

  pathPoint: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
  },

  greenDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#20C878',
    marginRight: 5,
  },

  blueDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#4DA6FF',
    marginRight: 5,
  },

  orangeDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#FF9F43',
    marginRight: 5,
  },

  pathText: {
    color: '#9BA5AE',
    fontFamily: 'outfit',
    fontSize: 9,
    flexShrink: 1,
  },

  infoBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#0D1A22',
    borderRadius: 14,
    padding: 13,
    marginTop: 4,
    marginBottom: 20,
  },

  infoText: {
    flex: 1,
    color: '#68737D',
    fontFamily: 'outfit',
    fontSize: 11,
    lineHeight: 17,
    marginLeft: 9,
  },
});