import React, { useEffect, useState, memo } from "react";
import "./home.scss";
import { connect } from "react-redux";
import { AxiosResponse } from "axios";
import { getHomePageDate } from "../../store/actionCreator";
import Navigation from "../../components/navigation/Navigation";
import Card from "./card/Card";
import RightContent from "./rightcomtent/RightComtent";
type propsType = {
  name?: string;
  requestHomePageData: (params: requestParamsType) => void;
  requestUserInfo: (params: requestParamsType) => void;
  homeData: AxiosResponse;
};
type requestParamsType = {
  url: string;
  type: string;
  data: object;
};
const Home: React.FC<propsType> = (props) => {
  const [homeDataArr, setHomeDataArr] = useState<any | null>(null);
  useEffect(() => {
    props.requestHomePageData({
      url: "topics",
      type: "GET",
      data: {
        mdrender: false,
      },
    });
  }, []);
  useEffect(() => {
    setHomeDataArr(props.homeData ? props.homeData.data.data : null);
  }, [props.homeData]);
  return (
    <div className="home">
      <Navigation />
      <Card
        cardDataArr={homeDataArr}
        changeContent={props.requestHomePageData}
      />
      <RightContent />
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
    requestHomePageData(requestParams: requestParamsType): void {
      const getHomePageDateAction = getHomePageDate(requestParams);
      dispatch(getHomePageDateAction);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(memo(Home));
