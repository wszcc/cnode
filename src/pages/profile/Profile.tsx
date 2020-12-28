import React, { useEffect } from "react";
import "./profile.scss";
import { connect } from "react-redux";
import { AxiosResponse } from "axios";
import Navigation from "../../components/navigation/Navigation";
import { getUserInfo } from "../../store/actionCreator";
import RightContent from "../home/rightcomtent/RightComtent";
import ProfileImg from "../../assets/imgs/profile.png";
import getTime from "../../utils/getTime";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { getUserCollectTheme } from "../../store/actionCreator";
type paramsType = {
  url: string;
  type: string;
  data: object;
};

type propsType = {
  userInfo: AxiosResponse;
  dispatchUserInfo: (payload: paramsType) => void;
  dispatchUserCollect: (payload: paramsType) => void;
  collectTheme: AxiosResponse;
};

const Profile: React.FC<propsType> = ({
  userInfo = { data: { data: { githubUsername: "zc" } } },
  dispatchUserInfo,
  dispatchUserCollect,
  collectTheme = { data: { success: false, data: [] } },
}) => {
  useEffect(() => {
    dispatchUserInfo({
      url: "/user/wszcc",
      type: "GET",
      data: {},
    });
    dispatchUserCollect({
      url: "/topic_collect/wszcc",
      type: "GET",
      data: {},
    });
  }, [userInfo.data.data.githubUsername, collectTheme.data.success]);

  return (
    <div className="profile">
      <Navigation />
      <RightContent />
      {userInfo.data.data.githubUsername === "wszcc" ? (
        <>
          <Card
            title="主页"
            bordered={false}
            style={{ width: 1000, marginTop: 15, marginLeft: 70 }}
          >
            <p className="profile-img">
              <img src={ProfileImg} alt="" />
              <span>{userInfo.data.data.loginname}</span>
            </p>
            <Link to="/mycollect">
              <p>我的收藏 {collectTheme.data.data.length}</p>
            </Link>
            <p>{userInfo.data.data.score} 积分</p>
            <p>注册时间 {getTime(userInfo.data.data.create_at)}</p>
          </Card>
          <Card
            title="最近创建的话题"
            bordered={false}
            style={{ width: 1000, marginTop: 15, marginLeft: 70 }}
          >
            {userInfo.data.data.recent_topics
              ? userInfo.data.data.recent_topics.map((item: any) => (
                  <li className="item" key={item.id}>
                    <div className="img">
                      <img src={item.author.avatar_url} alt="" />
                    </div>
                    <span className="type">
                      {item.top ? (
                        <span className="top">置顶</span>
                      ) : (
                        <span className="share">分享</span>
                      )}
                    </span>
                    <Link to={`/topic/detail/${item.id}-${true}`}>
                      <span className="context">{item.title}</span>
                    </Link>
                    <div className="left-img">
                      <img src={item.author.avatar_url} alt="" />
                    </div>
                    <span className="time">{getTime(item.create_at)}</span>
                  </li>
                ))
              : ""}
          </Card>
          <Card
            title="最近参与的话题"
            bordered={false}
            style={{ width: 1000, marginTop: 15, marginLeft: 70 }}
          >
            {userInfo.data.data.recent_replies
              ? userInfo.data.data.recent_replies.map((item: any) => (
                  <li className="item" key={item.id}>
                    <div className="img">
                      <img src={item.author.avatar_url} alt="" />
                    </div>
                    <span className="type">
                      {item.top ? (
                        <span className="top">置顶</span>
                      ) : (
                        <span className="share">分享</span>
                      )}
                    </span>
                    <Link to={`/topic/detail/${item.id}`}>
                      <span className="context">{item.title}</span>
                    </Link>
                    <div className="left-img">
                      <img src={item.author.avatar_url} alt="" />
                    </div>
                    <span className="time">{getTime(item.last_reply_at)}</span>
                  </li>
                ))
              : ""}
          </Card>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
const mapStateToProps = (state: any) => {
  return {
    userInfo: state.userInfo,
    collectTheme: state.collectTheme,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatchUserInfo(payload: paramsType) {
      const disUserInfoAction = getUserInfo(payload);
      dispatch(disUserInfoAction);
    },
    dispatchUserCollect(payload: paramsType) {
      const disUserCollectAction = getUserCollectTheme(payload);
      dispatch(disUserCollectAction);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
