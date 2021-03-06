import Home from "../pages/home/Home";
import TopicDetail from "../pages/topicdetail/TopicDetail";
import Profile from "../pages/profile/Profile";
import createTheme from '../pages/createtheme/createTheme'
import myCollect from '../pages/mycollect/myCollect'
import editTheme from '../pages/edittheme/editTheme'
import Message from '../pages/message/Message'


const routerView =[
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
  {
    path: "/mycollect",
    component: myCollect,
  },
  {
    path: "/edit-theme",
    component: editTheme,
  },
  {
    path: "/message",
    component: Message,
  },
];
export default routerView
