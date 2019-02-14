<template>
    <div>
        <h3>项目经历</h3>
        <h4 class="row">
            <span>蓝灯鱼智能检索平台</span>
            <span>2018.10-至今</span>
        </h4>
        <ul>
            <li>- 前端使用Vue\Nuxt ElementUI, 制定前端开发规范, 构建前端开发框架, 同时担任UI设计, 完成所有页面编写.</li>
            <li>- 后台使用Nest.js, 重新制定后台开发规范, 规范鉴权逻辑, 规范异常处理, 添加多语言, 添加统一的字段验证, 分离业务代码与功能代码. 重构后台开发框架, 制定API交互规范.</li>
            <li>- 编写CircleCI脚本, 构建持续集成, 持续交付, 持续部署流程. 使用 Minio 完成文件服务器构建, 分离算法层, 业务层, 文件层, 构建基于Redis的缓存层. 构建基于Git Flow的开发流程.</li>
            <li>
                - 项目开发预览地址:
                <a href="https://dev.lanternfish.ai">https://dev.lanternfish.ai</a> 使用任意账号密码登录
            </li>
        </ul>
        <h4 class="row">
            <span>北京邮电大学 长顺志愿扶贫项目</span>
            <span>2017.10-2018.6</span>
        </h4>
        <ul>
            <li>- 响应国家, 学校号召, 为国家贫困县开发农产品信息发布平台.</li>
            <li>- 担任技术负责人。 负责产销对接平台的架构与开发, 前端使用 Vue Vuetify, 后端使用 Prisma 提供 GraphQL API. 负责景区售票平台的前端开发, 使用Vue Element. 负责产销对接可视化数据库客户端的开发, 使用Vue Electron</li>
            <li>
                - 项目地址:
                <a href="https://github.com/ymz-studio/cshunWebsite">https://github.com/ymz-studio/cshunWebsite</a>
                &nbsp;
                <a
                    href="https://github.com/ymz-studio/cshun-website-prisma"
                >https://github.com/ymz-studio/cshun-website-prisma</a>
                &nbsp;
                <a
                    href="https://github.com/ymz-studio/cshunTool"
                >https://github.com/ymz-studio/cshunTool</a>
            </li>
        </ul>
        <h4 class="row">
            <span>国家教育部 产学合作协同育人</span>
            <span>2017.6 - 2017.10</span>
        </h4>
        <ul>
            <li>- 以腾讯公司微信校园卡项目为载体, 建设校园电子校园卡服务.</li>
            <li>- 担任项目负责人。 负责项目整体的架构开发以及行政对接. 前端使用 Bootstrap Jquery, 后端使用 Django 进行服务端渲染.</li>
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
