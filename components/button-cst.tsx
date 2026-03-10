import { primaryColor } from "@/constants/theme";
import React, { ReactNode } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from "react-native";
import { ThemedText } from "./themed-text";

type Props = {
  label?: string;
  children?: ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const ButtonCst = ({ label, children, onPress, style, textStyle }: Props) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      {children ? (
        children
      ) : (
        <ThemedText
          type="defaultSemiBold"
          style={[{ color: primaryColor }, textStyle]}
        >
          {label}
        </ThemedText>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 24,
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: "#14341610",
    gap: 8,
  },
});

export default ButtonCst;
