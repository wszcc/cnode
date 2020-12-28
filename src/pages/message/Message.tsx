import React, { useEffect } from "react";
import "./message.scss";
import Navigation from "../../components/navigation/Navigation";
import RightComtent from "../home/rightcomtent/RightComtent";
import { Card } from "antd";
import { getMessage } from "../../store/actionCreator";
import { connect } from "react-redux";
import { accessToken } from "../../store/actionTypes";
import { withRouter, RouteComponentProps } from "react-router-dom";
import hasReadMessage from "../../apis/index";

type propsType = {
  message: any;
  dispatchReqMessage: (params: any) => void;
};

const Message: React.FC<propsType & RouteComponentProps> = (props) => {
  const { message = "", dispatchReqMessage } = props;
  useEffect(() => {
    dispatchReqMessage({
      url: "/messages",
      type: "GET",
      data: {
        accesstoken: accessToken,
      },
    });
  }, []);
  function handleHasRead(id: string) {
    props.history.push(`/topic/detail/${id}-${true}`);
  }
  function handleHasNotRead(id: string, messageId: string) {
    hasReadMessage({
      url: `/message/mark_one/${messageId}`,
      type: "POST",
      data: {
        accesstoken: accessToken,
      },
    });
    props.history.push(`/topic/detail/${id}-${true}`);
  }
  return (
    <div className="message">
      <Navigation />
      <RightComtent />
      {message ? (
        <>
          <Card
            title={`新消息 ${message.data.data.hasnot_read_messages.length} 条`}
            bordered={false}
            style={{ width: 1000, marginTop: 15, marginLeft: 70 }}
          >
            {message.data.data.hasnot_read_messages.length
              ? message.data.data.hasnot_read_messages.map(
                  (item: any, index: number) => (
                    <p key={index} className="item">
                      {item.author.loginname}
                      &nbsp;&nbsp;回复了你的&nbsp;
                      <span
                        className="title"
                        onClick={() => {
                          handleHasNotRead(item.topic.id, item.id);
                        }}
                      >
                        {" "}
                        {item.topic.title}
                      </span>
                    </p>
                  )
                )
              : "无消息"}
            {}
          </Card>
          <Card
            title={`过往消息 ${message.data.data.has_read_messages.length} 条`}
            bordered={false}
            style={{ width: 1000, marginTop: 15, marginLeft: 70 }}
          >
            {message.data.data.has_read_messages.length
              ? message.data.data.has_read_messages.map(
                  (item: any, index: number) => (
                    <p key={index} className="item">
                      {item.author.loginname}
                      &nbsp;&nbsp;回复了你的&nbsp;
                      <span
                        className="title"
                        onClick={() => {
                          handleHasRead(item.topic.id);
                        }}
                      >
                        {" "}
                        {item.topic.title}
                      </span>
                    </p>
                  )
                )
              : "无消息"}
          </Card>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

const mapState = (state: any) => {
  return {
    message: state.message,
  };
};

const mapDispatch = (dispatch: any) => {
  return {
    dispatchReqMessage(params: any) {
      const disMessageAction = getMessage(params);
      dispatch(disMessageAction);
    },
  };
};

export default connect(mapState, mapDispatch)(withRouter(Message));
