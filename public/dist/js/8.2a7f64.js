(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{80:function(r,t,s){"use strict";s.r(t);var o=s(0),e=s.n(o),a=s(6),n=s.n(a);function i(r,t,s,o,e,a,n){try{var i=r[a](n),l=i.value}catch(r){return void s(r)}i.done?t(l):Promise.resolve(l).then(o,e)}var l={middleware:"guest",layout:"guest",metaInfo:function(){return{title:this.$t("register")}},data:function(){return{form:new n.a({name:"",email:"",password:"",password_confirmation:""})}},methods:{register:function(){var r,t=this;return(r=e.a.mark((function r(){var s,o,a,n;return e.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.form.post("/api/register");case 2:return s=r.sent,o=s.data,r.next=6,t.form.post("/api/login");case 6:return a=r.sent,n=a.data.token,t.$store.dispatch("auth/saveToken",{token:n}),r.next=11,t.$store.dispatch("auth/updateUser",{user:o});case 11:t.$router.push({name:"dashboard"});case 12:case"end":return r.stop()}}),r)})),function(){var t=this,s=arguments;return new Promise((function(o,e){var a=r.apply(t,s);function n(r){i(a,o,e,n,l,"next",r)}function l(r){i(a,o,e,n,l,"throw",r)}n(void 0)}))})()}}},c=s(1),m=Object(c.a)(l,(function(){var r=this,t=r.$createElement,s=r._self._c||t;return s("div",{staticClass:"q-pa-md q-mt-lg"},[s("div",{staticClass:"row justify-center"},[s("div",{staticClass:"col-12",staticStyle:{"max-width":"500px"}},[s("q-card",[s("q-card-section",[s("div",{staticClass:"text-h6"},[r._v("\n                        "+r._s(r.$t("register"))+"\n                    ")])]),r._v(" "),s("q-separator"),r._v(" "),s("form",{on:{submit:function(t){return t.preventDefault(),r.register(t)},keydown:function(t){return r.form.onKeydown(t)}}},[s("div",{staticClass:"q-pa-lg"},[s("div",{staticClass:"col-12 q-pb-lg q-mb-sm"},[s("div",{staticClass:"q-pl-xs q-pr-xs"},[s("q-input",{attrs:{type:"text","bottom-slots":"",label:r.$t("name"),error:r.form.errors.has("name")},scopedSlots:r._u([{key:"error",fn:function(){return[s("has-error",{attrs:{form:r.form,field:"name"}})]},proxy:!0}]),model:{value:r.form.name,callback:function(t){r.$set(r.form,"name",t)},expression:"form.name"}})],1),r._v(" "),s("div",{staticClass:"q-pl-xs q-pr-xs"},[s("q-input",{attrs:{type:"email","bottom-slots":"",label:r.$t("email"),error:r.form.errors.has("email")},scopedSlots:r._u([{key:"error",fn:function(){return[s("has-error",{attrs:{form:r.form,field:"email"}})]},proxy:!0}]),model:{value:r.form.email,callback:function(t){r.$set(r.form,"email",t)},expression:"form.email"}})],1),r._v(" "),s("div",{staticClass:"q-pl-xs q-pr-xs"},[s("q-input",{attrs:{type:"password","bottom-slots":"",label:r.$t("password"),error:r.form.errors.has("password")},scopedSlots:r._u([{key:"error",fn:function(){return[s("has-error",{attrs:{form:r.form,field:"password"}})]},proxy:!0}]),model:{value:r.form.password,callback:function(t){r.$set(r.form,"password",t)},expression:"form.password"}})],1),r._v(" "),s("div",{staticClass:"q-pl-xs q-pr-xs"},[s("q-input",{attrs:{type:"password","bottom-slots":"",label:r.$t("confirm_password"),error:r.form.errors.has("password_confirmation")},scopedSlots:r._u([{key:"error",fn:function(){return[s("has-error",{attrs:{form:r.form,field:"password_confirmation"}})]},proxy:!0}]),model:{value:r.form.password_confirmation,callback:function(t){r.$set(r.form,"password_confirmation",t)},expression:"form.password_confirmation"}})],1)]),r._v(" "),s("div",{staticClass:"col-12"},[s("q-btn",{attrs:{type:"submit",color:"primary",label:r.$t("register"),loading:r.form.busy}})],1)])])],1)],1)])])}),[],!1,null,null,null);t.default=m.exports}}]);