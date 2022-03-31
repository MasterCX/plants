import _ from 'lodash'
import './css.css'
import icon from './1.png'

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('input');

    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    const img = new Image();
    img.src = icon;
    element.appendChild(img);
    element.appendChild(btn);

    btn.value = "click me!"
    btn.type = "button"
    btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
        const print = module.default;

        print('this is the lazy input')
    });

    return element;
}

document.body.appendChild(component());

