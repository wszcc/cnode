import React from "react";
import './navigation.scss'
import logoImg from '../../assets/imgs/logo.svg'
import { Input } from 'antd';
import { SearchOutlined  } from '@ant-design/icons';
const Navigation:React.FC = ()=>{
    return (
        <div className='navigation'>
            <img src={logoImg} alt=""/>
            <Input bordered={false} size='small' className='input' prefix={<SearchOutlined />} />
            <ul>
                <li>首页</li>
                <li>新手入门</li>
                <li>API</li>
                <li>新手入门</li>
                <li>注册</li>
                <li>登录</li>
            </ul>
        </div>
    )
}

export default Navigation