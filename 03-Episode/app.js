import React from 'react';
import ReactDOM from 'react-dom/client';


//React Element => JS-Object => HTMLElement(render)
//const heading = React.createElement('h1', { id: 'header' }, 'Namaste React Header 🚀');
//console.log(heading);



//jsx => HTML-like  or XML-like syntax
// JSX => (transpiled before it reaches the JS) - parcel - babel
// JSX => babel transpiled to it React.createElement => ReactElement-JS-Object => HTMLElement(render)
const jsxHeading = <h1 id='header'>Namaste React Heading JSX 🚀🚀 </h1>;
console.log(jsxHeading);





const nums = 10000;

//JSX Element
const heading = <h2 className='heading'>Hello {nums} Namaste React using JSX</h2>;

// React Functional Component

const Paragraph = () => (
    <p className='content'>
        This is paragraph.
    </p>
)


//Component Compositions
const HeadingComponent = () => (
    <div id='container'>
        <h1 className='content heading'>Namaste React using Component 🚀🚀🚀 {nums}</h1>
        {heading}
        <Paragraph />
        {Paragraph()}
    </div>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);