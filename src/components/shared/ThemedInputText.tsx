import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

interface Props extends TextInputProps {
  icon?: keyof typeof Ionicons.glyphMap;
  isError?: boolean;
}

const ThemedInputText = (props: Props) => {
  const { icon, isError = false, style, onFocus, onBlur, ...rest } = props;

  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const {
    primary: primaryColor,
    text: textColor,
    error: errorColor,
  } = useTheme();

  // El error tiene prioridad sobre el foco para que no se pierda al editar.
  const borderColor = isError ? errorColor : isActive ? primaryColor : "#ccc";

  return (
    <View
      style={{
        ...styles.border,
        borderColor,
      }}
      onTouchStart={() => {
        inputRef.current?.focus();
      }}
    >
      {icon && (
        <Ionicons
          name={icon}
          size={24}
          color={textColor}
          style={{ marginRight: 10 }}
        />
      )}
      <TextInput
        ref={inputRef}
        style={[styles.input, style]}
        {...rest}
        onFocus={(e) => {
          setIsActive(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsActive(false);
          onBlur?.(e);
        }}
      />
    </View>
  );
};

export default ThemedInputText;

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});
