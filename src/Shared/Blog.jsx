import React from "react";
import Pdf from "react-to-pdf";

const Blog = () => { 
    const ref = React.createRef();
  return (
    <div className="m-5 border border-2 p-5 rounded">
        <div className='my-4 d-flex justify-content-center bg-primary p-3 rounded'>
        <Pdf  className='' targetRef={ref} filename="Thai Express blog.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Download Pdf</button>}
        </Pdf>
        </div>
      <div ref={ref}>
      <h4>
        1. Tell us the differences between uncontrolled and controlled
        components.
      </h4>
      <p>
        Ans: Uncontrolled Components: Components that manage their own state
        internally, allowing users to directly interact with them without
        explicit control from a parent component. They have a one-way data flow
        and are often used for form inputs when immediate access to the input's
        DOM value is required. Controlled Components: Components whose state is
        managed by a parent component or an external entity. The state is passed
        down to the component through props, and any changes to the state are
        handled by the parent component. Controlled components have a two-way
        data flow and are commonly used for form inputs when validation and
        stricter control over the input values are needed.
      </p>
      <br />
      <h4>2. How to validate React props using PropTypes</h4>
      <p>
        Ans: In React, We can use the PropTypes library to validate the props
        passed to your components. PropTypes allow you to specify the expected
        types and shapes of the props, helping you catch potential bugs or
        incorrect usage of your components.{" "}
      </p>
      <br />
      <h4>3. Tell us the difference between nodejs and express js.</h4>
      <p>
        Ans: 
        <br />Node.js: A runtime environment that allows you to run JavaScript on
        the server-side, providing a set of APIs for building server-side
        applications, network applications, and more.
        <br /> <br />
        Express.js: A web
        application framework that runs on top of Node.js, simplifying the
        process of building web applications and APIs by providing abstractions
        and utility functions for handling HTTP requests and responses.
      </p>
        <br />
      <h4>4. What is a custom hook, and why will you create a custom hook?</h4>
      <p>Ans: A custom hook is a reusable JavaScript function in React that allows you to encapsulate and share logic or stateful behavior across multiple functional components. It promotes code reuse, enhances code organization, and helps separate concerns by extracting common functionality into custom hooks.</p>
      </div>
    </div>
  );
};

export default Blog;
