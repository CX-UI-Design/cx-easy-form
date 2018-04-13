import {invert} from '../index'

const FormEvent = {
  /**
   * group-witch (show or hide) for auto-form
   * @param params
   */
  groupSwitch: (params) => {
    const fieldsRefer = params.keyRefer.fields; //fields keyRefer
    const initiator = 'separator';
    const formItem = params.formItem;
    //judge initiator is 'separator' or not ， because only 'separator' can handle form-items hide or show
    if (formItem[fieldsRefer["item-type"]] !== initiator) return;
    params.formItemFather.map((item, index) => {
      /*Exclude the object(initiator) whitch is handle(has clicked) itself by index, and target-groupname equals(is) initiator-groupname*/
      if (index !== params.index && item[fieldsRefer["group-name"]] === formItem[fieldsRefer["group-name"]]) {
        item[fieldsRefer["hidden"]] = invert(item[fieldsRefer["hidden"]]);
      }
    })
  },
  test: () => {
    alert('本身就有');
  }
}
export default FormEvent;
