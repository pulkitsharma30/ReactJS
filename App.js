import React from "react";
import ReactDOM from "react-dom/client";

//JSX  - HTML-like or XML-like syntax
// JSX (transpiled before it reaches the js) - PARCEL - Babel
// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

//React Element
const heading = ( <h1 className="head" tabIndex="5">Namaste React using JSX</h1>);

console.log(heading)
//Cool way of creating Functional Component 
const Title = () => ( <h1 className="head" tabIndex="5">Namaste React using Functional Component</h1>);

// React Component 
// Class Based Component - OLD
// Functional Compnent - NEW

//React Functional Component - Normal JS Function which returns some JSX/react object.
// const HeadingComponent = () =>{
//     return <h1 className="heading">Welcome React Functional Component</h1>;
// }

const number =100;
//Component Compositions,React Element inside JSX and JS code inside JSX
const HeadingComponent = () => (
    <div id="container">
        {Title()}
        {Title()}
     <Title />
     <Title></Title>
     {heading}  
     <h2>{number +100}</h2>
     <h1>Welcome React Functional Component</h1>
    </div>
);

const root=ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
root.render(<HeadingComponent />)