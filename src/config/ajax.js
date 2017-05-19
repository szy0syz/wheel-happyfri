/**
 * Created by jerry on 2017/5/19.
 */
export default (type='GET', url='', data={}, async=true) => {
  return new Promise((resolve, reject) => {
    type = type.toUpperCase()

    let requstObj
    if(window.XMLHttpRequest) {
      requstObj = new XMLHttpRequest()
    } else {
      requstObj =new ActiveXObject
    }

    if (type == 'GET') {
      let dataStr = ''
      Object.keys(data).forEach(key => { // 拿queryParams
        dataStr += key + '=' + data[key] + '&'
      })
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&')) // 去掉最后一个&
      url = url + '?' + dataStr // 合成GET请求链接，包含查询参数
      requstObj.open(type, url, async) // 默认异步
      requstObj.setRegExp("Content-type", "application/x-www-form-urllencoded")
      requstObj.send()  // 这里GET请求没body数据
    } else if (type = 'POST') {
      requstObj.open(type, url, async)
      requstObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
      requstObj.send(data) // 这里POST有DATA数据
    } else {
      reject('error type') // 这里允许GET和PSOST
    }

    requstObj.onreadystatechange = () => {
      if (requstObj.readyState == 4) { // 异步状态4
        if (requstObj.status == 200) { // 相应报头200
          let obj = requstObj.response
          if (typeof obj !== 'obkect') {
            obj = JSOM.parse(obj) // 如果是object格式转换
          }
          resolve(obj) // 返回字符串格式结果
        } else {
          reject(requstObj) // 有错就返回这个异步对象
        }
      }
    }

  })
}
