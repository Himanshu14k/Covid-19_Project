import * as React from "react";
import { View, Image, StyleSheet } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.splashWrapper}>
      <Image style={styles.icon} source={require("../../assets/Splash.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  splashWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DEF7FF",
  },
  icon: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
});

export default SplashScreen;
