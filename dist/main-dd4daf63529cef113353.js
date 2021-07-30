!function(){"use strict";const e=()=>{document.querySelector(".loading-container").classList.toggle("hide-loading-screen")},t=JSON.parse(localStorage.getItem("categoriesArray"))||[{category:"default"},{category:null},{category:null},{category:null}],o=(e,o)=>{const n=[...t];n[e]=o,localStorage.setItem("categoriesArray",JSON.stringify(n))},n=JSON.parse(localStorage.getItem("todosArray"))||[{todoTitle:"Default Todo",todoDescription:"This is a default todo.",todoCategory:"default",todoDone:!1}],a=()=>JSON.parse(localStorage.getItem("todosArray"));const c=document.querySelector(".todos-container");var d=new Isotope(c,{itemSelector:".todo",percentPosition:!0,layoutMode:"masonry",masonry:{columnWidth:".todo",horizontalOrder:!1,gutter:10}});const r=(e,t,o)=>{const n=document.createElement("div");n.classList.add("category");const a=document.createElement("button");o?a.classList.add("category-btn","category-btn-sort","active-category"):a.classList.add("category-btn","category-btn-sort"),n.appendChild(a);const c=document.createElement("span");c.classList.add("dot",`dot${e}`),a.appendChild(c);const d=document.createElement("span");return d.classList.add("category-title"),d.textContent=`${t}`,a.appendChild(d),n};var s=()=>{(()=>{const e=document.querySelector(".categories-container");t.filter((e=>null===e.category)).length>2?t.forEach(((t,o)=>{t.category&&e.appendChild(r(o+1,t.category,!0))})):(e.appendChild(r("-all","all",!0)),t.forEach(((t,o)=>{t.category&&e.appendChild(r(o+1,t.category,!1))})))})(),(()=>{const e=document.querySelector(".categories-container");new Flickity(e,{contain:!1,freeScroll:!0,watchCSS:!0,cellAlign:"center",prevNextButtons:!0,pageDots:!1})})(),(()=>{const e=document.querySelectorAll(".category-btn-sort");e.forEach((t=>{t.addEventListener("click",(t=>{t.currentTarget.classList.contains("active-category")||(e.forEach((e=>{e.classList.remove("active-category")})),t.currentTarget.classList.add("active-category"),"all"===t.currentTarget.childNodes[1].textContent?d.arrange({filter:"*"}):d.arrange({filter:`.${t.currentTarget.childNodes[1].textContent}`}))}))}))})(),(()=>{const e=document.querySelector(".add-todo-categories");t.forEach(((t,o)=>{t.category&&e.appendChild(((e,t)=>{const o=document.createElement("div");o.classList.add("category-option");const n=document.createElement("button");n.classList.add("category-btn","category-btn-add"),o.appendChild(n);const a=document.createElement("span");a.classList.add("dot",`dot${e}`),n.appendChild(a);const c=document.createElement("span");return c.classList.add("category-title"),c.textContent=`${t}`,n.appendChild(c),o})(o+1,t.category))}))})(),(()=>{const e=document.querySelectorAll(".category-btn-add");e.forEach((t=>{t.addEventListener("click",(t=>{t.currentTarget.classList.contains("active-category")||(e.forEach((e=>{e.classList.remove("active-category")})),t.currentTarget.classList.add("active-category"))}))}))})(),(()=>{const e=document.querySelector(".edit-categories-btns-container");t.forEach(((t,o)=>{t.category&&e.appendChild(((e,t)=>{const o=document.createElement("div");o.classList.add("edit-category");const n=document.createElement("div");n.classList.add("edit-category-container"),o.appendChild(n);const a=document.createElement("span");a.classList.add("dot",`dot${e}`),n.appendChild(a);const c=document.createElement("span");c.classList.add("category-title"),c.textContent=`${t}`,n.appendChild(c);const d=document.createElement("button");d.classList.add("delete-category-btn"),o.appendChild(d);const r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.classList.add("delete-category-svg"),r.setAttribute("viewBox","0 0 24 24"),d.appendChild(r);const s=document.createElementNS("http://www.w3.org/2000/svg","path");return s.setAttribute("d","M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"),r.appendChild(s),o})(o+1,t.category))}))})()};const l=()=>{let e=document.querySelectorAll(".todo-menu-btn");e.forEach((e=>{e.replaceWith(e.cloneNode(!0))})),e=document.querySelectorAll(".todo-menu-btn"),e.forEach((t=>{t.addEventListener("click",(t=>{const o=t.currentTarget.parentElement.parentElement.parentElement.childNodes[1];o.classList.contains("show-todo-options")?o.classList.remove("show-todo-options"):(e.forEach((e=>{e.parentElement.parentElement.parentElement.childNodes[1].classList.remove("show-todo-options")})),o.classList.toggle("show-todo-options"))}))}))},i=()=>{document.querySelector(".delete-todo-popup-container").classList.toggle("show-delete-todo-popup")},u=()=>{let e=document.querySelectorAll(".todo-delete-btn, .cancel-delete-todo-button");e.forEach((e=>{e.replaceWith(e.cloneNode(!0))})),e=document.querySelectorAll(".todo-delete-btn, .cancel-delete-todo-button"),e.forEach((e=>{e.addEventListener("click",(()=>{i()}))}))},g=()=>{document.querySelector(".delete-all-todo-popup-container").classList.toggle("show-delete-all-todo-popup")},m=document.querySelector("#add-category-title"),h=document.querySelector(".flash-error-popup-container"),p=e=>{document.querySelector(".flash-error-message").textContent=e,h.classList.toggle("flash-error-todo-popup")},y=()=>{const e=document.querySelector(".edit-existing-todo-container");e.classList.contains("show-edit-existing-todo")&&(()=>{const e=document.querySelectorAll("#edit-todo-title, #edit-todo-description");setTimeout((()=>{e.forEach((e=>{e.value=""}))}),250)})();const t=document.querySelectorAll(".todo");let o=null;if(t.forEach((e=>{e.childNodes[1].classList.contains("show-todo-options")&&(o=e)})),!e.classList.contains("show-edit-existing-todo")){const e=document.querySelector("#edit-todo-title"),t=document.querySelector("#edit-todo-description");e.value=o.childNodes[0].childNodes[0].childNodes[0].textContent,t.value=o.childNodes[0].childNodes[1].childNodes[0].textContent}e.classList.toggle("show-edit-existing-todo")},C=()=>{const e=document.querySelector(".add-new-todo-container");e.classList.contains("show-add-new-todo")&&(()=>{const e=document.querySelectorAll("#add-todo-title, #add-todo-description"),t=document.querySelectorAll(".category-btn-add");setTimeout((()=>{t.forEach((e=>{e.classList.remove("active-category")})),e.forEach((e=>{e.value=""}))}),250)})(),e.classList.toggle("show-add-new-todo")},L=()=>{let e=document.querySelectorAll(".todo-edit-btn, .cancel-edit-existing-todo-button");e.forEach((e=>{e.replaceWith(e.cloneNode(!0))})),e=document.querySelectorAll(".todo-edit-btn, .cancel-edit-existing-todo-button"),e.forEach((e=>{e.addEventListener("click",(()=>{y()}))}))},S=()=>{document.querySelectorAll(".add-todo-btn, .cancel-add-new-todo-button").forEach((e=>{e.addEventListener("click",(()=>{t.every((e=>null===e.category))?p("You Must Create A Category Before You Can Add A Todo"):C()}))})),document.querySelectorAll(".add-category-button, .cancel-add-category-button").forEach((e=>{e.addEventListener("click",(()=>{(()=>{const e=document.querySelector(".add-category-popup-container");e.classList.contains("show-add-category-popup")&&setTimeout((()=>{m.value=""}),250),e.classList.toggle("show-add-category-popup")})()}))}))};const E=e=>e.trim().toLowerCase().split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" "),v=e=>e.trim().toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g,(e=>e.toUpperCase())),T=t.findIndex((e=>null===e.category));let f;var N=()=>{(()=>{const n=document.querySelector(".add-add-category-button"),a=document.querySelector("#add-category-title");n.addEventListener("click",(()=>{const n=a.value.trim().toLowerCase();-1===T?p("You Cannot Have More Than 4 Categories"):t.some((e=>e.category===n))?p("Category Cannot Have Same Name As Existing Category"):n.includes(" ")?p("Category Name Cannot Contain Spaces Between Letters"):n.length<3?p("Category Name Cannot Be Less Than 3 Letters Long"):n.length>15?p("Category Name Cannot Be Greater Than 15 Letters Long"):/[^a-z]/i.test(n)?p("Category Name Can Only Contain Letters"):(t=>{if(-1!==T){const n=(e=>({category:e}))(t);o(T,n),e(),setTimeout((()=>{m.value="",window.location.reload()}),550)}})(n)}))})(),document.querySelectorAll(".delete-category-btn").forEach((e=>{e.addEventListener("click",(e=>{f=e.currentTarget.parentElement.childNodes[0].childNodes[1].textContent}))})),document.querySelector(".delete-category-button").addEventListener("click",(()=>{(()=>{const n=t.findIndex((e=>e.category===f));-1!==n&&(o(n,{category:null}),(e=>{const t=[...JSON.parse(localStorage.getItem("todosArray"))].filter((t=>t.todoCategory!==e));localStorage.setItem("todosArray",JSON.stringify(t))})(f),e(),setTimeout((()=>{window.location.reload()}),550))})()}))};const b=(e,t,o,n,a)=>{const c=document.createElement("div");c.classList.add("todo",`${e}`);const d=document.createElement("div");return d.classList.add("todo-content"),c.appendChild(d),d.appendChild(((e,t)=>{const o=document.createElement("div");o.classList.add("todo-heading"),t&&o.classList.add("done");const n=document.createElement("h3");n.classList.add("todo-title"),n.textContent=`${e}`,o.appendChild(n);const a=document.createElement("button");a.classList.add("todo-menu-btn"),o.appendChild(a);const c=document.createElementNS("http://www.w3.org/2000/svg","svg");c.classList.add("todo-meatball"),a.appendChild(c);const d=document.createElementNS("http://www.w3.org/2000/svg","path");return d.setAttribute("d","M6 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"),c.appendChild(d),o})(o,a)),d.appendChild(((e,t)=>{const o=document.createElement("div");o.classList.add("todo-description"),t&&o.classList.add("done");const n=document.createElement("p");return n.classList.add("todo-paragraph"),n.textContent=`${e}`,o.appendChild(n),o})(n,a)),d.appendChild(((e,t)=>{const o=document.createElement("div");o.classList.add("todo-footer");const n=document.createElement("span");n.classList.add("dot",`dot${e}`),o.appendChild(n);const a=document.createElement("label");a.classList.add("control","control-checkbox"),a.textContent="done",o.appendChild(a);const c=document.createElement("input");c.type="checkbox",c.classList.add("done-checkbox"),t&&(c.checked=!0),a.appendChild(c);const d=document.createElement("span");return d.classList.add("control_indicator"),a.appendChild(d),o})(t,a)),c.appendChild((()=>{const e=document.createElement("div");e.classList.add("todo-options");const t=document.createElement("button");t.classList.add("todo-options-btn","todo-edit-btn"),t.textContent="Edit...",e.appendChild(t);const o=document.createElement("button");return o.classList.add("todo-options-btn","todo-delete-btn"),o.textContent="Delete",e.appendChild(o),e})()),c},A=()=>{const e=document.querySelectorAll(".todo");let t=null;return e.forEach((e=>{e.childNodes[1].classList.contains("show-todo-options")&&(t=e)})),t},w=(e,t,o,n)=>{((e,t,o)=>{const n=[...JSON.parse(localStorage.getItem("todosArray"))],a=n.findIndex((t=>t.todoTitle===e)),c=n.find((t=>t.todoTitle===e));c.todoTitle=t,c.todoDescription=o,n[a]=c,localStorage.setItem("todosArray",JSON.stringify(n))})(e.textContent,o,n),e.textContent=o,t.textContent=n,y()},q=()=>{let e=document.querySelectorAll(".done-checkbox");e.forEach((e=>{e.replaceWith(e.cloneNode(!0))})),e=document.querySelectorAll(".done-checkbox"),e.forEach((e=>{e.addEventListener("change",(e=>{(e=>{const t=e.currentTarget.parentElement.parentElement.parentElement.childNodes[0],o=e.currentTarget.parentElement.parentElement.parentElement.childNodes[1];t.classList.toggle("done"),o.classList.toggle("done"),(e=>{const t=[...JSON.parse(localStorage.getItem("todosArray"))],o=t.findIndex((t=>t.todoTitle===e)),n=t.find((t=>t.todoTitle===e));n.todoDone=!n.todoDone,t[o]=n,localStorage.setItem("todosArray",JSON.stringify(t))})(e.currentTarget.parentElement.parentElement.parentElement.childNodes[0].childNodes[0].textContent)})(e)}))}))},x=()=>{document.querySelector(".add-add-new-todo-button").addEventListener("click",(()=>{const e=E(document.querySelector("#add-todo-title").value),o=v(document.querySelector("#add-todo-description").value),n=document.querySelectorAll(".category-btn-add");let c=null;n.forEach((e=>{e.classList.contains("active-category")&&(c=e)}));const r=a();30===r.length?p("You Cannot Have More Than 30 Todos"):r.some((t=>t.todoTitle===e))?p("Todo Cannot Have Same Title As Existing Todo"):e.length<10?p("Todo Name Cannot Be Less Than 10 Characters Long"):e.length>40?p("Todo Name Cannot Be Greater Than 40 Characters Long"):/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(e)?p("Todo Name Cannot Contain Any Special Characters"):o.length<20?p("Todo Description Cannot Be Less Than 20 Characters Long"):o.length>300?p("Todo Description Cannot Be Greater Than 300 Characters Long"):null===c?p("Todo Category Cannot Be Unselected"):((e,o,n,a)=>{(e=>{const t=[...JSON.parse(localStorage.getItem("todosArray"))];t[t.length]=e,localStorage.setItem("todosArray",JSON.stringify(t))})({todoTitle:e,todoDescription:o,todoCategory:n,todoDone:a});const c=t.findIndex((e=>e.category===n))+1;var r,s,i,g;r=n,s=c,i=e,g=o,d.insert(b(r,s,i,g,!1)),l(),L(),u(),q(),C()})(e,o,c.childNodes[1].textContent,!1)})),document.querySelector(".add-edit-existing-todo-button").addEventListener("click",(()=>{const e=A(),t=e.childNodes[0].childNodes[0].childNodes[0],o=e.childNodes[0].childNodes[1].childNodes[0],n=E(document.querySelector("#edit-todo-title").value),c=v(document.querySelector("#edit-todo-description").value),d=a();n!==t.textContent&&c===o.textContent?d.some((e=>e.todoTitle===n))?p("Todo Cannot Have Same Title As Existing Todo"):n.length<10?p("Todo Name Cannot Be Less Than 10 Characters Long"):n.length>40?p("Todo Name Cannot Be Greater Than 40 Characters Long"):/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(n)?p("Todo Name Cannot Contain Any Special Characters"):w(t,o,n,c):n===t.textContent&&c!==o.textContent?c.length<20?p("Todo Description Cannot Be Less Than 20 Characters Long"):c.length>300?p("Todo Description Cannot Be Greater Than 300 Characters Long"):w(t,o,n,c):n!==t.textContent&&c!==o.textContent?d.some((e=>e.todoTitle===n))?p("Todo Cannot Have Same Title As Existing Todo"):n.length<10?p("Todo Name Cannot Be Less Than 10 Characters Long"):n.length>40?p("Todo Name Cannot Be Greater Than 40 Characters Long"):/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(n)?p("Todo Name Cannot Contain Any Special Characters"):c.length<20?p("Todo Description Cannot Be Less Than 20 Characters Long"):c.length>300?p("Todo Description Cannot Be Greater Than 300 Characters Long"):w(t,o,n,c):w(t,o,n,c)})),document.querySelector(".delete-todo-button").addEventListener("click",(()=>{(()=>{const e=A(),t=e.childNodes[0].childNodes[0].childNodes[0].textContent;d.remove(e),d.layout(),(e=>{const t=[...JSON.parse(localStorage.getItem("todosArray"))].filter((t=>t.todoTitle!==e));localStorage.setItem("todosArray",JSON.stringify(t))})(t),i()})()})),document.querySelector(".delete-all-todo-button").addEventListener("click",(()=>{(()=>{const e=[...JSON.parse(localStorage.getItem("todosArray"))].filter((e=>!1===e.todoDone));localStorage.setItem("todosArray",JSON.stringify(e))})(),document.querySelectorAll(".todo").forEach((e=>{e.childNodes[0].childNodes[0].classList.contains("done")&&d.remove(e)})),d.layout(),g()}))};(()=>{const e=document.querySelector(".start-screen-container"),t=document.querySelector(".start-screen-btn");0!==localStorage.length&&(e.style.display="none"),t.addEventListener("click",(()=>{e.classList.add("hide-start-screen")}))})(),(()=>{if(null===localStorage.getItem("categoriesArray")){const e=[{category:"default"},{category:null},{category:null},{category:null}];localStorage.setItem("categoriesArray",JSON.stringify(e))}if(null===localStorage.getItem("todosArray")){const e=[{todoTitle:"Default Todo",todoDescription:"This is a default todo.",todoCategory:"default",todoDone:!1}];localStorage.setItem("todosArray",JSON.stringify(e))}})(),s(),document.querySelectorAll(".delete-all-done-todos-btn, .cancel-delete-all-todo-button").forEach((e=>{e.addEventListener("click",(()=>{g()}))})),(()=>{const e=document.querySelectorAll(".edit-categories-btn, .cancel-edit-categories-button"),t=document.querySelector(".edit-categories-container");e.forEach((e=>{e.addEventListener("click",(()=>{t.classList.toggle("show-edit-categories")}))}))})(),(()=>{const e=document.querySelectorAll(".delete-category-btn, .cancel-delete-category-button"),t=document.querySelector(".delete-category-popup-container");e.forEach((e=>{e.addEventListener("click",(()=>{t.classList.toggle("show-delete-category-popup")}))}))})(),S(),document.querySelector(".flash-error-button").addEventListener("click",(()=>{h.classList.toggle("flash-error-todo-popup")})),document.querySelector(".show-categories-btn").addEventListener("click",(()=>{window.scroll({top:0,behavior:"smooth"})})),N(),x(),n.forEach((e=>{const o=t.findIndex((t=>t.category===e.todoCategory))+1;d.insert(b(e.todoCategory,o,e.todoTitle,e.todoDescription,e.todoDone))})),l(),L(),u(),q(),window.addEventListener("load",(()=>{d.layout(),setTimeout((()=>{e()}),1800)}))}();