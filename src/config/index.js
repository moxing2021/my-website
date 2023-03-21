
/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod'

const EnvConfig = {
    dev:{
        baseApi:'/',
        mockApi:'https://www.fastmock.site/mock/89c13e655a2d5e3babf5af3a91cc496f/api'
    },
    test:{
        baseApi:'/',
        mockApi:'https://www.fastmock.site/mock/89c13e655a2d5e3babf5af3a91cc496f/api'
    },
    prod:{
        baseApi:'/',
        mockApi:'https://www.fastmock.site/mock/89c13e655a2d5e3babf5af3a91cc496f/api'
    }
}

export default {
    env:'dev',
    mock:true,
    ...EnvConfig[env]
}