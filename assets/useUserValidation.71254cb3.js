import{e as s}from"./index.4fb891a4.js";import{r as a,W as e}from"./vendor.c79a5476.js";function t(t,r){const i=a({password1:!1,password2:!1,old_password:!1}),o=a({password1:"password",password2:"password",old_password:"password"});e((()=>{!0===i.value.password1?o.value.password1="text":o.value.password1="password",!0===i.value.password2?o.value.password2="text":o.value.password2="password",!0===i.value.old_password?o.value.old_password="text":o.value.old_password="password"}));const l=s=>{s.path[1].classList.contains("active-input")&&s.path[1].classList.remove("active-input")},n=(s,a,e)=>{r.value[a]=e,s.path[1].classList.contains("error-input")||s.path[1].classList.add("error-input")},p=(s,a)=>{s.path[1].classList.contains("error-input")&&(r.value[a]="",s.path[1].classList.remove("error-input")),s.path[1].classList.add("active-input")};return{user:t,usernameValidation:a=>{l(a),t.value.username.length<5?n(a,"username","Username must include at least 5 charecters!"):s.post("user/check/",{username:t.value.username}).then((()=>{p(a,"username")})).catch((()=>{n(a,"username","User with this username exists. Please change your username")}))},errors:r,emailValidation:(a,e=!1)=>{l(a),!t.value.email.includes("@")||!t.value.email.includes(".")||t.value.email.includes("@.")||t.value.email.startsWith("@")||t.value.email.endsWith(".")?n(a,"email","You typed wrong email"):s.post("user/check/",{email:t.value.email}).then((()=>{e?n(a,"email","User with this email doesn't exist!"):p(a,"email")})).catch((()=>{e?p(a,"email"):n(a,"email","User with this email exists. Please change your username")}))},passwordValidation:s=>{l(s),p(s,"password1"),t.value.password1.length<8?n(s,"password1","Password must include at least 8 charecters!"):null===t.value.password1.match(/\d/)||null===t.value.password1.match(/\w/)?n(s,"password1","Password must include numbers and letters"):""!==t.value.password2&&t.value.password1!==t.value.password2?n(s,"password1","Password's must match"):p(s,"password1")},confirmValidation:s=>{l(s),p(s,"password2"),t.value.password2!==t.value.password1?n(s,"password2","Password's must match"):p(s,"password2")},nameValidation:(s,a)=>{l(s),null===t.value[a].match(/[A-Za-z]+$/)?n(s,a,"Please type only charecters!"):p(s,a)},phoneValidation:s=>{l(s),t.value.phone.match(/\+\d+$/)?p(s,"phone"):n(s,"phone","Please type correct phone number")},imageValidation:s=>{s.path[3].classList.contains("active-input")&&s.path[3].classList.remove("active-input");let a=!1;["jpg","png","jpeg"].forEach((e=>{if(!a)return s.target.files[0].name.endsWith(e)?(s.path[3].classList.contains("error-input")&&(r.value.img="",s.path[3].classList.remove("error-input")),s.path[3].classList.add("active-input"),void(a=!0)):void 0})),a||(r.value.img="These file is not image!",s.path[3].classList.contains("error-input")||s.path[3].classList.add("error-input"))},show:i,passType:o}}export{t as u};