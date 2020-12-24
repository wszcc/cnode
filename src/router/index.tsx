import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import routerMap from "./config";

type routerItemType = {
  path: string;
  component: any;
};

const RouterView: React.FC = (): any => {
  return (
    <Router>
      {/* <Redirect to="/home"></Redirect> */}
      <Switch>
        {routerMap.map((item: routerItemType,index:number) => (
          <Route key={index} path={item.path} component={item.component}></Route>
        ))}
      </Switch>
    </Router>
  );
};

export default RouterView;
