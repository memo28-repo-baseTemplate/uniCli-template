/*
 * @Author: 邱狮杰
 * @Date: 2023-04-05 17:46:31
 * @LastEditTime: 2023-04-05 17:52:08
 * @Description:
 * @FilePath: /v3-uni-temp/src/service/index.ts
 */

import { ServiceUtils } from '@memo28/service'

const service = new ServiceUtils()
  .modules({})
  .initializeConfiguration({
    baseURL: '',
    debugger: true,
  })
  .instantiation()
  .getAxios()

export default service
