<template>
    <div>
        <h3>项目经历</h3>
        <h4 class="row">
            <span>miui.com | MIUI 官网</span>
            <span>2020.4</span>
        </h4>
        <p>负责 PC 和移动端整体架构和部分页面的开发</p>
        <ul>
            <li>- 100+ 页面, 10000+ 资源, 19天开发完成, 50小时极限重构;</li>
            <li>- 极致性能优化;</li>
            <li>- 数千万 PV, 高可用 SSR 服务</li>
        </ul>
        <h4 class="row">
            <span>Folme 物理动画引擎</span>
            <span>2020.1</span>
        </h4>
        <p>负责引擎的全部开发工作</p>
        <ul>
            <li>- 相对全面, 业界性能最强的 JavaScript 物理动画引擎;</li>
            <li>- 原生 JavaScript, 零依赖, 小巧优雅, 万余字的详细文档和 Demo;</li>
            <li>- 可以实现 MIUI 12 中的任何物理动画效果;</li>
            <li>- 动画参数互通, 开发与设计零沟通成本;</li>
            <li>- npm install @folmejs/core, 文档未来将会开放</li>
        </ul>
        <h4 class="row">
            <span>Folme 动效组件库</span>
            <span>2020.4</span>
        </h4>
        <p>项目发起人, 负责组件库的全部开发工作</p>
        <ul>
            <li>- 基于 WebComponent 的跨框架组件库, 可以在任何环境下使用;</li>
            <li>- 提供按需加载, 开箱即用, 体积小, 高性能的动效组件;</li>
            <li>- 沉淀各个的动画效果最佳解决方案, 并且持续优化;</li>
            <li>- MIUI 12 官网中使用 Folme 组件库提供的高性能帧动画播放器, 未来将会开源</li>
        </ul>
        <h4 class="row">
            <span>font.sec.miui.com | 小米字体服务</span>
            <span>2019</span>
        </h4>
        <p>项目发起人, 负责前后端全部开发工作</p>
        <ul>
            <li>- 对标 Google Fonts, 提供简体中文与西文在线字体;</li>
            <li>- 优化分片策略, 简体中文相比 Google Fonts 加载速度提升约30%;</li>
            <li>- 提供稳定的, 快速的高可用服务;</li>
            <li>- 管理员可上传字体, 系统自动完成分片;</li>
            <li>- 已开放 小米兰亭 Pro 字体, MIUI 12 官网使用此服务</li>
        </ul>
        <h4 class="row">
            <span>p.sec.miui.com | 小米隐私合规检测平台 (实习期项目)</span>
            <span>2019</span>
        </h4>
        <p>负责全部前端开发工作, 部分真机调试后端开发工作</p>
        <ul>
            <li>- 前端数据处理, 数据可视化</li>
            <li>- 可直接操作真机进行测试;</li>
        </ul>
        <h4 class="row">
            <span>效率提升工程其他项目</span>
            <span>2019/2020</span>
        </h4>
        <p>以下项目本人发起, 并负责前后端全部开发工作</p>
        <ul>
            <li>- (进行中) 对标 Auth0, 小米内部通用用户管理服务;</li>
            <li>- (进行中) 通用配置/秘钥管理平台, 提供完善的信息管理服务, 可直接通过 curl 设置当前环境的环境变量;</li>
            <li>- (进行中) 小米通用服务平台. 微前端架构, 聚合通用服务;</li>
            <li>- 统一 Gitlab CI 模板, 使用 include 引入模板, 配置几个环境变量即可实现持续集成, 持续交付, 持续部署, 前后端项目均支持;</li>
            <li>- FDS (小米自研对象存储系统) Nodejs SDK 开发;</li>
            <li>- EMQ (小米自研消息队列系统) Nodejs SDK 开发;</li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.row {
    display: flex;
    justify-content: space-between;
}
</style>
