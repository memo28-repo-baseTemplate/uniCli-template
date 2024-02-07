/*
 * @Author: @memo28.repo
 * @Date: 2024-02-07 11:08:57
 * @LastEditTime: 2024-02-07 11:09:06
 * @Description: 
 * @FilePath: /v3-uni-temp/mut.config.ts
 */
import { ParsingConfiguration, UniConfigurationParsingOptions } from '@memo28.cmd/uni-configuration-parsing';

const h: UniConfigurationParsingOptions = {
    name: '',
    appid: '',
    versionCode: 1
}

const finalConfig = new ParsingConfiguration(h).addAndroidPermissions((config) => {

}).done()

export default finalConfig