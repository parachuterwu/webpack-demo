// 静态加载
// import _ from "lodash";

// function component() {
//   const element = document.createElement("div");

//   element.innerHTML = _.join(["Hello", "webpack"], " ");

//   return element;
// }

// document.body.appendChild(component());

// 动态懒加载
// async function getComponent() {
//     const element = document.createElement("div");
//     const {default: apple} = await import('lodash');

//     element.innerHTML = apple.join(["Hello", "webpack"], " ");

//     return element;
// }

// getComponent().then(component => {
//     document.body.appendChild(component);
// })


const second = "second";
import(
    /* webpackChunkName: "[request]" */
    `./first/second/${second}.js`
);

const third = "third";
import(
    /* webpackChunkName: "[request]" */
    `./${third}/${third}.js`
);

/* webpackChunkName: "[request]" */ // [request] refer to the variable parts in the import url
