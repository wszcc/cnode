import React from "react";
import "./card.scss";

type propsType = {
  cardDataArr: any[];
};
const Card: React.FC<propsType> = ({ cardDataArr }) => {
  console.log(cardDataArr);
  return (
    <div className="card">
      <div className="header">
        <ul>
          <li>全部</li>
          <li>精华</li>
          <li>分享</li>
          <li>问答</li>
          <li>招聘</li>
          <li>客户端测试</li>
        </ul>
      </div>
      <ul className="body">
        {cardDataArr
          ? cardDataArr.map((item) => (
              <li key={item.id}>
                <div className='img'><img src={item.author.avatar_url} alt="" /></div>
                <span>{item.reply_count}/{item.visit_count}</span>
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};

export default Card;
