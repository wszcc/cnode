import React from "react";
import { connect } from "react-redux";
import { loginAction } from "../../../store/actionCreator";
import { Card } from "antd";
import { Link } from 'react-router-dom'
import profile from "../../../assets/imgs/profile.png";
import { accessToken } from '../../../store/actionTypes'
type propsType = {
  dispatchLoginAction: () => void;
  isLogin: boolean;
};

const TopContetn: React.FC<propsType> = (props) => {
  function login() {
    localStorage.setItem("accessToken", accessToken);
    props.dispatchLoginAction();
  }
  return (
    <div className="top-content">
      {!props.isLogin ? (
        <>
          CNode：Node.js专业中文社区
          <span>您可以 登录 或 注册 , 也可以</span>
          <button onClick={login}>通过曾川的 Github 登录</button>
        </>
      ) : (
        <>
          <Card
            title="个人信息"
            bordered={false}
            style={{ width: 250, marginTop: -15 }}
          >
            <p className='img'><Link to='/profile'><img title='去我的主页看看' src={profile} alt=""/></Link><span>曾川</span></p>
            <p className='score'>积分:0</p>
            <p className='title'>“这家伙很懒,什么个性签名都没有留下.”</p>
            
          </Card>
         
        </>
      )}
    </div>
  );
};

const mapState = (state: any) => {
  return {
    isLogin: state.isLogin,
  };
};

const mapDispatch = (dispatch: any) => {
  return {
    dispatchLoginAction() {
      const disLoginAction = loginAction();
      dispatch(disLoginAction);
    },
  };
};
export default connect(mapState, mapDispatch)(TopContetn);
