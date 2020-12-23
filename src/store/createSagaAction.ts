import { call, put } from "redux-saga/effects";
import requestHomePage from '../apis/index'
import { REQUEST_SAGA_HOMEPAGE_DATA } from "./actionTypes";
import { AxiosResponse } from 'axios'
type actionType = {
  type:string,
  payload?:any
}
// 主页数据的sagaAction
export function* fetcHomePagehData(action:actionType) {
  const {url,type,data}=action.payload
  try {
    const res:AxiosResponse = yield call(requestHomePage,{
      url,
      type,
      data
  });
    yield put({ type: REQUEST_SAGA_HOMEPAGE_DATA, res });
  } catch (error) {
    yield put({ type: "FETCH_FAILED", error });
  }
}
