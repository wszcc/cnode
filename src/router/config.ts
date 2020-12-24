import Home from "../pages/home/Home";
import TopicDetail from '../pages/topicdetail/TopicDetail'
export default [
  {
    path: "/home",
    component: Home,
  },
  {
      path:'/topic/detail/:id',
      component:TopicDetail
  },
];
