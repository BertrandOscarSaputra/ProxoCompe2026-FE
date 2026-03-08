import { primaryColor } from "@/constants/theme";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { IconSymbol } from "./ui/icon-symbol";

const NewReportTab = () => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push("/new-report")}
      style={styles.container}
    >
      <IconSymbol name="plus" size={32} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    alignSelf: "center",
    bottom: 36,
    backgroundColor: primaryColor,
    padding: 8,
    borderRadius: "50%",
  },
});

export default NewReportTab;
