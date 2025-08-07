import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";

const ACTIVE_COLOR = "#2c5364";       // Biru toska elegan
const INACTIVE_COLOR = "#9fa8da";     // Abu-abu keunguan
const BACKGROUND_COLOR = "#f5f7fa";   // Latar belakang lembut

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
        tabBarStyle: {
          backgroundColor: BACKGROUND_COLOR,
          borderTopWidth: 0,
          elevation: 10,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size = 24 }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, size = 24 }) => (
            <Feather name="info" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size = 24 }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
