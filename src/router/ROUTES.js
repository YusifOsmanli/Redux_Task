import AdminRoot from "../pages/Admin/AdminRoot";
import Books from "../pages/Admin/Books/Books";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Orders from "../pages/Admin/Orders/Orders";
import Basket from "../pages/Site/Basket/Basket";
import Card from "../pages/Site/Card/Card";
import CheckOut from "../pages/Site/CheckOut/CheckOut";
import Contact from "../pages/Site/Contact/Contact";
import Detail from "../pages/Site/Detail/Detail";
import Home from "../pages/Site/Home/Home";
import OrderComplate from "../pages/Site/OrderComplate/OrderComplate";
import Shop from "../pages/Site/Shop/Shop";
import SiteRoot from "../pages/Site/SiteRoot";
import Wishlist from "../pages/Site/Wishlist/Wishlist";

const ROUTES = [{
    path:'',
    element:<SiteRoot/>,
    children:[{
        path:'/basket',
    element:<Basket/>
    },{
        path:'/card',
    element:<Card/>
    },{
        path:'/checkout',
    element:<CheckOut/>
    },{
        path:'/contact',
    element:<Contact/>
    },{
        path:'/detail',
    element:<Detail/>
    },{
        path:'',
    element:<Home/>
    },{
        path:'/ordercomplate',
    element:<OrderComplate/>
    },{
        path:'/shop',
    element:<Shop/>
    },{
        path:'/wishlist',
    element:<Wishlist/>
    }
]
},{
    path:'admin',
    element:<AdminRoot/>,
    children:[{
        path:'books',
    element:<Books/>
    },{
        path:'dashboard',
    element:<Dashboard/>
    },{
        path:'orders',
    element:<Orders/>
    }]
}]

export default ROUTES