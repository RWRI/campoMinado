import { useColorScheme } from "@/hooks/useColorScheme.web";
import { Stack } from "expo-router";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="game" />
    </Stack>
  );
}
