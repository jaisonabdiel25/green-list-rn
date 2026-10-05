import { useTheme } from "@/hooks/use-theme";
import { Link, LinkProps } from "expo-router";

interface Props extends LinkProps {}

const ThemedLink = (props: Props) => {
  const { style, ...rest } = props;
  const primaryColor = useTheme();
  return <Link style={[{ color: primaryColor.primary }, style]} {...rest} />;
};

export default ThemedLink;
