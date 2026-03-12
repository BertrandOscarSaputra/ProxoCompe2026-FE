import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const App = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/welcome");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/splash-icon.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>TilikKota</Text>

      <Text style={styles.subtitle}>For the Greater Future</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3E8D3",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 200,
    height: 200,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1C3D2F",
    marginTop: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#7C9A8B",
    marginTop: 10,
  },
});
