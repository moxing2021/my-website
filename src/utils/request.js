/**
 * axios封装
 */
import axios from 'axios'
import config from '@/config'
import {ElMessage} from 'element-plus'
import router from '@/router'
const TOKEN_INVALID = 'TOKEN 认证失败，请重新登陆'
const NETWORK_ERROR = '网络请求异常请稍后重试'
// 创建axios实例对象
const service = axios.create({
    baseURL:config.baseApi,
    timeout:8000
})
// 请求拦截
service.interceptors.request.use(req =>{
    // TO-DO
    const headers = req.headers
    if(!headers.Authorization) headers.Authorization = 'Bear jack++'
    return req
})

// 响应拦截
service.interceptors.response.use(res =>{
    const { code, data, msg} = res.data
    if(code === 200){
        return data
    }else if(code === 4001) {
        ElMessage.error(TOKEN_INVALID)
        setTimeout(()=>{
            router.push('/login')
        },3000)
        return Promise.inject(msg)
    }else{
        ElMessage.error(NETWORK_ERROR)
    }
})

/**
 * 请求核心函数
 * @param {*} options 请求配置
 * @returns 
 */
function request(options){
    options.method = options.method || 'get'
    if(options.method.toLowerCase() === 'get'){
        options.params = options.data
    }

    if(config.env === 'production'){
        service.defaults.baseURL = config.baseApi
    }else{
        service.defaults.baseURL = config.mock? config.mockApi:config.baseApi
    }
    return service(options)
}

['get','post','put','delete','patch'].forEach((item)=>{
    request[item] = (url,data,options) =>{
        return request({
            url,
            data,
            method:item,
            ...options
        })
    }
})
export default request