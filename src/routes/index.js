//import Layout
import { HeaderOnly } from "../layouts";
import config from "../config";

// import Component
import Home from "../pages/Home";
import Following from "../pages/Following";
import Upload from "../pages/Upload";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import Live from "../pages/Live";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

// public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.live, component: Live },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.signUp, component: SignUp, layout: null },
];

const privateRoutes = [{ path: config.routes.following, component: Following }];

export { publicRoutes, privateRoutes };
