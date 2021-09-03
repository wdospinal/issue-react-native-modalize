import * as React from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Modalize } from "react-native-modalize";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

const HEIGHT = Dimensions.get("window").height / 2;

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const modalConfirmationRef = React.useRef<Modalize>(null);
  const animated = React.useRef(new Animated.Value(0)).current;

  const renderContentBuy = () => (
    <Animated.View
      style={[
        styles.content,
        {
          opacity: animated.interpolate({
            inputRange: [0, 0.75],
            outputRange: [1, 0],
          }),
        },
      ]}
    >
      <View style={styles.footerContainer}>
        <View style={styles.footer}>
          <TouchableOpacity testID="openContentBuy" style={{ flex: 1 }}>
            <View style={styles.handleStyle} />
          </TouchableOpacity>
          <View style={styles.headerTextContainer}>
            <Text
              testID="lineLabel"
              style={[styles.lineLabel, styles.paddingHorizontal]}
            >
              FOOD
            </Text>
            <View style={[styles.gatewayContainer, styles.paddingHorizontal]}>
              <Text testID="lineName" style={styles.lineName}>
                DELIVERY
              </Text>
              <Text
                testID="lineNameConnection"
                style={styles.lineNameConnection}
              >
                {"  "}AT YOUR PLATE
              </Text>
            </View>
          </View>
          <View style={[styles.separator, { marginTop: 20 }]} />
          <View style={styles.separator} />
          <View style={styles.paymentContainer}>
            <View style={styles.paymentPriceContainer}>
              <Text style={styles.payment}>Payment method</Text>
              <TouchableOpacity
                activeOpacity={0.8}
                testID="addPaymentButton"
                style={{ flex: 1 }}
              >
                <View style={styles.buttonPaymentStyle}>
                  <Text style={[styles.buttonText, { fontSize: 14 }]}>
                    Add payment
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            testID="addPaymentButton"
            style={{ flex: 1 }}
          >
            <View style={styles.buttonPaymentStyle}>
              <Text style={[styles.buttonText, { fontSize: 14 }]}>
                Add payment
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Text testID="lineNameConnection">
        {"  "}FOOO!
      </Text>
    </Animated.View>
  );
  return (
    <View style={styles.container}>
      <Text>This is an example</Text>
      <Modalize
        ref={modalConfirmationRef}
        alwaysOpen={HEIGHT / 3}
        adjustToContentHeight
        withHandle={false}
        panGestureAnimatedValue={animated}
        snapPoint={HEIGHT}
      >
        {renderContentBuy()}
      </Modalize>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  content: {
    zIndex: 100,
    width: "100%",
    paddingTop: 35,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 18,
  },
  footer: {
    flex: 1,
    width: "100%",
    height: HEIGHT,
    zIndex: 999,
  },
  footerContainer: {
    flex: 1,
    marginTop: -35,
    paddingBottom: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "white",
  },
  handleStyle: {
    top: 13,
    width: 38,
    height: 2,
    backgroundColor: "grey",
    alignSelf: "center",
  },
  headerTextContainer: {
    flex: 2,
    zIndex: 50,
    width: "100%",
  },
  lineLabel: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "400",
    color: "blue",
    zIndex: 80,
  },
  gatewayContainer: {
    flexDirection: "row",
    flex: 2,
    minHeight: 30,
  },
  lineNameConnection: {
    fontWeight: "300",
    fontSize: 20,
    lineHeight: 30,
    color: "grey",
  },
  paddingHorizontal: {
    paddingHorizontal: 26,
  },
  lineName: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 30,
    color: "red",
  },
  paymentContainer: {
    flex: 2,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  buttonPaymentStyle: {
    backgroundColor: "red",
    borderRadius: 39,
    justifyContent: "center",
    alignSelf: "flex-end",
    alignItems: "center",
    width: 118,
    height: 33,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 19,
    color: "white",
  },
  paymentPriceContainer: {
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    marginBottom: 5,
  },
  payment: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "400",
    color: "gray",
  },
});
