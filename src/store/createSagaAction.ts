import { call, put } from "redux-saga/effects";
import requestData from "../apis/index";
import {
  REQUEST_SAGA_HOMEPAGE_DATA,
  REQUEST_SAGE_DETAIL_DATA,
} from "./actionTypes";
import { AxiosResponse } from "axios";
type actionType = {
  type: string;
  payload?: any;
};
// 主页数据的sagaAction
export function* fetcHomePagehData(action: actionType) {
  const { url, type, data } = action.payload;
  try {
    const res: AxiosResponse = yield call(requestData, {
      url,
      type,
      data,
    });
    yield put({ type: REQUEST_SAGA_HOMEPAGE_DATA, res });
  } catch (error) {
    yield put({ type: "FETCH_FAILED", error });
  }
}

// 主题详情的sagaAction
export function* fetchDetailPageData(action: actionType) {
  const { url, type, data } = action.payload;
  try {
    const res: AxiosResponse = yield call(requestData, {
      url,
      type,
      data,
    });
    yield put({ type: REQUEST_SAGE_DETAIL_DATA, res });
  } catch (error) {
    yield put({ type: "FETCH_FAILED", error });
  }
}
