import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <MyComponent heading="React" />
      <MyComponent heading="Java" desc="Java is cool." />
      <MyComponent heading="Javascript" desc="Javascript is Hot!!" />
      <MyComponent heading="Python" desc="Python is Intelligent!!" />
    </div>
  );
}

// Reading the PROPS passed by the Parent.
function MyComponent({ heading = "Default Heading", desc = "NA" }) {
  return (
    <div className="bg-dark p-3 text-light mb-1">
      <h1>Learning {heading}</h1>
      <hr />
      <p>
        <mark className="rounded alert-warning">{desc}</mark> Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Earum harum iusto, repellendus
        officia cumque officiis amet sed aspernatur rem assumenda recusandae
        odio ipsa libero a voluptas voluptate, facere reiciendis aliquam?
      </p>
    </div>
  );
}

export default App;
