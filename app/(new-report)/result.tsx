import Badge from "@/components/badge";
import ButtonCst from "@/components/button-cst";
import HeaderCst from "@/components/header-cst";
import { ThemedText } from "@/components/themed-text";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors, primaryColor } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme.web";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

type Params = {
  image: string;
  description: string;
  latitude: string;
  longitude: string;
  aiResponse: string;
};

const ReportResultScreen = () => {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<Params>();
  const aiResponse = JSON.parse(params.aiResponse);

  return (
    <>
      {/* Header */}
      <SafeAreaView edges={["top"]}>
        <HeaderCst title="AI Analysis Result" />
      </SafeAreaView>

      {/* Body */}
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { backgroundColor: Colors[colorScheme ?? "light"].background },
        ]}
      >
        <View style={styles.imgContainer}>
          <Image
            source={{ uri: params.image }}
            contentFit="contain"
            style={{ width: "100%", flex: 1 }}
          />
        </View>

        {/* POLLUTION SCORE */}
        <View style={styles.scoreContainer}>
          <ThemedText type="title">
            Pollution Score: {aiResponse.pollutionScore || 0}
          </ThemedText>
          <Badge>
            <IconSymbol
              name="exclamationmark.triangle.fill"
              size={20}
              color="red"
            />
            <ThemedText type="defaultSemiBold">Critical</ThemedText>
          </Badge>
        </View>

        {/* AI SUMMARY */}
        <View style={{ gap: 12 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <IconSymbol
              name="exclamationmark.triangle.fill"
              size={24}
              color="black"
            />
            <ThemedText type="title">AI Summary</ThemedText>
          </View>
          <View style={styles.summary}>
            <ThemedText type="default">{aiResponse.summary}</ThemedText>
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={[styles.footer, { paddingBottom: insets.bottom }]}>
        <ButtonCst
          onPress={undefined}
          style={[styles.submitBtn, { backgroundColor: primaryColor + "10" }]}
        >
          <IconSymbol
            name="filemenu.and.cursorarrow"
            size={22}
            color={primaryColor}
          />
          <ThemedText
            type="defaultSemiBold"
            style={[styles.submitBtnText, { color: primaryColor }]}
          >
            Save Draft
          </ThemedText>
        </ButtonCst>
        <ButtonCst
          disabled={!aiResponse?.isValid}
          onPress={undefined}
          style={styles.submitBtn}
        >
          <IconSymbol name="sparkles" size={22} color="white" />
          <ThemedText type="defaultSemiBold" style={styles.submitBtnText}>
            Post Public
          </ThemedText>
        </ButtonCst>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingVertical: 8,
    gap: 24,
  },
  imgContainer: {
    width: "100%",
    aspectRatio: 16 / 9,
    overflow: "hidden",
    borderRadius: 24,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  scoreContainer: { gap: 12, alignItems: "center" },
  summary: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 24,
  },
  footer: {
    padding: 24,
    paddingVertical: 8,
    flexDirection: "row",
    gap: 16,
  },
  submitBtn: {
    backgroundColor: primaryColor,
    paddingVertical: 16,
    justifyContent: "center",
    flex: 1,
  },
  submitBtnText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

export default ReportResultScreen;
