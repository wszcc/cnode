import React from "react";
import getTime from "../../utils/getTime";
import { connect } from 'react-redux'
type propsType = {
  titleData: any;
  isLogin:boolean
};
const Header: React.FC<propsType> = ({ titleData,isLogin }) => {
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
        {
          titleData &&
            `●发布于 ${getTime(titleData.data.data.create_time)} ●作者 ${
              titleData.data.data.author.loginname
            } ●${titleData.data.data.visit_count} 次浏览`
        }
      </div>
      {
        isLogin?<a className='collect'>收藏</a>:''
      }
    </div>
  );
};
const mapState=(state:any)=>{
  return {
    isLogin:state.isLogin
  }
}
export default connect(mapState)(Header);
