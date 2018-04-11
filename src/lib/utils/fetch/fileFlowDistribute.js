import Utils from '../index'

/**
 * add new head request
 * @type {{}}
 */
const NewRequestData = {}

/**
 * add new requestHead in old requestHead
 * @param Old
 * @param New
 * @returns {*}
 */
export function newRequestHead(Old, New = NewRequestData) {
  if (Utils.isXType('object', Old) && Utils.isXType('object', New)) {
    for (let key in New) {
      Old[key] = New[key];
    }
    return Old;
  }
  else {
    throw ('the format of request head (old / new) data should be Object ,find it');
  }
}

/**
 * file flow distribute handle
 * @param response
 * @param callback
 */
export function fileFlowDistribute(response, callback) {
  const headers = response.headers;
  const fileName = decodeURI(headers['downloadfilename']);
  let blob = new Blob([response.data], {type: headers['content-type']});
  let downloadElement = document.createElement('a');
  let href = window.URL.createObjectURL(blob); //create a
  downloadElement.href = href;
  downloadElement.download = fileName ? decodeURI(fileName) : 'file.xlsx'; //set file name
  document.body.appendChild(downloadElement);
  downloadElement.click(); //click download
  document.body.removeChild(downloadElement); //remove
  window.URL.revokeObjectURL(href);
  callback(response);
}

/**
 * flow-type List
 * @type {[string,string,string]}
 */
export const flowTypeList = [
  'application/octet-stream;charset=UTF-8',
  'application/x-msdownload',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'
]
