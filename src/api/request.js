import axios from "axios";
import {ElMessage} from 'element-plus'

let url = "http://localhost:2020/"

//使用axios下面的create([config])方法创建axios实例，其中config参数为axios最基本的配置信息。
const request = axios.create({
    // baseURL: "http://127.0.0.1:4523/m1/2762154-0-default", // 发送到apifox
    baseURL: url, // 发送到后端
    timeout: 5000,// request timeout
    withCredentials: true, // send cookies when cross-domain requests
})

// Response 拦截器
request.interceptors.response.use(
    response => {
        const res = response.data
        if (res == null || res.status !== 200) {
            ElMessage({type: 'error', message: res.message})
            return Promise.reject(new Error(res.message || '服务器发生异常，且异常信息丢失'))
        } else {
            return res
        }
    },
    error => {
        ElMessage({type: 'error', message: error.message})
        return Promise.reject(new Error("服务器出现异常，请稍后重新尝试访问。" + error.message))
    }
)

export default request