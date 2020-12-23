import { takeEvery } from "redux-saga/effects";
import { fetcHomePagehData } from "./createSagaAction";
import { REQUEST_HOMEPAGE_DATA } from "./actionTypes";

function* watchFetchData() {
    yield takeEvery(REQUEST_HOMEPAGE_DATA,fetcHomePagehData)
}

export default watchFetchData
