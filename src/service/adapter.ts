/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-10-12 15:11:10
 * @LastEditTime: 2023-10-12 15:14:20
 * @Description: 
 * @FilePath: /v3-uni-temp/src/service/adapter.ts
 */
import type { InternalAxiosRequestConfig } from 'axios';

export function adapter(config: InternalAxiosRequestConfig<unknown>) {
    return new Promise((resolve, reject) => {
        // @ts-ignore
        var settle = require('axios/lib/core/settle');
        // @ts-ignore
        var buildURL = require('axios/lib/helpers/buildURL');
        // @ts-ignore
        var buildFullPath = require('axios/lib/core/buildFullPath');
        let fullurl = buildFullPath(config.baseURL, config.url)
        uni.request({
            // @ts-ignore
            method: config.method?.toUpperCase() as string,
            url: buildURL(fullurl, config.params, config.paramsSerializer),
            header: config.headers,
            // @ts-ignore
            data: config.data,
            // @ts-ignore
            dataType: config?.dataType,
            responseType: config.responseType,
            // @ts-ignore
            sslVerify: config?.sslVerify,
            complete: function complete(response) {
                response = {
                    // @ts-ignore
                    data: response?.data,
                    // @ts-ignore
                    status: response?.statusCode,
                    errMsg: response.errMsg,
                    // @ts-ignore
                    header: response?.header,
                    config: config
                };

                settle(resolve, reject, response);
            }
        })
    })

}