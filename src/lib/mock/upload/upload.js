const roleMap = {
  "autoFormTemplate": {
    "resultCode": "200",
    "resultMsg": "操作成功。",
    "resultData": [
      {"fileName": "IMG_0872.JPG", "fileSize": 293606, "fileUrl": ""}
    ],
    "pageNum": null,
    "pageSize": null,
    "total": null
  }
}

export default {
  upload: config => {
    const baseUrl = 'http://otaflb4oo.bkt.clouddn.com/' + 'mimo/p/avatar/cartoon/avatar';
    const type = ".jpg-thumb_m2.2_s200.200"
    roleMap["autoFormTemplate"].resultData.map((item, index) => {
      const random = parseInt(Math.random() * 200);
      item.fileUrl = baseUrl + random + type;
    })
    console.log(roleMap["autoFormTemplate"]);
    return roleMap["autoFormTemplate"];
  },

}
