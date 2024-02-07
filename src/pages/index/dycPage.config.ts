/*
 * @Author: @memo28.repo
 * @Date: 2024-02-07 20:38:49
 * @LastEditTime: 2024-02-07 20:38:51
 * @Description: 
 * @FilePath: /v3-uni-temp/src/pages/index/dycPage.config.ts
 */
import { definePageConfig, getMode } from '@memo28.cmd/dynamically-generate-pages'

console.log(getMode()) // test

export default definePageConfig({
    pages: {
        style: {
            // 根据环境 设置页面标题
            navigationBarTitleText: getMode() === 'test' ? '首页:test' : '首页',
            h5: {}
        }
    }
})