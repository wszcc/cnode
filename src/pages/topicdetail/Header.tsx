import React, { ReactNode, useState } from "react";
import getTime from "../../utils/getTime";
import { connect } from "react-redux";
import requestCollect from "../../apis/index";
import requestCancelCollect from "../../apis/index";
import { accessToken } from "../../store/actionTypes";
import { EditOutlined } from "@ant-design/icons";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { getUserThemeInfo } from "../../store/actionCreator";

type propsType = {
  titleData: any;
  isLogin: boolean;
  isEdit: any;
  dispatchThemeInfo: (payload: any) => void;
};

const Header: React.FC<propsType & RouteComponentProps> = (props) => {
  const { titleData, isLogin, isEdit } = props;
  const [jusIsCollect, setIsCollect] = useState(titleData.data.data.is_collect);
  // 判断收藏按钮状态
  function isCollect(isLogin: boolean, isCollect: boolean): ReactNode {
    if (!isLogin) {
      return "";
    } else {
      if (isCollect) {
        return (
          <span className="cancelCollect" onClick={handelCancelCollect}>
            取消收藏
          </span>
        );
      } else {
        return (
          <span className="collect" onClick={handleCollect}>
            收藏
          </span>
        );
      }
    }
  }
  const handleEditClick = () => {
    const themeInfo = {
      title: titleData.data.data.title,
      content: titleData.data.data.content,
      tab: titleData.data.data.tab,
      topic_id:titleData.data.data.id
    };
    props.history.push("/edit-theme");
    props.dispatchThemeInfo(themeInfo);
  };
  const handleCollect = async () => {
    requestCollect({
      url: "/topic_collect/collect",
      type: "POST",
      data: {
        accesstoken: accessToken,
        topic_id: titleData.data.data.id,
      },
    });
    setIsCollect(!jusIsCollect);
  };
  const handelCancelCollect = () => {
    requestCancelCollect({
      url: "/topic_collect/de_collect",
      type: "POST",
      data: {
        accesstoken: accessToken,
        topic_id: titleData.data.data.id,
      },
    });
    setIsCollect(!jusIsCollect);
  };
  return (
    <div className="header">
      <div className="title">
        {titleData && titleData.data.data.top ? (
          <span className="top">置顶</span>
        ) : (
          <span className="share">分享</span>
        )}
        {titleData ? titleData.data.data.title : ""}
      </div>
      <div className="info">
        {titleData &&
          `●发布于 ${getTime(titleData.data.data.create_time)} ●作者 ${
            titleData.data.data.author.loginname
          } ●${titleData.data.data.visit_count} 次浏览`}
        <div className="edit">
          {isEdit ? (
            <EditOutlined
              onClick={handleEditClick}
              style={{
                color: "black",
                fontSize: 20,
              }}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      {isCollect(isLogin, jusIsCollect)}
    </div>
  );
};
const mapState = (state: any) => {
  return {
    isLogin: state.isLogin,
  };
};
const mapDispatch = (dispatch: any) => {
  return {
    dispatchThemeInfo(themeInfo: any) {
      const themeInfoAction = getUserThemeInfo(themeInfo);
      dispatch(themeInfoAction);
    },
  };
};
export default connect(mapState, mapDispatch)(withRouter(Header));
