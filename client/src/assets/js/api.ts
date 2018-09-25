import axios from 'axios'
// 本地环境
axios.defaults.baseURL = 'http://localhost:8090/api'

export default {
  /* 登录接口 */
  login (data: object): any {
    return axios({
      method: 'post',
      url: '/login',
      data: data
    })
  },
  /* 注册接口 */
  register (data: object): any {
    return axios({
      method: 'post',
      url: '/register',
      data: data
    })
  }
}
