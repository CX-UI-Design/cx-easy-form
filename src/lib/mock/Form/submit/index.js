const formMap = {
  "submit": {
    "resultCode": "200",
    "resultMsg": "表单提交操作成功",
    "resultData": true
  },
}

export default {
  submit: config => {
    return formMap['submit'];
  },
}
