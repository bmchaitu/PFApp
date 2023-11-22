import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {View} from 'react-native';
import {Home, Cart, ProductDetails} from 'src/screens';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <View
              style={{width: 30, height: 30, backgroundColor: 'red'}}
              name="home"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <View
              style={{width: 30, height: 30, backgroundColor: 'red'}}
              name="home"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <View
              style={{width: 30, height: 30, backgroundColor: 'red'}}
              name="home"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
