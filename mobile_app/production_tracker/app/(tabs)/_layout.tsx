import React from "react";
import { Pressable, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link, Tabs } from "expo-router";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarPosition: "top",
        tabBarLabelStyle: {fontSize:16, fontStyle:"italic"},
        tabBarLabelPosition:"below-icon",
        tabBarStyle:{height:90},
        headerStatusBarHeight: 0,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Ordens de Produção",
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="precision-manufacturing"
              size={30}
              color={color}
            />
          ),
          headerStyle:{...styles.headerStyle},
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={30}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="abaDois"
        options={{
          title: "Apontamentos",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="more-time" size={30} color={color} />
          ),
          headerStyle:{...styles.headerStyle},
        }}
      />
    </Tabs>
  );
}

const styles = {
  headerStyle: {
    height:45,
  },
};