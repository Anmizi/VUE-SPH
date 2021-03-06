// 对axios进行二次封装
import axios from "axios";
// 导入nprogess进度条
import Nprogress from "nprogress";
// 导入进度条样式
import 'nprogress/nprogress.css'

// 利用axios对象的方法create,去创建一个axios实例
// requests就是axios实例
const requests = axios.create({
  // 配置对象
  // 基础路径
  baseURL: '/api',
  // 请求超时时间
  timeout: 5000
})

// 请求拦截器
requests.interceptors.request.use((config)=>{
  // 进度条开始
  Nprogress.start()
  return config
})

// 响应拦截器
requests.interceptors.response.use((res)=>{
  // 成功的 回调函数，服务器相应数据返回以后，响应拦截器可以检测到

  // 进度条结束
  Nprogress.done()
  return res.data
},()=>{
  // 响应失败的回调函数
  return Promise.reject(new Error('faile'))
})
export default requests