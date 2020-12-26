import React from 'react'
import './mycollect.scss'
import  Navigation  from "../../components/navigation/Navigation";
import RightComtent from "../home/rightcomtent/RightComtent";
import { Card } from "antd";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import getTime from '../../utils/getTime'
type propsType={
    collectData:any
}
const myCollect:React.FC<propsType>=({collectData})=>{
    return (
        <div className="my-collect">
            <Navigation/>
            <RightComtent/>
            {
                collectData?<Card
                title="我的话题"
                bordered={false}
                style={{ width: 1090, marginTop: 15,marginLeft:30 }}
              >
                {
                    collectData.data.data.map((item:any) => (
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
                }
              </Card>:''
            }
        </div>
    )
}

const mapState=(state:any)=>{
    return {
        collectData:state.collectTheme
    }
}

export default connect(mapState)(myCollect)