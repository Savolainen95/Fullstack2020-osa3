(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),o=t.n(u),c=t(2),l=t(3),m=t.n(l),i="/api/persons",d=function(){return m.a.get(i).then((function(e){return e.data}))},s=function(e){return m.a.post(i,e).then((function(e){return e.data}))},f=function(e){return m.a.delete("".concat(i,"/").concat(e)),null},h=function(e,n){return m.a.put("".concat(i,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){var n=e.message;return null===n?r.a.createElement("h1",null,"Phonebook"):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement("p",{className:n[1]},n[0]))},b=function(e){return r.a.createElement("p",null,e.person.name," ",e.person.number,r.a.createElement(E,{person:e.person,onClick:e.removeName}))},E=function(e){var n=e.person,t=e.onClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return t(n)}},"Poista"))},v=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h2",null,"add a new number")),r.a.createElement("form",null,r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",onClick:e.addName},"Add"))))},g=function(e){return r.a.createElement(r.a.Fragment,null,"filter shown with ",r.a.createElement("input",{value:e.finder,onChange:e.handleChange}))},N=function(e){var n=e.persons,t=e.finder,a=e.removeName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Numbers"),r.a.createElement("div",null,n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e,n){return r.a.createElement(b,{key:n,person:e,removeName:a})}))))},w=function(e){var n=e.errorMessage,t=e.finder,a=e.handleChange,u=e.newName,o=e.handleNameChange,c=e.newNumber,l=e.handleNumberChange,m=e.addName,i=e.persons,d=e.finder2,s=e.removeName;return r.a.createElement("div",null,r.a.createElement(p,{message:n}),r.a.createElement(g,{finder:t,handleChange:a}),r.a.createElement(v,{newName:u,handleNameChange:o,newNumber:c,handleNumberChange:l,addName:m}),r.a.createElement(N,{persons:i,finder:d,removeName:s}))},C=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],u=n[1],o=Object(a.useState)(""),l=Object(c.a)(o,2),m=l[0],i=l[1],p=Object(a.useState)(""),b=Object(c.a)(p,2),E=b[0],v=b[1],g=Object(a.useState)(""),N=Object(c.a)(g,2),C=N[0],j=N[1],O=Object(a.useState)([]),k=Object(c.a)(O,2),y=k[0],F=k[1];Object(a.useEffect)((function(){d().then((function(e){u(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement(w,{errorMessage:y,finder:C,handleChange:function(e){j(e.target.value)},newName:m,handleNameChange:function(e){i(e.target.value)},newNumber:E,handleNumberChange:function(e){v(e.target.value)},addName:function(e){e.preventDefault();var n={name:m,number:E};if(t.map((function(e){return e.name})).includes(m)){if(window.confirm("".concat(m," is alredy added to phonebook, replace older number with new one?"))){var a={name:m,number:E},r=t.find((function(e){return e.name===m}));h(r.id,a).then((function(e){u(t.map((function(n){return r.id!==n.id?n:e})))})).catch((function(e){F(["Person '".concat(m,"' was allredy removed from the server"),"error"]),setTimeout((function(){F(null)}),5e3)})),null===y&&(F(["Number of ".concat(r.name," have been updated to ").concat(E),"succes"]),setTimeout((function(){F(null)}),5e3))}i(""),v("")}else""!==m?(s(n).then((function(e){console.log(e),u(t.concat(e)),i(""),v(""),F(["Added ".concat(m,". num ").concat(E),"succes"])})).catch((function(e){F(["".concat(e.response.data.error),"error"])})),setTimeout((function(){F(null)}),5e3)):(window.alert("Default input is not allowed."),i(""),v(""))},persons:t,finder2:C,removeName:function(e){if(window.confirm("Do you want to remove ".concat(e.name))){f(e.id);var n=t;F(["".concat(e.name," is deleted from the list."),"succes"]),setTimeout((function(){F(null)}),5e3),u(n.filter((function(n){return n.id!==e.id})))}}}))};t(36);o.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.42c2a0ae.chunk.js.map