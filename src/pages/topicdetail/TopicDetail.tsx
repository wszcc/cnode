import React, { useEffect } from "react";
import "./topicdetail.scss";
import Navigation from "../../components/navigation/Navigation";
import { connect } from "react-redux";
import { getDetailPageDate } from "../../store/actionCreator";
import { Card } from "antd";
import Header from "./Header";
import Replies from "./replies/Replies";
import { accessToken } from "../../store/actionTypes";
type propsType = {
  match: {
    params: {
      id: string;
    };
  };
  dispatchDetailDataAction: (payload: object) => void;
  detailData: any;
};
const TopicDetail: React.FC<propsType> = (props: propsType) => {
  const paramsStr=props.match.params.id
  const [topicId,isEdit=false] =paramsStr.split('-')
  useEffect(() => {
    props.dispatchDetailDataAction({
      url: `/topic/${topicId}`,
      type: "GET",
      data: {
        accesstoken: accessToken,
      },
    });
  },[props.match.params.id]);
  return (
    <div className="topic-detail">
      <Navigation />
      {props.detailData ? (
        <>
          <Header isEdit={isEdit} titleData={props.detailData} />
          <Card
            title={""}
            bordered={false}
            style={{ width: 1270, marginLeft: 70 }}
          >
            {props.detailData ? (
              <div
                className="center-card"
                dangerouslySetInnerHTML={{
                  __html: props.detailData.data.data.content,
                }}
              ></div>
            ) : (
              ""
            )}
          </Card>
          <Replies
            repliesCount={props.detailData.data.data.reply_count}
            repliesArr={props.detailData.data.data.replies}
            topic_id={props.detailData.data.data.id}
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
};
const mapStateToProps = (state: any) => {
  return {
    detailData: state.detailData,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatchDetailDataAction(payload: object) {
      const getDetailPageDateAction = getDetailPageDate(payload);
      dispatch(getDetailPageDateAction);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TopicDetail);
