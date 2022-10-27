import React from "react";
import { FaCheck } from 'react-icons/fa';


const Blog = () => {
  return (
    <div>
      <div className="my-5 mx-4">
        <h2 className="text-xl font-semibold">What is CORS?</h2>
        <p>
          Cross-Origin Resource Sharing (CORS) is an HTTP-based security
          mechanism controlled and enforced by the client. It allows a service
          to indicate any origin other than its own from which the client can
          request resources. It has been designed in response to the same-origin
          policy that restricts how a website loaded by one origin can interact
          with a resource from another origin. CORS is used to explicitly allow
          some cross-origin requests while rejecting others.
        </p>
      </div>
      <div className="my-5 mx-4">
        <h2 className="text-xl font-semibold">Why We use Firebase?</h2>
        <p>
          Firebase is a less technical and time-saving alternative to writing
          full-fledged backend code for dynamic apps.
        </p>
        <h3 className="text-xl font-semibold">Firebase Alternative</h3>
        <ul>
            <li className="flex items-center"> <FaCheck className="text-xs mr-1"></FaCheck> Back4App</li>
            <li className="flex items-center"> <FaCheck className="text-xs mr-1"></FaCheck> Backendless</li>
            <li className="flex items-center"> <FaCheck className="text-xs mr-1"></FaCheck> Kuzzle</li>
            <li className="flex items-center"> <FaCheck className="text-xs mr-1"></FaCheck> Pubnub</li>
            <li className="flex items-center"> <FaCheck className="text-xs mr-1"></FaCheck> Kumulos</li>
            <li className="flex items-center"> <FaCheck className="text-xs mr-1"></FaCheck> Deployd</li>
        </ul>
      </div>
      <div className="my-5 mx-4">
        <h2 className="text-xl font-semibold">How does the Private Router Work?</h2>
        <p>
        React Router is one of the most important components of React.
        Private router working is Conditionally, if condition is true then private router navigate is working, I means we visit Private Route otherwise We can not visit Private Route.
        </p>
      </div>
      <div className="my-5 mx-4">
        <h2 className="text-xl font-semibold">What is NodeJs?</h2>
        <p>
Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser.
<br />
        </p>
        <h3 className="text-xl font-semibold">How to work NodeJs</h3>
        <p>
        Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
        </p>
      </div>
    </div>
  );
};

export default Blog;
