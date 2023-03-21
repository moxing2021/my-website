
/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod'

const EnvConfig = {
    // 开发
    development:{
        baseApi:'/',
        mockApi:'https://www.fastmock.site/mock/89c13e655a2d5e3babf5af3a91cc496f/api'
    },
    // 测试
    test:{
        baseApi:'/',
        mockApi:'https://www.fastmock.site/mock/89c13e655a2d5e3babf5af3a91cc496f/api'
    },
    // 生产
    production:{
        baseApi:'https://www.fastmock.site/mock/89c13e655a2d5e3babf5af3a91cc496f/api',
        mockApi:'https://www.fastmock.site/mock/89c13e655a2d5e3babf5af3a91cc496f/api'
    }
}

export default {
    env,
    mock:true,
    namespace:'manger', // storage命名空间
    ...EnvConfig[env]
}