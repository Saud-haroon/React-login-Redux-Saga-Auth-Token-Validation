import {LOGIN_SUCCESS, LOGIN_FAILURE } from "../types";
import { put } from 'redux-saga/effects';
import { reject } from "q";

import {login} from '../../api/api'


export function* loginSaga(action) {
    try {
      const resp = yield login(action.payload);
      yield put({ type: LOGIN_SUCCESS, payload: resp.data });
    } catch (error) {
      yield put({ type: LOGIN_FAILURE, payload: error });
      reject(error);
    }
  }