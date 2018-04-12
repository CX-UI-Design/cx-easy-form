import * as filters from './filters/index';//filter
import {ConfFormer} from './config'
import init from './init'
import {getStageName} from './rename'
import store from './store'
import mock from './mock/register'
//iconfont - config
import './utils/svgConfig'


/* ------------- About Form , its components and other components we need------------- */
//Basic
import Button from './packages/Button/index'
import IconClass from './packages/Icon/Icon-svg/index'
import IconSvg from './packages/Icon/Icon-svg/index'

//form base
import Input from './packages/Input/index'
import Radio from './packages/Radio/index'
import Cascader from './packages/Cascader/index'
import Switch from './packages/Switch/index'
import Slider from './packages/Slider/index'

//checkbox
import Checkbox from './packages/Checkbox/Checkbox/index'
import RoleCheckBtn from './packages/Checkbox/RoleCheckBtn/index'

// //select
import Select from './packages/Select/Select/index'
import SelectRemote from './packages/Select/Select-remote/index'
import AreaLinkage from './packages/Select/Area-linkage/index'
import RoleGroup from './packages/Select/Role-group/index'
import RoleEmployee from './packages/Select/Role-employee/index'
import CustomerInfoSingle from './packages/Select/Customer-info-single/index'
import CustomerInfoLinkage from './packages/Select/Customer-info-linkage/index'
import SimpleTreeSelect from './packages/Select/Simple-tree-select'


//date
import TimePicker from './packages/Date/Time-picker/index'
import DatePicker from './packages/Date/Date-picker/index'
import OnlyMMDDPicker from './packages/Date/Only-MMDD-picker/index'
import TimeInterval from './packages/Date/Time-interval/index'

//Upload
import Upload from './packages/Upload/Upload/index'
import TotalUpload from './packages/Upload/Total-upload/index'

//transfer
import Authorizer from './packages/Transfer/Authorizer/index'

//tree
import SimpleTree from './packages/Tree/Simple-tree'

//other
import Text from './packages/Text/index'
import Avatar from './packages/Avatar/index'
import Separator from './packages/Separator/index'
import RoleManageRange from './packages/Other/Role-manage-range'

//table in form
import BaseTable from './packages/Table-in-form/Base-table/index'


// import autoFormBtn from './Form/auto-form-Button.vue'


//表单 - items 相关
import AutoFormOperation from './packages/Auto-form-operation/index'
import FormItem from './packages/Auto-form-item/Form-item/index'
import TotalMusterItem from './packages/Auto-form-item/Total-muster-item/index'
import AutoForm from './packages/Auto-form/Auto-form/index'
import Form from './packages/Auto-form/Form/index'


import Dialog from './packages/Dialog/src/dialog.vue'


const components = [
  //Baisc
  Button,
  IconClass,
  IconSvg,

  //Form base
  Input,
  Radio,
  Cascader,
  Switch,
  Slider,

  //checkbox
  Checkbox,
  RoleCheckBtn,

  //select
  Select,
  SelectRemote,
  AreaLinkage,
  RoleGroup,
  RoleEmployee,
  CustomerInfoSingle,
  CustomerInfoLinkage,
  SimpleTreeSelect,

  //date
  TimePicker,
  DatePicker,
  OnlyMMDDPicker,
  TimeInterval,

  //Upload
  Upload,
  TotalUpload,

  //transfer
  Authorizer,
  //tree
  SimpleTree,

  //other
  Text,
  Avatar,
  Separator,
  RoleManageRange,

  //table in form
  BaseTable,

  //item and all
  AutoFormOperation,
  FormItem,
  TotalMusterItem,
  AutoForm,
  Form,

  //dialog
  Dialog

]

const install = function (Vue, opts = {}) {
  //Former plug-in external param config
  ConfFormer(Vue, opts);
  //init methods and ready handle
  init(Vue, Vue.former);

  //binding component
  components.map((component, index) => {
    Vue.component(getStageName(component.name, Vue.former.stageName, index), component)
  })

  //register global utility filters.
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  });

}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


module.exports = {
  body: {
    version: '1.0.1',
    install,


    //Baisc
    Button,
    IconClass,
    IconSvg,

    //Form base
    Input,
    Radio,
    Cascader,
    Switch,
    Slider,

    //checkbox
    Checkbox,
    RoleCheckBtn,

    //select
    Select,
    SelectRemote,
    AreaLinkage,
    RoleGroup,
    RoleEmployee,
    CustomerInfoSingle,
    CustomerInfoLinkage,
    SimpleTreeSelect,

    //date
    TimePicker,
    DatePicker,
    OnlyMMDDPicker,
    TimeInterval,


    //Upload
    Upload,
    TotalUpload,

    //transfer
    Authorizer,
    //tree
    SimpleTree,

    //other
    Text,
    Avatar,
    Separator,
    RoleManageRange,

    //table in form
    BaseTable,

    //item and all
    AutoFormOperation,
    FormItem,
    TotalMusterItem,
    AutoForm,
    Form,

    //dialog
    Dialog
  },
  store: store,
  mock: mock
}


module.exports.default = module.exports

