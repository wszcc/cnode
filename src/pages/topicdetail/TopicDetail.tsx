import React, { useEffect } from "react";
import "./topicdetail.scss";
import Navigation from "../../components/navigation/Navigation";
import { connect } from "react-redux";
import { getDetailPageDate } from "../../store/actionCreator";
import { Card } from "antd";
import Header from './Header'
import Replies from './replies/Replies'
type propsType = {
  match: {
    params: {
      id: string;
    };
  };
  dispatchDetailDataAction: (payload:object)=>void;
  detailData: any;
};
const TopicDetail: React.FC<propsType> = (props: propsType) => {
  useEffect(() => {
    props.dispatchDetailDataAction({
      url: `/topic/${props.match.params.id}`,
      type: "GET",
    });
  }, [props.match.params.id]);
  return (
    <div className="topic-detail">
      <Navigation />
      {
        props.detailData?(<><Header titleData={props.detailData} />
          <Card title={""} bordered={false} style={{ width:1270,marginLeft:70 }}>
            {props.detailData ? (
              <div
              className='center-card'
                dangerouslySetInnerHTML={{
                  __html: props.detailData.data.data.content,
                }}
              ></div>
            ) : (
              ""
            )}
          </Card>
          <Replies repliesCount={props.detailData.data.data.reply_count}
          repliesArr={props.detailData.data.data.replies}/>
          </>):''
      }
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
