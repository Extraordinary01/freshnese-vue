import{_ as e}from"./BillingInput.acf1d7fc.js";import{r as s,u as a,j as l,o as t,d as i,e as n,k as r,t as o}from"./vendor.c79a5476.js";import{u}from"./useUserValidation.71254cb3.js";import"./index.4fb891a4.js";const m={components:{BillingInput:e},setup(){const e=s({email:""}),l=s({email:""}),{emailValidation:t}=u(e,l),i=a();return{user:e,errors:l,emailValidation:t,reset:async()=>{console.log(e.value),await i.dispatch("password/sendPasswordResetEmail",e.value)}}}},c={class:"user-one-column reset"},d={class:"user-one-column__item"},_=n("div",{class:"user-one-column__main"},[n("h2",{class:"title registration__title"},"Reset your password"),n("p",{class:"title registration__subtitle"}," For resetting your password you must confirm your email! ")],-1),p={class:"user-one-column__main"},g={class:"user-one-column__input"},v={class:"reset__input"},f=n("img",{width:"30",height:"30",src:"/freshnese-vue/assets/mail.56134e15.svg",alt:""},null,-1),b={class:"label reset__label error"},h={class:"user-column__btns reset__btns"};m.render=function(e,s,a,u,m,V){const w=l("billing-input");return t(),i("div",c,[n("div",d,[_,n("div",p,[n("div",g,[n("div",v,[f,r(w,{title:"Email",name:"login",typeOfInput:"email",modelValue:u.user.email,"onUpdate:modelValue":s[0]||(s[0]=e=>u.user.email=e),onChange:s[1]||(s[1]=e=>u.emailValidation(e,!0))},null,8,["modelValue"])]),n("div",b,o(u.errors.email),1)])]),n("div",h,[n("button",{class:"green-btn",onClick:s[2]||(s[2]=(...e)=>u.reset&&u.reset(...e))},"Reset")])])])};export{m as default};