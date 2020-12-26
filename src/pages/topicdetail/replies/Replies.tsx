import React, { createElement, useState, useRef } from "react";
import { Comment, Tooltip, Avatar, Card, Input } from "antd";
import moment from "moment";
import { connect } from "react-redux";
import getTime from "../../../utils/getTime";
import { LikeOutlined, LikeFilled } from "@ant-design/icons";
import requestReply from "../../../apis/index";
import { accessToken } from "../../../store/actionTypes";
const { TextArea } = Input;

type propsType = {
  repliesCount: number;
  repliesArr: any[];
  isLogin: boolean;
  topic_id: string;
};

const Replies: React.FC<propsType> = (props) => {
  const [likes, setLikes] = useState<number | string>(0);
  const [action, setAction] = useState<null | string>(null);
  const [repliesArr, setRepliesArr] = useState(props.repliesArr);
  const [replyCount, setReplyCount] = useState(props.repliesArr.length);
  const like = () => {
    setLikes(1);
    setAction("liked");
  };
  function handleReply() {
    const inputElement: any = document.getElementById("input-textarea");
    const inputInfo = {
      author: {
        loginname: "wszcc",
        avatar_url:
          "https://avatars2.githubusercontent.com/u/68904051?v=4&s=120",
      },
      content: `<div class='markdown-text'><p>${inputElement.value}</p>↵</div>`,
      create_at: new Date(),
      id: "5fe6ee2698427e04f76aa82b",
      is_uped: false,
      reply_id: null,
    };
    requestReply({
      url: `/topic/${props.topic_id}/replies`,
      type: "POST",
      data: {
        accesstoken: accessToken,
        content: inputElement.value,
      },
    });

    setRepliesArr((repliesArr) => [...repliesArr, inputInfo]);
    setReplyCount(replyCount + 1);
  }

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
        title={`${replyCount} 回复`}
        bordered={false}
        style={{ width: 1270, marginLeft: 70 }}
      >
        {repliesArr.map((item, index) => (
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
            id="input-textarea"
          />
          <div className="input-button">
            <button onClick={handleReply}>回复</button>
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
