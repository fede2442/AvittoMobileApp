import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Goals from '../screens/goals';
import ManageHabits from '../screens/manageHabits';

const screens = {
    Home: {
        screen: Home,
    },
    Goals: {
        screen: Goals,
    },
    ManageHabits: {
        screen: ManageHabits,
    }
};

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerShown: false,
        animationEnabled: false,  
    }
});

export default createAppContainer(HomeStack);