/**
 * 
 */
import request from "../utils/request";
// 登录测试
export const getLogin = (res)=>{
   return request({
        method:'get',
        url:'/login'
    })
}
// 导航菜单
export const getNav = (res)=>{
    return request({
         method:'get',
         url:'/getnav'
     })
 }