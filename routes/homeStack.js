import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Goals from '../screens/goals';
import ManageHabits from '../screens/manageHabits';
import EditDelete from '../screens/editDelete';

const screens = {
    Home: {
        screen: Home,
    },
    Goals: {
        screen: Goals,
    },
    ManageHabits: {
        screen: ManageHabits,
    },
    EditDelete:{
        screen: EditDelete,
    }
};

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerShown: false,
        animationEnabled: false,  
    }
});

export default createAppContainer(HomeStack);