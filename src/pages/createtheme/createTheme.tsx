import React from "react";
import "./createTheme.scss";
import E from "wangeditor";
import { Select, Card, Input } from "antd";
import Navigation from "../../components/navigation/Navigation";
const { Option } = Select;

class createTheme extends React.Component {
  componentDidMount() {
    const editor = new E("#edit");
    editor.config.zIndex = 100;
    editor.create();
  }
  
  handleChange = (value: any) => {
    console.log(`selected ${value}`);
  };
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
              defaultValue="分享"
              style={{ width: 120, zIndex: 1000 }}
              onChange={this.handleChange}
            >
              <Option value="share">分享</Option>
              <Option value="ask">问答</Option>
              <Option value="job">招聘</Option>
              <Option value="good">客户端测试</Option>
            </Select>
          </div>
          <Input
            placeholder="请输入标题"
            style={{ width: 1070, margin: 20, marginLeft: 0 }}
          />
          <div id="edit"></div>
          <a className="submit">提交</a>
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

export default createTheme;
