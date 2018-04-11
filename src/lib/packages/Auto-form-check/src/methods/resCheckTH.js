const resCheckTHMap = [
  //index 序号栏
  {
    type: "index",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
    label: "#",  //表头标题
    key: null, //表头对应内容key
    align: "center",  //标题位置（居中，左，右）
    width: "60",     //表头宽度
    fixed: "left",//固定列（left，right，是/否）
  },
  //错误编号
  {
    type: "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
    label: "错误编号",  //表头标题
    key: "errNum", //表头对应内容key
    align: "center",  //标题位置（居中，左，右）
    width: "160",     //表头宽度
    fixed: false,//固定列（left，right，是/否）
  },
  //错误信息
  {
    type: "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
    label: "错误信息",  //表头标题
    key: "info", //表头对应内容key
    align: "center",  //标题位置（居中，左，右）
    width: "320",     //表头宽度
    fixed: false,//固定列（left，right，是/否）
  }
]
export default resCheckTHMap;
