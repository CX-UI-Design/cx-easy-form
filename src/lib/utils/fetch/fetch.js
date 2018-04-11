/*
 * Type of data handle for axios-api
 * You can use those fun in other js
 * created: 2017/9/30.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2017 Broccoli spring( gcx )
 */
/*==========================================================================================================================*/
import axios from 'axios';
// import * as store from '@/utils/nsQuery/nsStore'
// import {Message} from 'element-ui';
import {newRequestHead, fileFlowDistribute, flowTypeList} from './fileFlowDistribute'


const service = axios.create({
  baseURL: process.env.API_ROOT,                // base_url
  timeout: 5000,
  withCredentials: true,                        // send cookie switch
  // headers: newRequestHead(store.requestHead.get()),
});

service.interceptors.request.use(
  config => {
    //set interpreter (use to auto-form) to public store
    // store.requestHead.interpreter.set(config.headers.interpreter);
    // 请求之前
    // if (config.method === "post" || config.method === "put" || config.method === "delete") {
    //
    // }
    return config;
  },
  error => {
    Promise.reject(error);
  }
)

service.interceptors.response.use(
  // response => response,
  response => {
    const headers = response.headers;
    //distribution according to content-type
    if (headers && flowTypeList.some(item => item === headers['content-type'])) {
      //file flow distribute handle
      fileFlowDistribute(response, response => {
        return response;
      });
    }
    else {
      const resData = response.data;
      if (resData && resData.resultCode === "200") {
        return Promise.resolve(resData);
      }
      else {
        // Message({message: resData.resultMsg, type: 'error', duration: 3 * 1000});//throw message error
        return Promise.reject(resData);
      }
    }
  },
  error => {
    let errorInfo = error.data.error ? error.data.error.message : error.data;
    return Promise.reject(errorInfo);
  }
)

export default service;
