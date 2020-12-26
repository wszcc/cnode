import axios from "axios";
import { message } from "antd";

type payloadType = {
  url: string;
  type: string;
  data?: any;
};

export default function request(payload: payloadType): any {
  axios.defaults.baseURL = "https://cnodejs.org/api/v1";
  const { url, type, data } = payload;
  if (type === "GET") {
    return axios
      .get(url, { params: data })
      .then((res) => {
        const { success } = res.data;
        if (success !== true) {
          message.error("参数错误！");
          return Promise.resolve(res);
        }
        return Promise.resolve(res);
      })
      .catch((err) => {
        message.error("请求失败！");
        return Promise.reject(err);
      });
  } else {
    return axios
      .post(url, data)
      .then((res) => {
        const { success } = res.data;
        if (success !== true) {
          message.error("参数错误！");
          return Promise.resolve(res);
        }
        return Promise.resolve(res);
      })
      .catch((err) => {
        message.error("请求失败！");
        return Promise.reject(err);
      });
  }
}
