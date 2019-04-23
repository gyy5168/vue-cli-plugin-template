import axios from 'axios'

let excGet = (httpAxios) => {
  // 重置了GET方法，包装params
  httpAxios.oldGet = httpAxios.get
  httpAxios.get = (url, data, config) => {
    return httpAxios.oldGet(url, Object.assign({ params: data }, config || {}))
  }
}
const http = axios.create({
  'baseURL': '/',
  'headers': {
    'Content-Type': 'application/json;charset=UTF-8',
    'source': 101
  },
  validateStatus: (status) => {
    return status < 400
  }
})

const loghttp = axios.create({
  'baseURL': '/',
  'headers': {
    'Content-Type': 'application/json;charset=UTF-8',
    'source': 101
  },
  validateStatus: (status) => {
    return status < 400
  }
})

const qidahttp = axios.create({
  'baseURL': '/',
  'headers': {
    'Content-Type': 'application/json;charset=UTF-8',
    'source': 101
  },
  validateStatus: (status) => {
    return status < 400
  }
})

const commonhttp = axios.create({
  'baseURL': '/',
  'headers': {
    'Content-Type': 'application/json;charset=UTF-8',
    'source': 101
  },
  validateStatus: (status) => {
    return status < 400
  }
})
excGet(http)
excGet(loghttp)
excGet(qidahttp)
excGet(commonhttp)

const req = {
  'resolve': config => {
    return config
  },
  'reject': error => {
    // eslint-disable-next-line
    return Promise.reject('req', error)
  }
}

const res = {
  'resolve': response => {
    if (response.status === 201) {
      response.data = response.data || {}
      response.data.Location = response.headers.location
    }
    return response.data
  },
  'reject': error => {
    return Promise.reject(error.response)
  }
}

http.interceptors.request.use(req.resolve, req.reject)
loghttp.interceptors.request.use(req.resolve, req.reject)
qidahttp.interceptors.request.use(req.resolve, req.reject)
commonhttp.interceptors.request.use(req.resolve, req.reject)

http.interceptors.response.use(res.resolve, res.reject)
loghttp.interceptors.response.use(res.resolve, res.reject)
qidahttp.interceptors.response.use(res.resolve, res.reject)
commonhttp.interceptors.response.use(res.resolve, res.reject)

let setToken = function (token) {
  http.defaults.headers.common['token'] = token
  qidahttp.defaults.headers.common['token'] = token
  commonhttp.defaults.headers.common['token'] = token
}

export { http, loghttp, qidahttp, commonhttp, setToken }
