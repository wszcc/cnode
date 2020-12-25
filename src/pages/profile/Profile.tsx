import React, { useEffect } from "react";
import "./profile.scss";
import { connect } from "react-redux";
import { AxiosResponse } from "axios";
import Navigation from "../../components/navigation/Navigation";
import { getUserInfo } from "../../store/actionCreator";
import RightContent from "../home/rightcomtent/RightComtent";
import ProfileImg from '../../assets/imgs/profile.png'
import getTime from '../../utils/getTime'
import { Card } from "antd";
import { Link } from "react-router-dom";

type paramsType = {
  url: string;
  type: string;
  data: object;
};

type propsType = {
  userInfo: AxiosResponse;
  dispatchUserInfo: (payload: paramsType) => void;
};

const Profile: React.FC<propsType> = ({
  userInfo = { data: { data: { githubUsername: "zc" } } },
  dispatchUserInfo,
}) => {
  useEffect(() => {
    dispatchUserInfo({
      url: "/user/wszcc",
      type: "GET",
      data: {},
    });
    console.log(userInfo);
  }, [userInfo.data.data.githubUsername]);
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
            <p className='profile-img'>
              <img src={ProfileImg} alt="" /><span>{userInfo.data.data.loginname}</span>
            </p>
            <p>{userInfo.data.data.score} 积分</p>
            <p>注册时间 {getTime(userInfo.data.data.create_at)}</p>
          </Card>
          <Card
            title="最近创建的话题"
            bordered={false}
            style={{ width: 1000, marginTop: 15, marginLeft: 70 }}
          >
               {userInfo.data.data.recent_topics
          ? userInfo.data.data.recent_topics.map((item:any) => (
              <li key={item.id}>
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
                <Link to={`/topic/detail/${item.id}`}><span className="context">{item.title}</span></Link>
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
          ? userInfo.data.data.recent_replies.map((item:any) => (
              <li key={item.id}>
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
                <Link to={`/topic/detail/${item.id}`}><span className="context">{item.title}</span></Link>
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
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatchUserInfo(payload: paramsType) {
      const disUserInfoAction = getUserInfo(payload);
      dispatch(disUserInfoAction);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
