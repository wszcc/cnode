import React, { useEffect, useState, memo } from "react";
import "./home.scss";
import { connect } from "react-redux";
import { AxiosResponse } from "axios";
import { getHomePageDate } from "../../store/actionCreator";
import Navigation from "../../components/navigation/Navigation";
import Card from './card/Card'
type propsType = {
  name?: string;
  requestHomePageData: any;
  homeData: AxiosResponse;
};
type requestParamsType = {
  url: string;
  type: string;
  data: object;
};
const Home: React.FC<propsType> = (props: propsType) => {
  const [homeDataArr, setHomeDataArr] = useState<any | null>(null);
  useEffect(() => {
    props.requestHomePageData({ url: "topics", type: "GET", data: {} });
  }, []);
  useEffect(() => {
    setHomeDataArr(props.homeData ? props.homeData.data.data : null);
  });
  return (
    <div className="home">
      <Navigation />
      <Card cardDataArr={homeDataArr} />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    homeData: state.homePageDate,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    requestHomePageData(requestParams: requestParamsType) {
      const getHomePageDateAction = getHomePageDate(requestParams);
      dispatch(getHomePageDateAction);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(memo(Home));
