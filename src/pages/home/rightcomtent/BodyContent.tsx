import React from "react";
import { Card } from "antd";
import China from "../../../assets/imgs/china.png";
import php from "../../../assets/imgs/php.png";
import Ruby from "../../../assets/imgs/Ruby.png";
import erweima from "../../../assets/imgs/erweima.png";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
type propsType ={
  isLogin:boolean
}
const BodyContent: React.FC<propsType> = (props) => {

  return (
    <div className="body-content">
      {
        props.isLogin?<div className="publish">
        <Link to='/theme'><span >发布话题</span></Link>
      </div>:''
      }
      <Card
        title="无人回复的话题"
        bordered={false}
        style={{ width: 280, marginTop: 20 }}
      >
        助力ssr，使用concent为nextjs应用加点料 SEE Conf 2021
        如期而至，体验科技极致美 分享一个基于puppeteer的高性能spa(vue,
        react等)SEO解决方案 CabloyJS也有工作流引擎了，是你想要的吗？
        flutter写的app是不是勉强凑合能用
      </Card>
      <Card
        title="积分榜   TOP 100 >>"
        bordered={false}
        style={{ width: 280, marginTop: 20 }}
      >
        <p>22475 i5ting</p>
        <p>15840 alsotang</p>
        <p>9955 atian25</p>
        <p>9350 leapon</p>
        <p>8780 jiyinyiyong</p>
        <p>7590 yakczh</p>
        <p>6855 im-here</p>
        <p>6125 DevinXian</p>
        <p>5815 chapgaga</p>
        <p>5375 magicdawn</p>
      </Card>
      <Card
        title="友情社区"
        bordered={false}
        style={{ width: 280, marginTop: 20 }}
      >
          <a href="https://ruby-china.org/"><img src={Ruby}className='ruby-img' alt=""/></a>
          <a href="https://golangtc.com/"><img src={China} alt=""/></a>
          <a href="https://learnku.com/laravel"><img src={php} alt=""/></a>
      </Card>
      <Card
        title="客户端二维码"
        bordered={false}
        style={{ width: 280, marginTop: 20 }}
      >
          <img className='erweima' src={erweima} alt=""/>
      </Card>
    </div>
  );
};
const mapState=(state:any)=>{
  return {
    isLogin:state.isLogin
  }
}
export default connect(mapState)(BodyContent);
