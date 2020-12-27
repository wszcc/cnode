import React from "react";
import "./edittheme.scss"
import E from "wangeditor"
import { Select, Card, Input } from "antd";
import Navigation from "../../components/navigation/Navigation";
import { accessToken } from "../../store/actionTypes";
import requestCreateTheme from "../../apis/index";
import {connect} from 'react-redux'
import { withRouter,RouteComponentProps } from "react-router-dom";
const { Option } = Select;
type createThemeTypes = {
  accesstoken: string;
  title: string;
  tab: string;
  content: string;
  topic_id:string
};
type stateType = {
  accesstoken: string;
  tab: string;
  content: string;
  editor: any;
  title:string
};
type propsType = {
    themeInfo:any
};
class createTheme extends React.Component<propsType&RouteComponentProps, stateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      accesstoken: accessToken,
      tab: "share",
      content: "",
      editor: null,
      title:''
    };
  }
  componentDidMount() {
    const editor = new E("#edit");
    const titleInput:any=document.getElementById('title-input')
    let title=titleInput.value
    editor.config.zIndex = 100;
    editor.create();
    editor.txt.html(this.props.themeInfo.content)
    this.setState({ editor,title });
  }
  async dispatchCreateTheme(params: createThemeTypes) {
    const res = await requestCreateTheme({
      url: "/topics/update",
      type: "POST",
      data: params,
    });
    this.props.history.replace(`/topic/detail/${this.props.themeInfo.topic_id}-${true}`)
  }
  editTheme = () => {
    this.setState(
      {
        content: this.state.editor.txt.text(),
      },
      () => {
        const { accesstoken, title, tab, content } = this.state;
        let topic_id=this.props.themeInfo.topic_id
        this.dispatchCreateTheme({ accesstoken, title, tab, content,topic_id });
      }
    );
  };
  handleTabChange = (value: string) => {
    this.setState({
      tab: value,
    });
  };
  handleTitleChange=()=>{
    let inputValue:any =document.getElementById('title-input')
    this.setState({
      title:inputValue.value
    })
  }
  render() {
    return (
      <div className="create-theme">
        <Navigation />
        <Card
          title="发布话题"
          style={{ width: 1120, marginTop: 20, marginLeft: 70 }}
        >
          <div>
            选择板块&nbsp; &nbsp; &nbsp;
            <Select
              defaultValue={this.props.themeInfo.tab}
              style={{ width: 120, zIndex: 1000 }}
              onChange={this.handleTabChange}
            >
              <Option value="share">分享</Option>
              <Option value="ask">问答</Option>
              <Option value="job">招聘</Option>
              <Option value="good">客户端测试</Option>
            </Select>
          </div>
          <Input
          defaultValue={this.props.themeInfo.title}
          onChange={this.handleTitleChange}
            id="title-input"
            placeholder="请输入标题"
            style={{ width: 1070, margin: 20, marginLeft: 0 }}
          />
          <div id="edit"></div>
          <a className="submit" onClick={this.editTheme}>
            提交
          </a>
        </Card>
        <div className="right-comtent">
          <Card
            title="Markdown 语法参考"
            style={{ width: 260, marginTop: 20, marginLeft: 70 }}
          >
            <p>### 单行的标题</p>
            <p>**粗体**</p>
            <p>`console.log('行内代码')`</p>
            <p>```js\n code \n``` 标记代码块</p>
            <p>[内容](链接)</p>
            <p>![文字说明](图片链接)</p>
          </Card>
          <Card
            title="话题发布指南"
            style={{ width: 270, marginTop: 20, marginLeft: 70 }}
          >
            <p>尽量把话题要点浓缩到标题里</p>
            <p>代码含义和报错可在 SegmentFault 提问</p>
          </Card>
        </div>
      </div>
    );
  }
}
const mapState =(state:any)=>{
    return {
        themeInfo:state.editInfo
    }
}
export default connect(mapState)(withRouter(createTheme));
