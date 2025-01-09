const heading = React.createElement(
    "h1",
    {
        id: "heading",
        className: "main",
    },
    "Hello From ReactJS"
);
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);



/*
<div id="parent">
    <div id="child">
        <h1>This is a heading tag</h1>
    </div>
</div>
*/

//const parent = React.createElement(
//    'div',
//    { id: "parent" },
//    React.createElement(
//        'div',
//        { id: "child" },
//        React.createElement(
//            "h1",
//            {},
//            "This is a heading tag"
//        )));


//const root = document.getElementById('root');
//ReactDOM.createRoot(root).render(parent);




/*
<div id="parent">
    <div id="child">
        <h1>This is a heading tag</h1>
        <p>This is a paragraph tag</p>
    </div>
</div>
*/

//const parent = React.createElement(
//    'div',
//    { id: 'parent' },
//    React.createElement(
//        'div',
//        { id: 'child' },
//        [React.createElement(
//            'h1',
//            {},
//            "This is a heading tag"
//        ), React.createElement(
//            "p",
//            {},
//            "This is a paragraph"
//        )]
//    )
//)

//console.log(parent);

//ReactDOM.createRoot(document.getElementById('root')).render(parent);