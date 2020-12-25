import React, { createElement, useState, useEffect } from "react";
import { Comment, Tooltip, Avatar, Card, Input } from "antd";
import moment from "moment";
import { connect } from "react-redux";
import getTime from "../../../utils/getTime";
import { LikeOutlined, LikeFilled } from "@ant-design/icons";
const { TextArea } = Input;
type propsType = {
  repliesCount: number;
  repliesArr: any[];
  isLogin: boolean;
};
const Replies: React.FC<propsType> = (props) => {
  
  const [likes, setLikes] = useState<number | string>(0);
  const [action, setAction] = useState<null | string>(null);

  const like = () => {
    setLikes(1);
    setAction("liked");
  };

  const actions = props.isLogin
    ? [
        <Tooltip key="comment-basic-like" title="Like">
          <span onClick={like}>
            {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
            <span className="comment-action">{likes}</span>
          </span>
        </Tooltip>,
      ]
    : [];
  return (
    <div className="repiles">
      <Card
        title={`${props.repliesCount} 回复`}
        bordered={false}
        style={{ width: 1270, marginLeft: 70 }}
      >
        {props.repliesArr.map((item, index) => (
          <Comment
            key={index}
            actions={actions}
            author={item.author.loginname}
            avatar={
              <Avatar
                src={item.author.avatar_url}
                alt={item.author.loginname}
              />
            }
            content={
              <p
                key={index}
                dangerouslySetInnerHTML={{ __html: item.content }}
              ></p>
            }
            datetime={
              <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                <span>{getTime(item.create_at)}</span>
              </Tooltip>
            }
          />
        ))}
      </Card>
      {props.isLogin ? (
        <>
          <div className="input-header">添加回复</div>
          <TextArea
            style={{ width: 1270, marginLeft: 70, border: "none" }}
            rows={8}
          />
          <div className="input-button">
            <button>回复</button>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

const mapState = (state: any) => {
  return {
    isLogin: state.isLogin,
  };
};

export default connect(mapState)(Replies);
