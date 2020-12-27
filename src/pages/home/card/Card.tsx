import React, { useState,useEffect } from "react";
import "./card.scss";
import getTime from "../../../utils/getTime";
import { Pagination } from "antd";
import { Link } from 'react-router-dom'
type propsType = {
  cardDataArr: any[];
  changeContent: any;
};

const Card: React.FC<propsType> = ({ cardDataArr, changeContent }) => {
  const [changeParams, setChangeParams] = useState<object | null>({
    mdrender: false,
  });
  function onChange(pageNumber: number) {
    setChangeParams((state) => ({ ...state, page: pageNumber }));
    changeContent({ url: "topics", type: "GET", data: changeParams });
  }
  function handleTabsClick(tabType: string) {
    setChangeParams((state) => ({ ...state, tab: tabType }));
    changeContent({ url: "topics", type: "GET", data: changeParams });
  }
  return (
    <div className="card">
      <div className="header">
        <ul>
          <li
            onClick={() => {
              handleTabsClick("");
            }}
          >
            全部
          </li>
          <li
            onClick={() => {
              handleTabsClick("good");
            }}
          >
            精华
          </li>
          <li
            onClick={() => {
              handleTabsClick("share");
            }}
          >
            分享
          </li>
          <li
            onClick={() => {
              handleTabsClick("ask");
            }}
          >
            问答
          </li>
          <li
            onClick={() => {
              handleTabsClick("job");
            }}
          >
            招聘
          </li>
          <li
            onClick={() => {
              handleTabsClick("job");
            }}
          >
            客户端测试
          </li>
        </ul>
      </div>
      <ul className="body">
        {cardDataArr
          ? cardDataArr.map((item) => (
              <li key={item.id}>
                <div className="img">
                  <img src={item.author.avatar_url} alt="" />
                </div>
                <span>
                  <span>{item.reply_count}/</span>
                  {item.visit_count}
                </span>
                <span className="type">
                  {item.top ? (
                    <span className="top">置顶</span>
                  ) : (
                    <span className="share">分享</span>
                  )}
                </span>
                <Link to={`/topic/detail/${item.id}`}><span className="context">{item.content}</span></Link>
                <div className="left-img">
                  <img src={item.author.avatar_url} alt="" />
                </div>
                <span className="time">{getTime(item.create_at)}</span>
              </li>
            ))
          : ""}
      </ul>
      <Pagination defaultCurrent={1} total={200} onChange={onChange} />
    </div>
  );
};

export default Card;
