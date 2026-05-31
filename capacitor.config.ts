import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "org.gtasanad.toolkit",
  appName: "GTA SA Toolkit",
  webDir: "out",
  server: {
    androidScheme: "https",
  },
  android: {
    minWebViewVersion: 60,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: false,
      backgroundColor: "#0b0b0f",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
    },
    StatusBar: {
      style: "DARK",
      backgroundColor: "#0b0b0f",
    },
  },
};

export default config;
