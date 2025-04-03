import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen 
            name="Home"
            component={Home}
            options={{
                tabBarIcon: ({ color, size }) => ( <Icon name="home-outline" color={color} size={size}/>),
            }}
            />
            <Tab.Screen 
            name="Profile"
            component={Profile}
            options={{
                tabBarIcon: ({ color, size }) => ( <Icon name="person-outline" color={color} size={size}/>),
            }}
            />
        </Tab.Navigator>
    );
}