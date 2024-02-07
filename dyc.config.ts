/*
 * @Author: @memo28.repo
 * @Date: 2024-02-07 20:27:13
 * @LastEditTime: 2024-02-07 20:27:25
 * @Description: 
 * @FilePath: /v3-uni-temp/dyc.config.ts
 */
import { defineConfig } from '@memo28.cmd/dynamically-generate-pages';

export default defineConfig({
    // 主包规则 告诉我你的主包页面规则是如何定义的？
    // 例如: /pages/home/index.vue -> 首页
    mainPackageRules: ["./pages/**/*.vue"],
    // 分包规则 告诉我你的分包页面规则是如何定义的？
    // 例如：/pages_home/pages/home/idex.vue  ->  分包首页
    subPackagesRules: ["./page_*/**/**.vue"],
    // 告诉我你的 pages.json 页面路径在哪？
    rootPagesJsonPath: "./pages.json",
    // 当你的页面缺少 dycPage.config.ts 文件时是否自动创建补齐
    whetherMakeUpTheConfig: true,
    // 创建 dycPage.config 的文件后缀是什么？
    whetherMakeUpTheConfigFileSuffix: 'ts',

    // 为您生成声明式路由配置文件
    generateClaimsRoute:'./router/dycRouter.ts'
})