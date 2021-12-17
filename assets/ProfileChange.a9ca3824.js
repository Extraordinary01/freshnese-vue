var e=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,s=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{_ as i}from"./BillingInput.acf1d7fc.js";import{_ as n}from"./InputFile.ce9fdb4f.js";import{u as r,b as u,c as m,j as o,o as p,d,e as c,t as _,k as f,U as g}from"./vendor.c79a5476.js";import"./index.8288acf9.js";const h={components:{BillingInput:i,InputFile:n},setup(){const e=r();u();const i=m((()=>e.state.auth.user));return{user:((e,i)=>{for(var n in i||(i={}))l.call(i,n)&&s(e,n,i[n]);if(a)for(var n of a(i))t.call(i,n)&&s(e,n,i[n]);return e})({},i.value),data:i,changeDetails:a=>{const l={};Object.entries(a).forEach((([e,a])=>{a!==i.value[e]&&("img"===e&&a||"img"!==e)&&(l[e]=a)})),e.dispatch("auth/updateDetails",l)}}}},v={class:"profile-change"},b={class:"profile-change__item"},V={class:"profile-change__img"},U=["src"],j={class:"profile-change__name"},y={class:"title"},O={method:"patch",id:"updateUser",enctype:"multipart/form-data"},I={class:"profile-change__main user-input"},P={class:"profile-change__input user-input__item"},w={class:"profile- user-input__item"},x={class:"profile- user-input__item"},D={class:"profile-change__input user-input__item"},E={class:"profile-change__input user-input__item"},F={class:"profile-change__input user-input__item"},k={class:"profile-change__input user-input__item"},B=c("label",{for:"image",class:"text-label label"},"Profile Image",-1),C=c("div",{class:"profile-change__input user-input__item"},null,-1),A={class:"profile-change__btns"};h.render=function(e,a,l,t,s,i){const n=o("billing-input"),r=o("input-file");return p(),d("div",v,[c("div",b,[c("div",V,[c("img",{src:t.user.img,alt:"User's image"},null,8,U)]),c("div",j,[c("p",y,_(t.data.first_name)+" "+_(t.data.last_name),1)]),c("form",O,[c("div",I,[c("div",P,[f(n,{title:"Username",name:"username",modelValue:t.user.username,"onUpdate:modelValue":a[0]||(a[0]=e=>t.user.username=e)},null,8,["modelValue"])]),c("div",w,[f(n,{title:"Email",name:"email",modelValue:t.user.email,"onUpdate:modelValue":a[1]||(a[1]=e=>t.user.email=e),typeOfInput:"email"},null,8,["modelValue"])]),c("div",x,[f(n,{title:"First name",name:"first_name",modelValue:t.user.first_name,"onUpdate:modelValue":a[2]||(a[2]=e=>t.user.first_name=e)},null,8,["modelValue"])]),c("div",D,[f(n,{title:"Last name",name:"last_name",modelValue:t.user.last_name,"onUpdate:modelValue":a[3]||(a[3]=e=>t.user.last_name=e)},null,8,["modelValue"])]),c("div",E,[f(n,{title:"Phone number",name:"phone",modelValue:t.user.phone,"onUpdate:modelValue":a[4]||(a[4]=e=>t.user.phone=e)},null,8,["modelValue"])]),c("div",F,[f(n,{title:"Address",name:"address",modelValue:t.user.address,"onUpdate:modelValue":a[5]||(a[5]=e=>t.user.address=e)},null,8,["modelValue"])]),c("div",k,[B,f(r,{class:"profile-change__input_i user-input__item_i",modelValue:t.user.img,"onUpdate:modelValue":a[6]||(a[6]=e=>t.user.img=e),name:"image"},null,8,["modelValue"])]),C]),c("div",A,[c("button",{class:"green-btn",type:"submit",onClick:a[7]||(a[7]=g((e=>t.changeDetails(t.user)),["prevent"]))}," Change ")])])])])};export{h as default};
