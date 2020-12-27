import { call, put } from "redux-saga/effects";
import requestData from "../apis/index";
import {
  REQUEST_SAGA_HOMEPAGE_DATA,
  REQUEST_SAGE_DETAIL_DATA,
  REQUEST_SAGA_USER_INFO,
  REQUEST_SAGA_COLLECT_THEME,
  REQUEST_SAGA_MESSAGE
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

// 主题详情的sagaAction
export function* fetchUserInfo(action: actionType) {
  const { url, type, data } = action.payload;
  try {
    const res: AxiosResponse = yield call(requestData, {
      url,
      type,
      data,
    });
    yield put({ type: REQUEST_SAGA_USER_INFO, res });
  } catch (error) {
    yield put({ type: "FETCH_FAILED", error });
  }
}

// 获取用户收藏
export function* fetchUserCollect(action: actionType) {
  const { url, type, data } = action.payload;
  try {
    const res: AxiosResponse = yield call(requestData, {
      url,
      type,
      data,
    });
    yield put({ type:REQUEST_SAGA_COLLECT_THEME, res });
  } catch (error) {
    yield put({ type: "FETCH_FAILED", error });
  }
}

// 获取已读消息和未读消息
export function* fetchMessage(action: actionType) {
  const { url, type, data } = action.payload;
  try {
    const res: AxiosResponse = yield call(requestData, {
      url,
      type,
      data,
    });
    yield put({ type:REQUEST_SAGA_MESSAGE, res });
  } catch (error) {
    yield put({ type: "FETCH_FAILED", error });
  }
}
