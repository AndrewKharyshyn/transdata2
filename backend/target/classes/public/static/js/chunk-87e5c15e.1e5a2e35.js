(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-87e5c15e","chunk-73d08a8f"],{"7bfa":function(t,o,s){},"82c5":function(t,o,s){"use strict";s.r(o);var a=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"toast-position-picker"},[s("div",{staticClass:"position-boxes-row"},[s("div",{staticClass:"position-box",class:{selected:t.isBoxSelected("top-left")},on:{click:function(o){t.updatePosition("top-left")}}}),s("div",{staticClass:"position-box",class:{selected:t.isBoxSelected("top-center")},on:{click:function(o){t.updatePosition("top-center")}}}),s("div",{staticClass:"position-box",class:{selected:t.isBoxSelected("top-right")},on:{click:function(o){t.updatePosition("top-right")}}})]),s("div",{staticClass:"position-boxes-row"},[s("div",{staticClass:"position-box",class:{selected:t.isBoxSelected("bottom-left")},on:{click:function(o){t.updatePosition("bottom-left")}}}),s("div",{staticClass:"position-box",class:{selected:t.isBoxSelected("bottom-center")},on:{click:function(o){t.updatePosition("bottom-center")}}}),s("div",{staticClass:"position-box",class:{selected:t.isBoxSelected("bottom-right")},on:{click:function(o){t.updatePosition("bottom-right")}}})])])},e=[],i={name:"toast-position-picker",props:{value:{type:String,default:"bottom-center"}},methods:{updatePosition:function(t){this.$emit("input",t)},isBoxSelected:function(t){return this.value===t}}},n=i,l=(s("d3f5"),s("2877")),r=Object(l["a"])(n,a,e,!1,null,"b5582696",null);r.options.__file="ToastPositionPicker.vue";o["default"]=r.exports},"9f83":function(t,o,s){"use strict";var a=s("f92d"),e=s.n(a);e.a},ccb4:function(t,o,s){"use strict";s.r(o);var a=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"notifications-page"},[s("div",{staticClass:"va-row"},[s("div",{staticClass:"flex md12"},[s("vuestic-widget",{attrs:{headerText:t._f("translate")("notificationsPage.popovers.title")}},[s("div",{staticClass:"va-row"},[s("div",{staticClass:"flex md6"},[s("fieldset",[s("div",{staticClass:"form-group"},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.popoverTitle,expression:"popoverTitle"}],attrs:{id:"popover-title",required:""},domProps:{value:t.popoverTitle},on:{input:[function(o){o.target.composing||(t.popoverTitle=o.target.value)},t.checkPopoverContents]}}),s("label",{staticClass:"control-label",attrs:{for:"popover-title"}},[t._v(t._s(t._f("translate")("notificationsPage.popovers.popoverTitleLabel")))]),s("i",{staticClass:"bar"})])]),s("div",{staticClass:"form-group"},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.popoverText,expression:"popoverText"}],attrs:{id:"popover-text",required:""},domProps:{value:t.popoverText},on:{input:[function(o){o.target.composing||(t.popoverText=o.target.value)},t.checkPopoverContents]}}),s("label",{staticClass:"control-label",attrs:{for:"popover-text"}},[t._v(t._s(t._f("translate")("notificationsPage.popovers.popoverTextLabel")))]),s("i",{staticClass:"bar"})])]),s("div",{staticClass:"form-group"},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.popoverIcon,expression:"popoverIcon"}],attrs:{id:"popover-icon",required:""},domProps:{value:t.popoverIcon},on:{input:[function(o){o.target.composing||(t.popoverIcon=o.target.value)},t.checkPopoverContents]}}),s("label",{staticClass:"control-label",attrs:{for:"popover-icon"}},[t._v(t._s(t._f("translate")("notificationsPage.popovers.popoverIconLabel")))]),s("i",{staticClass:"bar"})])]),s("vuestic-popover",{attrs:{"popover-class":"vuestic-tooltip",placement:"right",disabled:t.isPopoverDisabled}},[s("button",{staticClass:"btn btn-sm btn-primary",attrs:{slot:"trigger"},slot:"trigger"},[t._v("\n                  "+t._s(t._f("translate")("notificationsPage.popovers.showPopover"))+"\n                ")]),s("i",{staticClass:"fa",class:t.popoverIcon,attrs:{slot:"icon"},slot:"icon"}),s("span",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.popoverTitle))]),s("span",{attrs:{slot:"body"},slot:"body"},[t._v(t._s(t.popoverText))])])],1)]),s("div",{staticClass:"flex md6"},[s("p",[t._v("\n              Any text can be used for\n              "),s("vuestic-tooltip",{attrs:{options:t.topTooltipOptions}},[s("a",{attrs:{href:"#"}},[t._v(t._s(t._f("translate")("notificationsPage.popovers.topTooltip")))])]),t._v("\n              showcase. Just anything you can possibly imagine to test\n              "),s("vuestic-tooltip",{attrs:{options:t.rightTooltipOptions}},[s("a",{attrs:{href:"#"}},[t._v(t._s(t._f("translate")("notificationsPage.popovers.rightTooltip")))])]),t._v("\n              .\n              But it can appear on the\n              "),s("vuestic-tooltip",{attrs:{options:t.leftTooltipOptions}},[s("a",{attrs:{href:"#"}},[t._v(t._s(t._f("translate")("notificationsPage.popovers.leftTooltip")))])]),t._v("\n              .\n              Or just\n              "),s("vuestic-tooltip",{attrs:{options:t.bottomTooltipOptions}},[s("a",{attrs:{href:"#"}},[t._v(t._s(t._f("translate")("notificationsPage.popovers.bottomTooltip")))])]),t._v("\n              the item.\n            ")],1)])])])],1)]),s("div",{staticClass:"va-row"},[s("div",{staticClass:"flex md12"},[s("vuestic-widget",{attrs:{headerText:t._f("translate")("notificationsPage.alerts.title")}},[s("vuestic-alert",{attrs:{type:"success",withCloseBtn:!0}},[s("span",{staticClass:"badge badge-pill badge-success"},[t._v(t._s(t._f("translate")("notificationsPage.alerts.success")))]),t._v("\n          "+t._s(t._f("translate")("notificationsPage.alerts.successMessage"))+"\n          "),s("i",{staticClass:"fa fa-close alert-close"})]),s("vuestic-alert",{attrs:{type:"info",withCloseBtn:!0}},[s("span",{staticClass:"badge badge-pill badge-info"},[t._v(t._s(t._f("translate")("notificationsPage.alerts.info")))]),t._v("\n          "+t._s(t._f("translate")("notificationsPage.alerts.infoMessage"))+"\n        ")]),s("vuestic-alert",{attrs:{type:"warning",withCloseBtn:!0}},[s("span",{staticClass:"badge badge-pill badge-warning"},[t._v(t._s(t._f("translate")("notificationsPage.alerts.warning")))]),t._v("\n          "+t._s(t._f("translate")("notificationsPage.alerts.warningMessage"))+"\n        ")]),s("vuestic-alert",{attrs:{type:"danger",withCloseBtn:!0}},[s("span",{staticClass:"badge badge-pill badge-danger"},[t._v(t._s(t._f("translate")("notificationsPage.alerts.danger")))]),t._v("\n          "+t._s(t._f("translate")("notificationsPage.alerts.dangerMessage"))+"\n        ")])],1)],1)]),s("div",{staticClass:"va-row"},[s("div",{staticClass:"flex xs12"},[s("vuestic-widget",{attrs:{headerText:t.$t("notificationsPage.toasts.title")}},[s("div",{staticClass:"va-row"},[s("div",{staticClass:"flex xs12 md6"},[s("fieldset",[s("div",{staticClass:"form-group"},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.toastText,expression:"toastText"}],attrs:{id:"toast-text",required:""},domProps:{value:t.toastText},on:{input:function(o){o.target.composing||(t.toastText=o.target.value)}}}),s("label",{staticClass:"control-label",attrs:{for:"toast-text"}},[t._v("\n                    "+t._s(t.$t("notificationsPage.toasts.textLabel"))+"\n                  ")]),s("i",{staticClass:"bar"})])]),s("div",{staticClass:"form-group"},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.toastDuration,expression:"toastDuration"}],attrs:{id:"toast-duration",type:"number",required:""},domProps:{value:t.toastDuration},on:{input:function(o){o.target.composing||(t.toastDuration=o.target.value)}}}),s("label",{staticClass:"control-label",attrs:{for:"toast-duration"}},[t._v("\n                    "+t._s(t.$t("notificationsPage.toasts.durationLabel"))+"\n                  ")]),s("i",{staticClass:"bar"})])]),s("div",{staticClass:"form-group"},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.toastIcon,expression:"toastIcon"}],attrs:{id:"toast-icon",required:""},domProps:{value:t.toastIcon},on:{input:function(o){o.target.composing||(t.toastIcon=o.target.value)}}}),s("label",{staticClass:"control-label",attrs:{for:"toast-icon"}},[t._v("\n                    "+t._s(t.$t("notificationsPage.toasts.iconLabel"))+"\n                  ")]),s("i",{staticClass:"bar"})])]),s("div",{staticClass:"form-group va-row",staticStyle:{"margin-bottom":"2rem"}},[s("toast-position-picker",{model:{value:t.toastPosition,callback:function(o){t.toastPosition=o},expression:"toastPosition"}}),s("vuestic-checkbox",{attrs:{label:t._f("translate")("notificationsPage.toasts.fullWidthLabel"),id:"toast-fullwidth"},model:{value:t.isToastFullWidth,callback:function(o){t.isToastFullWidth=o},expression:"isToastFullWidth"}})],1),s("button",{staticClass:"btn btn-sm btn-primary",attrs:{slot:"trigger"},on:{click:t.launchToast},slot:"trigger"},[t._v("\n                "+t._s(t.$t("notificationsPage.toasts.launchToast"))+"\n              ")])]),s("br"),s("br"),s("br")]),s("div",{staticClass:"flex xs12 md6 flex-center"},[t.isToastContentPresent?s("div",{staticClass:"toasted-container sample-toasted-container shrink"},[s("div",{staticClass:"toasted vuestic-toast none default"},[t.toastIcon?s("i",{staticClass:"fa",class:t.toastIcon}):t._e(),t._v("\n                "+t._s(t.toastText)+"\n              ")])]):t._e()])])])],1)])])},e=[],i=s("82c5"),n={name:"notifications",components:{ToastPositionPicker:i["default"]},data:function(){return{popoverTitle:"Hey!",popoverText:"This popover is amazing",popoverIcon:"fa-image",isPopoverDisabled:!1,topTooltipOptions:{content:"Top tooltip text",placement:"top"},leftTooltipOptions:{content:"Left tooltip text",placement:"left"},rightTooltipOptions:{content:"Right tooltip text",placement:"right"},bottomTooltipOptions:{content:"Bottom tooltip text",placement:"bottom"},toastText:"This toast is awesome!",toastDuration:2500,toastIcon:"fa-star-o",toastPosition:"bottom-right",isToastFullWidth:!1}},computed:{isToastContentPresent:function(){return!(!this.toastText&&!this.toastIcon)}},methods:{checkPopoverContents:function(){this.isPopoverDisabled=!(this.popoverTitle||this.popoverText||this.popoverIcon)},launchToast:function(){this.showToast(this.toastText,{icon:this.toastIcon,position:this.toastPosition,duration:this.toastDuration,fullWidth:this.isToastFullWidth})}}},l=n,r=(s("9f83"),s("2877")),c=Object(r["a"])(l,a,e,!1,null,"d53ddf62",null);c.options.__file="Notifications.vue";o["default"]=c.exports},d3f5:function(t,o,s){"use strict";var a=s("7bfa"),e=s.n(a);e.a},f92d:function(t,o,s){}}]);
//# sourceMappingURL=chunk-87e5c15e.1e5a2e35.js.map