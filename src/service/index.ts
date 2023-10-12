/*
 * @Author: 邱狮杰
 * @Date: 2023-04-05 17:46:31
 * @LastEditTime: 2023-10-12 15:14:52
 * @Description:
 * @FilePath: /v3-uni-temp/src/service/index.ts
 */

import { ServiceUtils } from '@memo28/service'
import { adapter } from './adapter'

const service = new ServiceUtils()
  .modules({})
  .initializeConfiguration({
    baseURL: '',
    debugger: true,
    // @ts-ignore
    adapter: adapter
  })
  .instantiation()
  .getAxios()

export default service
