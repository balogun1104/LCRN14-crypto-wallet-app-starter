import React from "react";
import { TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import  { setTradeModalVisibility }  from "../stores/tabs/tabActions";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabIcons } from "../components";
import { Home, Portfolio, Market, Profile } from "../screens";
import { COLORS, icons } from "../constants";

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};




const Tabs = ({isTradeModalVisible, setTradeModalVisibility}) => {
  const tradeTabButtonOnclickhandler = () => {
   setTradeModalVisibility(!isTradeModalVisible)
   console.log('cliked')
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          height: 140,
          backgroundColor: COLORS.primary,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
             if (!isTradeModalVisible) {
            return (
              <TabIcons focused={focused} icon={icons.home} label="Home" />
            );
             }
          }
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcons
                focused={focused}
                icon={icons.briefcase}
                label="Portfolio"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Trade"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcons
                focused={focused}
                icon={icons.trade}
                label="Trade"
                isTrade={true}
              />
            );
          },
          tabBarButton: (props) => {
            return (
              <TabBarCustomButton
                {...props}
                onPress={() => tradeTabButtonOnclickhandler()}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcons focused={focused} icon={icons.market} label="Market" />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcons
                focused={focused}
                icon={icons.profile}
                label="Profile"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

function mapStateToProps(state) {
  return {
    isTradeModalVisible: state.tabReducer.isTradeModalVisible
};
}

function mapDispatchToProps(dispatch) {
  return {
    SetTradeModalVisibility: (isVisible) => { return dispatch(setTradeModalVisibility(isVisible))},
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Tabs);

// export default Tabs