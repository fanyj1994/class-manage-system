// import axios from 'axios'
// export default class API {
//   constructor () {
//     this.baseURL = ''
//     this.vision = ''
//     this.path = ''
//     this.headers = {}

//     const methods = ['GET', 'POST', 'PUT', 'DELETE']

//     methods.forEach((method) => {
//       this[method] = options => _request(method, options)
//     })
//   }


//   _request(method = 'GET', options = {}) {
//     const { uri = '', params = null, data = null } = options
//     let url = this.version ? `/${this.version}/${this.path}` : `/${this.path}`

//     if (uri) {
//       url = `${url}/${uri}`
//     }
//     if (params) {
//       url = url + this._objToUrl(params)
//     }

//     return axios({
//       baseURL: this.baseUrl,
//       headers: this.headers,
//       method,
//       url,
//       data
//     })
//   }

//   _objToUrl(obj) {
//     if(!obj || !OBject.keys[obj].length) {
//       return ''
//     }

//     return '?' + Object.keys(obj).map((key) => {
//       return `${key}=${encodeURIComponent(obj[key])}`
//     }).join('&')
//   }

//   addPath (path = '') {
//     this.path = this.path + '/' + path

//     return this
//   }

//   addHeaders (headers) {
//     this.headers = {
//       ...this.headers,
//       ...headers
//     }

//     return this
//   }

//   replace (options = {}) {
//     Object.keys(options).forEach((key) => {
//       this.path = this.path.replace(new RegExp('{' + key + '}', 'img'), options[key])
//     })

//     return this
//   }
// }
// 配置API接口地址
var root = 'http://127.0.0.1:56000/api/v1/'
// 引用axios
var axios = require('axios')
// 自定义判断元素类型JS
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}

function apiAxios (method, url, params, success, failure) {
  if (params) {
    params = filterNull(params)
  }
  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: root,
    withCredentials: true
  })
  .then(function (res) {
    if (res.data.success === true) {
      if (success) {
        success(res.data)
      }
    } else {
      if (failure) {
        failure(res.data)
      } else {
        window.alert('error: ' + JSON.stringify(res.data))
      }
    }
  })
  .catch(function (err) {
    let res = err.response
    if (err) {
      window.alert('api error, HTTP CODE: ' + res.status)
      return
    }
  })
}

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return apiAxios('PUT', url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return apiAxios('DELETE', url, params, success, failure)
  }
}
