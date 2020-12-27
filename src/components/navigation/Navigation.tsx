import React from "react";
import './navigation.scss'
import logoImg from '../../assets/imgs/logo.svg'
import { Input } from 'antd';
import { SearchOutlined  } from '@ant-design/icons';
import { connect } from 'react-redux'
import { logoutAction,loginAction } from '../../store/actionCreator'
import { withRouter,RouteComponentProps } from 'react-router'
import {accessToken} from '../../store/actionTypes'
type propsType =RouteComponentProps&{
    isLogin:boolean,
    dispatchLogoutAction:()=>void,
    dispatchLoginAction:()=>void,
}
const Navigation:React.FC<propsType> =(props)=>{
    function logout(){
        localStorage.removeItem('accessToken')
        props.dispatchLogoutAction()
        props.history.replace('/home')
    }
    function login(){
        localStorage.setItem('accessToken',accessToken)
        props.dispatchLoginAction()
    }
    function handleToMessage(){
        props.history.push('/message')
    }
    return (
        <div className='navigation'>
            <img src={logoImg} alt=""/>
            <Input bordered={false} size='small' className='input' prefix={<SearchOutlined />} />
            <ul>
                <li>首页</li>
                {
                    props.isLogin?<li onClick={handleToMessage}>未读消息</li>:''
                }
                <li>新手入门</li>
                <li>API</li>
                <li>关于</li>
                <li>设置</li>
                {
                    props.isLogin?'':<li>注册</li>
                }
                {
                    props.isLogin?<li onClick={logout}>退出</li>:<li onClick={login}>登录</li>
                }
            </ul>
        </div>
    )
}
const mapState=(state:any)=>{
    return {
        isLogin:state.isLogin
    }
}
const mapDispatch =(dispatch:any)=>{
    return {
        dispatchLogoutAction(){
            const disLogoutAction =logoutAction()
            dispatch(disLogoutAction)
        },
        dispatchLoginAction(){
            const disLoginAction =loginAction()
            dispatch(disLoginAction)
        }
    }
}
export default connect(mapState,mapDispatch)(withRouter(Navigation))