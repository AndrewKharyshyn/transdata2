(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1226eaa7"],{8436:function(a,e,t){"use strict";e["a"]=["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegowina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo, the Democratic Republic of the","Cook Islands","Costa Rica","Cote d'Ivoire","Croatia (Hrvatska)","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","France Metropolitan","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Heard and Mc Donald Islands","Holy See (Vatican City State)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea, Democratic People's Republic of","Korea, Republic of","Kuwait","Kyrgyzstan","Lao, People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libyan Arab Jamahiriya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia, The Former Yugoslav Republic of","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova, Republic of","Monaco","Mongolia","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Seychelles","Sierra Leone","Singapore","Slovakia (Slovak Republic)","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","Spain","Sri Lanka","St. Helena","St. Pierre and Miquelon","Sudan","Suriname","Svalbard and Jan Mayen Islands","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan, Province of China","Tajikistan","Tanzania, United Republic of","Thailand","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna Islands","Western Sahara","Yemen","Yugoslavia","Zambia","Zimbabwe"]},"97cb":function(a,e,t){"use strict";t.r(e);var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"form-elements"},[t("div",{staticClass:"va-row"},[t("div",{staticClass:"flex md12"},[t("vuestic-widget",{attrs:{headerText:a._f("translate")("forms.inputs.title")}},[t("form",[t("div",{staticClass:"va-row"},[t("div",{staticClass:"flex md4"},[t("fieldset",[t("div",{staticClass:"form-group"},[t("div",{staticClass:"input-group"},[t("input",{attrs:{id:"simple-input",required:""}}),t("label",{staticClass:"control-label",attrs:{for:"simple-input"}},[a._v(a._s(a._f("translate")("forms.inputs.textInput")))]),t("i",{staticClass:"bar"})])]),t("div",{staticClass:"form-group with-icon-right",class:{"has-error":a.errors.has("successfulEmail"),valid:a.isSuccessfulEmailValid}},[t("div",{staticClass:"input-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.successfulEmail,expression:"successfulEmail"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{id:"successfulEmail",name:"successfulEmail",required:""},domProps:{value:a.successfulEmail},on:{input:function(e){e.target.composing||(a.successfulEmail=e.target.value)}}}),t("i",{staticClass:"fa fa-exclamation-triangle error-icon icon-right input-icon"}),t("i",{staticClass:"fa fa-check valid-icon icon-right input-icon"}),t("label",{staticClass:"control-label",attrs:{for:"successfulEmail"}},[a._v(a._s(a._f("translate")("forms.inputs.emailValidatedSuccess"))+" ")]),t("i",{staticClass:"bar"}),t("small",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("successfulEmail"),expression:"errors.has('successfulEmail')"}],staticClass:"help text-danger"},[a._v("\n                      "+a._s(a.errors.first("successfulEmail"))+"\n                    ")])])]),t("div",{staticClass:"form-group with-icon-right",class:{"has-error":a.errors.has("wrongEmail")}},[t("div",{staticClass:"input-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.wrongEmail,expression:"wrongEmail"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{id:"wrongEmail",name:"wrongEmail",required:""},domProps:{value:a.wrongEmail},on:{input:function(e){e.target.composing||(a.wrongEmail=e.target.value)}}}),t("i",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("wrongEmail"),expression:"errors.has('wrongEmail')"}],staticClass:"fa fa-exclamation-triangle icon-right input-icon"}),t("label",{staticClass:"control-label",attrs:{for:"wrongEmail"}},[a._v(a._s(a._f("translate")("forms.inputs.emailValidated")))]),t("i",{staticClass:"bar"}),t("small",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("wrongEmail"),expression:"errors.has('wrongEmail')"}],staticClass:"help text-danger"},[a._v(a._s(a.errors.first("wrongEmail"))+"\n                    ")])])]),t("div",{staticClass:"form-group"},[t("div",{staticClass:"input-group"},[t("textarea",{attrs:{type:"text",id:"simple-textarea",required:""}}),t("label",{staticClass:"control-label",attrs:{for:"simple-textarea"}},[a._v(a._s(a._f("translate")("forms.inputs.textArea")))]),t("i",{staticClass:"bar"})])])])]),t("div",{staticClass:"flex md4"},[t("fieldset",[t("div",{staticClass:"form-group with-icon-left"},[t("div",{staticClass:"input-group"},[t("input",{attrs:{id:"input-icon-left",name:"input-icon-left",required:""}}),t("i",{staticClass:"fa fa-envelope-o icon-left input-icon"}),t("label",{staticClass:"control-label",attrs:{for:"input-icon-left"}},[a._v(a._s(a._f("translate")("forms.inputs.inputWithIcon")))]),t("i",{staticClass:"bar"})])]),t("div",{staticClass:"form-group with-icon-right"},[t("div",{staticClass:"input-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.clearableText,expression:"clearableText"}],attrs:{id:"clear-input",name:"clear-input",required:""},domProps:{value:a.clearableText},on:{input:function(e){e.target.composing||(a.clearableText=e.target.value)}}}),t("i",{staticClass:"fa fa-times icon-right input-icon pointer",on:{click:function(e){a.clear("clearableText")}}}),t("label",{staticClass:"control-label",attrs:{for:"clear-input",role:"button"}},[a._v(a._s(a._f("translate")("forms.inputs.inputWithClearButton")))]),t("i",{staticClass:"bar"})])]),t("div",{staticClass:"form-group"},[t("div",{staticClass:"input-group"},[t("input",{attrs:{id:"inputWithDescription",required:"",title:""}}),t("label",{staticClass:"control-label",attrs:{for:"simple-input"}},[a._v(a._s(a._f("translate")("forms.inputs.textInputWithDescription")))]),t("i",{staticClass:"bar"}),t("small",{staticClass:"help text-secondary"},[a._v("\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n                      sed\n                      do eiusmod tempor incididunt ut labore et dolore magna\n                      aliqua.\n                    ")])])])])]),t("div",{staticClass:"flex md4"},[t("fieldset",[t("div",{staticClass:"form-group form-group-w-btn"},[t("div",{staticClass:"input-group"},[t("input",{attrs:{id:"input-w-btn",required:""}}),t("label",{staticClass:"control-label",attrs:{for:"input-w-btn"}},[a._v(a._s(a._f("translate")("forms.inputs.inputWithButton")))]),t("i",{staticClass:"bar"})]),t("div",{staticClass:"btn btn-micro btn-primary"},[a._v("\n                    "+a._s(a._f("translate")("forms.inputs.upload"))+"\n                  ")])]),t("div",{staticClass:"form-group form-group-w-btn"},[t("div",{staticClass:"input-group"},[t("input",{attrs:{id:"input-w-btn-round",required:""}}),t("label",{staticClass:"control-label",attrs:{for:"input-w-btn-round"}},[a._v(a._s(a._f("translate")("forms.inputs.inputWithRoundButton")))]),t("i",{staticClass:"bar"})]),t("div",{staticClass:"btn btn-primary btn-with-icon btn-micro rounded-icon"},[t("div",{staticClass:"btn-with-icon-content"},[t("i",{staticClass:"ion-md-cloud-outline ion"})])])])])])])])])],1)]),t("div",{staticClass:"va-row"},[t("div",{staticClass:"flex md12"},[t("vuestic-widget",{attrs:{headerText:a.$t("forms.dateTimePicker.title")}},[t("form",[t("div",{staticClass:"va-row"},[t("div",{staticClass:"flex md4"},[t("fieldset",[t("div",{staticClass:"form-group"},[t("div",{staticClass:"input-group"},[t("vuestic-date-picker",{attrs:{id:"date-picker-basic"},model:{value:a.datepicker.simple,callback:function(e){a.$set(a.datepicker,"simple",e)},expression:"datepicker.simple"}}),t("label",{staticClass:"control-label",attrs:{for:"date-picker-basic"}},[a._v("\n                      "+a._s(a.$t("forms.dateTimePicker.basic"))+"\n                    ")]),t("i",{staticClass:"bar"})],1)]),t("div",{staticClass:"form-group"},[t("div",{staticClass:"input-group"},[t("vuestic-date-picker",{attrs:{id:"date-picker-time",config:{enableTime:!0}},model:{value:a.datepicker.time,callback:function(e){a.$set(a.datepicker,"time",e)},expression:"datepicker.time"}}),t("label",{staticClass:"control-label",attrs:{for:"date-picker-time"}},[a._v("\n                      "+a._s(a.$t("forms.dateTimePicker.time"))+"\n                    ")]),t("i",{staticClass:"bar"})],1)]),t("div",{staticClass:"form-group"},[t("div",{staticClass:"input-group"},[t("vuestic-date-picker",{attrs:{id:"date-picker-custom-first-day",config:{locale:{firstDayOfWeek:1}}},model:{value:a.datepicker.customFirstDay,callback:function(e){a.$set(a.datepicker,"customFirstDay",e)},expression:"datepicker.customFirstDay"}}),t("label",{staticClass:"control-label",attrs:{for:"date-picker-custom-first-day"}},[a._v("\n                      "+a._s(a.$t("forms.dateTimePicker.customFirstDay"))+"\n                    ")]),t("i",{staticClass:"bar"})],1)])])]),t("div",{staticClass:"flex md4"},[t("fieldset",[t("div",{staticClass:"form-group"},[t("div",{staticClass:"input-group"},[t("vuestic-date-picker",{attrs:{id:"date-picker-disabled",config:{disable:a.datePickerDisabled}},model:{value:a.datepicker.disabled,callback:function(e){a.$set(a.datepicker,"disabled",e)},expression:"datepicker.disabled"}}),t("label",{staticClass:"control-label",attrs:{for:"date-picker-disabled"}},[a._v("\n                      "+a._s(a.$t("forms.dateTimePicker.disabled"))+"\n                    ")]),t("i",{staticClass:"bar"})],1)]),t("div",{staticClass:"form-group"},[t("div",{staticClass:"input-group"},[t("vuestic-date-picker",{attrs:{id:"date-picker-multiple",config:{mode:"multiple"}},model:{value:a.datepicker.multiple,callback:function(e){a.$set(a.datepicker,"multiple",e)},expression:"datepicker.multiple"}}),t("label",{staticClass:"control-label",attrs:{for:"date-picker-multiple"}},[a._v("\n                      "+a._s(a.$t("forms.dateTimePicker.multiple"))+"\n                    ")]),t("i",{staticClass:"bar"})],1)]),t("div",{staticClass:"form-group"},[t("div",{staticClass:"input-group"},[t("vuestic-date-picker",{attrs:{id:"date-picker-custom-date-format",config:{altInput:!0,altFormat:"F j, Y"}},model:{value:a.datepicker.customDate,callback:function(e){a.$set(a.datepicker,"customDate",e)},expression:"datepicker.customDate"}}),t("label",{staticClass:"control-label",attrs:{for:"date-picker-custom-date-format"}},[a._v("\n                      "+a._s(a.$t("forms.dateTimePicker.customDateFormat"))+"\n                    ")]),t("i",{staticClass:"bar"})],1)])])]),t("div",{staticClass:"flex md4"},[t("fieldset",[t("div",{staticClass:"form-group"},[t("div",{staticClass:"input-group"},[t("vuestic-date-picker",{attrs:{id:"date-picker-range",config:{mode:"range",inline:!0}},model:{value:a.datepicker.range,callback:function(e){a.$set(a.datepicker,"range",e)},expression:"datepicker.range"}}),t("label",{staticClass:"control-label",attrs:{for:"date-picker-range"}},[a._v("\n                      "+a._s(a.$t("forms.dateTimePicker.range"))+"\n                    ")])],1)])])])])])])],1)]),t("div",{staticClass:"va-row"},[t("div",{staticClass:"flex md12"},[t("vuestic-widget",{attrs:{headerText:a._f("translate")("forms.selects.title")}},[t("form",[t("div",{staticClass:"va-row"},[t("div",{staticClass:"flex md4"},[t("fieldset",[t("vuestic-simple-select",{attrs:{label:a._f("translate")("forms.selects.simple"),"option-key":"description",options:a.simpleOptions},model:{value:a.simpleSelectModel,callback:function(e){a.simpleSelectModel=e},expression:"simpleSelectModel"}}),t("vuestic-simple-select",{attrs:{label:a._f("translate")("forms.selects.country"),options:a.countriesList},model:{value:a.chosenCountry,callback:function(e){a.chosenCountry=e},expression:"chosenCountry"}})],1)]),t("div",{staticClass:"flex md4"},[t("fieldset",[t("vuestic-multi-select",{attrs:{label:a._f("translate")("forms.selects.multi"),"option-key":"description",options:a.simpleOptions},model:{value:a.multiSelectModel,callback:function(e){a.multiSelectModel=e},expression:"multiSelectModel"}}),t("vuestic-multi-select",{attrs:{label:a._f("translate")("forms.selects.countryMulti"),options:a.countriesList},model:{value:a.multiSelectCountriesModel,callback:function(e){a.multiSelectCountriesModel=e},expression:"multiSelectCountriesModel"}})],1)])])])])],1)]),t("div",{staticClass:"va-row"},[t("div",{staticClass:"flex md12"},[t("vuestic-widget",{attrs:{headerText:a._f("translate")("forms.controls.title")}},[t("form",[t("div",{staticClass:"va-row"},[t("div",{staticClass:"flex md3"},[t("fieldset",[t("vuestic-checkbox",{attrs:{label:a.$t("forms.controls.unselected")},model:{value:a.checkbox.unselected,callback:function(e){a.$set(a.checkbox,"unselected",e)},expression:"checkbox.unselected"}}),t("vuestic-checkbox",{attrs:{label:a.$t("forms.controls.selected")},model:{value:a.checkbox.selected,callback:function(e){a.$set(a.checkbox,"selected",e)},expression:"checkbox.selected"}}),t("vuestic-checkbox",{attrs:{label:a.$t("forms.controls.readonly"),readonly:!0},model:{value:a.checkbox.readonly,callback:function(e){a.$set(a.checkbox,"readonly",e)},expression:"checkbox.readonly"}}),t("vuestic-checkbox",{attrs:{label:a.$t("forms.controls.disabled"),disabled:!0},model:{value:a.checkbox.disabled,callback:function(e){a.$set(a.checkbox,"disabled",e)},expression:"checkbox.disabled"}}),t("vuestic-checkbox",{attrs:{label:a.$t("forms.controls.error"),error:""},model:{value:a.checkbox.error,callback:function(e){a.$set(a.checkbox,"error",e)},expression:"checkbox.error"}}),t("vuestic-checkbox",{attrs:{label:a.$t("forms.controls.errorMessage"),"error-messages":a.errorMessages,errorCount:2},model:{value:a.checkbox.errorMessages,callback:function(e){a.$set(a.checkbox,"errorMessages",e)},expression:"checkbox.errorMessages"}})],1)]),t("div",{staticClass:"flex md3"},[t("fieldset",[t("vuestic-radio-button",{attrs:{option:"option1",label:"Radio"},model:{value:a.radioSelectedOption,callback:function(e){a.radioSelectedOption=e},expression:"radioSelectedOption"}}),t("vuestic-radio-button",{attrs:{option:"option2",label:"Radio"},model:{value:a.radioSelectedOption,callback:function(e){a.radioSelectedOption=e},expression:"radioSelectedOption"}})],1),t("fieldset",[t("vuestic-radio-button",{attrs:{option:"option1",disabled:"",label:"Disabled Radio"},model:{value:a.radioSelectedDisableOption,callback:function(e){a.radioSelectedDisableOption=e},expression:"radioSelectedDisableOption"}}),t("vuestic-radio-button",{attrs:{option:"option2",disabled:"",label:"Disabled Radio"},model:{value:a.radioSelectedDisableOption,callback:function(e){a.radioSelectedDisableOption=e},expression:"radioSelectedDisableOption"}})],1)]),t("div",{staticClass:"flex md3"},[t("fieldset",[t("vuestic-switch",{model:{value:a.isMale,callback:function(e){a.isMale=e},expression:"isMale"}},[t("span",{attrs:{slot:"trueTitle"},slot:"trueTitle"},[a._v(a._s(a._f("translate")("forms.controls.male")))]),t("span",{attrs:{slot:"falseTitle"},slot:"falseTitle"},[a._v(a._s(a._f("translate")("forms.controls.female")))])])],1)])])])])],1)])])},s=[],l=t("8436"),r={name:"form-elements",computed:{datePickerDisabled:function(){return[function(a){return!(a.getDate()%5)}]},isSuccessfulEmailValid:function(){var a=!1;return this.formFields.successfulEmail&&(a=this.formFields.successfulEmail.validated&&this.formFields.successfulEmail.valid),a}},data:function(){return{isMale:!0,countriesList:l["a"],chosenCountry:"",clearableText:"",successfulEmail:"andrei@dreamsupport.io",wrongEmail:"andrei@dreamsupport",simpleOptions:[{id:1,description:"First option"},{id:2,description:"Second option"},{id:3,description:"Third option"}],simpleSelectModel:"",multiSelectModel:[],multiSelectCountriesModel:[],radioSelectedOption:"option1",radioSelectedDisableOption:"option1",checkbox:{unselected:!1,selected:!0,readonly:!0,disabled:!0,error:!1,errorMessages:!0},errorMessages:["error message 1","error message 2"],datepicker:{simple:"2018-05-09",time:"2018-05-08 14:10",range:"2018-05-08 to 2018-05-23",disabled:"2018-05-09",multiple:"2018-04-25, 2018-04-27",customFirstDay:"2018-05-09",customDate:"2018-05-09"}}},methods:{clear:function(a){this[a]=""}},created:function(){var a=this;this.$nextTick(function(){a.$validator.validateAll()})}},o=r,n=t("2877"),c=Object(n["a"])(o,i,s,!1,null,null,null);c.options.__file="FormElements.vue";e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-1226eaa7.06d1786b.js.map