import Home from "../pages/home/Home";
import TopicDetail from "../pages/topicdetail/TopicDetail";
import Profile from "../pages/profile/Profile";
import createTheme from '../pages/createtheme/createTheme'
export default [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/topic/detail/:id",
    component: TopicDetail,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/theme",
    component: createTheme,
  },
];
