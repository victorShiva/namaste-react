import { createElement } from 'react';
import ReactDOM from 'react-dom/client';

const div = createElement('div', { id: 'parent' },
    createElement('div', { id: 'child' },
        [
            createElement('h1', {}, 'This is h1 tag'),
            createElement('h2', {}, 'This is h2 tag')
        ]
    ));

console.log(div);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(div);