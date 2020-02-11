import { isPlatform } from '@ionic/react'
import axios, { AxiosRequestConfig } from 'axios'
import { HTTP } from '@ionic-native/http'
import qs from 'qs'

export interface Requestor {
  <RequestData = any>(options: RequestOptions): Promise<{
    status: number
    data: RequestData
  }>
}

export interface RequestOptions {
  method?: 'get' | 'post'
  baseURL?: string
  url?: string
  params?: object
  headers?: object
}

const baseURL = isPlatform('hybrid') ? 'https://zh.moegirl.org/api.php' : 'api.php'
const timeout = 7000
const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
}

let requestor: any

if (isPlatform('hybrid')) {
  requestor = (options: RequestOptions) => {
    let method = options.method || 'get'
    let url = (options.baseURL || baseURL) + '/'
    let params = options.params || {}
    let requestHeaders = { 
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
      ...headers, 
      ...options.headers, 
    }

    return HTTP[method](url, params, requestHeaders)
  }
} else {
  requestor = axios.create({ 
    baseURL, 
    headers, 
    transformRequest: qs.stringify,
    withCredentials: true 
  })

  requestor.interceptors.request.use((req: AxiosRequestConfig) => {
    if (req.method === 'post') {
      req.data = req.params
      delete req.params
    }

    return req
  })
}

let timeoutRequestor = (options: RequestOptions) => Promise.race([
  new Promise((resolve, reject) => setTimeout(reject, timeout, 'timeout')),
  requestor(options)
])

export default timeoutRequestor as Requestor