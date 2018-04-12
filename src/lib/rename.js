export const getStageName = function (name, prefix, index) {
  // console.log("改变的前缀名称为：", prefix)
  if (!name) throw ("the component should be set with the initial name，" +
    "please check index: " + index + " component' name whether it's property is set");
  if (typeof prefix !== "string" || !prefix) return name;
  const default_name = "default-";
  if (name.includes(default_name, 0)) {
    const reg = new RegExp(default_name, "g");
    return name.replace(reg, prefix);
  }
  else {
    return name;
  }
}
