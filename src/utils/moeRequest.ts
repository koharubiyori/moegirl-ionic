import request, { RequestOptions } from './request'

export default function<ResponseData = any>(config: RequestOptions): Promise<ResponseData> {
  // 为所有萌百请求默认添加format: 'json'
  if (!config.params) config.params = {}
  config.params.format = 'json'

  return new Promise((resolve, reject) => {
    request(config)
      .then(data => {
        const { data: reqData } = data
        reqData.error ? reject(reqData.error) : resolve(reqData)
      })
      .catch(e => {
        console.log(e)
        reject()
      })
  })
  
}