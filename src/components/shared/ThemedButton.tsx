import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import { PressableProps, StyleSheet } from "react-native";
import { Button } from "../ui/button";
import { Text } from "../ui/text";

type size = "default" | "icon" | "lg" | "sm" | null;
interface Props extends PressableProps {
  children: string;
  icon?: keyof typeof Ionicons.glyphMap;
  size?: size;
}

const ThemedButton = (props: Props) => {
  const { icon, children, size = "default", ...rest } = props;
  const primaryColor = useTheme().primary;

  return (
    <Button
      size={size}
      style={({ pressed }) => [
        { backgroundColor: primaryColor, opacity: pressed ? 0.7 : 1 },
        styles.button,
      ]}
      {...rest}
    >
      <Text className="text-white">{children}</Text>
      {icon && (
        <Ionicons
          name={icon}
          size={20}
          color={"white"}
          style={{ marginHorizontal: 10 }}
        />
      )}
    </Button>
  );
};

export default ThemedButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
});
