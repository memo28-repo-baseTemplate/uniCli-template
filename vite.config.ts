/*
 * @Author: @memo28.repo
 * @Date: 2023-02-09 21:17:58
 * @LastEditTime: 2023-12-19 17:16:27
 * @Description: 
 * @FilePath: /v3-uni-temp/vite.config.ts
 */
import { Engine } from '@memo28/vitebuild';
import { defineConfig } from "vite";


const config = new Engine().setTechnologyStack('uniapp').getBuildConfig()
// https://vitejs.dev/config/
export default defineConfig({
  ...config
});
