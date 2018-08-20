import Home from '../component/home.jsx';
import Login from '../component/login';
import Details from '../component/details';

import Index from '../component/index';
import Tab from '../component/index/tab';
import Mine from '../component/mine';

export default {
    router:[{
        path:'/home',
        component:Home,
        children:[{
            path:'/home/index',
            component:Index,
            children:[{
                path:'/home/index/:id',
                component:Tab
            }]
        },{
            path:'/home/mine',
            component:Mine
        }]
    },{
        path:'/login',
        component:Login
    },{
        path:'/details',
        component:Details
    }]
}