import React from "react";
import { Card } from "antd";
type propsType = {
  repliesCount: number;
  repliesArr: any[];
};
const Replies: React.FC<propsType> = (props) => {
  return (
    <div className="repiles">
      <Card
        title={`${props.repliesCount} 回复`}
        bordered={false}
        style={{ width: 1270, marginLeft: 70 }}
      >
        {props.repliesArr.map((item, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: item.content }}></p>
        ))}
      </Card>
    </div>
  );
};

export default Replies;
