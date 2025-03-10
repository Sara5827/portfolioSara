import React, { useState } from "react";
import Modal from "react-modal";
import Contact from "../contact/Contact";

Modal.setAppElement("#root");

const News = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <div className="row">
        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="blog-grid" onClick={toggleModalOne}>
            <div className="blog-img">
              <img  src={process.env.PUBLIC_URL + "/img/blog/blog-4.jpg"} alt="blog post"></img>
            </div>
            <div className="blog-info">
              <div className="meta">04/MAY/2023 - Sara</div>
              <h6>
                <a>
                React Latest Version — Everything You Need To Know (React 18)
                </a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-1 */}

        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="blog-grid" onClick={toggleModalTwo}>
            <div className="blog-img">
              <img src={process.env.PUBLIC_URL + "/img/blog/blog-2.jpg"} alt="blog post"></img>
           
            </div>
            <div className="blog-info">
              <div className="meta">05/Oct/2024 - Sara</div>
              <h6>
                <a>
                  Exploring the Latest in React Native: Version 0.72 and What's New
                </a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-2 */}

      
      </div>
      {/* End .row */}

      {/* Start Modal for Blog-1 */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src={process.env.PUBLIC_URL + "/img/cancel.svg"} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src={process.env.PUBLIC_URL + "/img/blog/blog-4.jpg"} alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>
                    React Latest Version — Everything You Need To Know (React 18)
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src={process.env.PUBLIC_URL + "/img/testimonial/team-1.jpg"} alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>Sara</label>
                        <span>04 MAY 2023</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>
                    React is an open-source, JavaScript front-end library for building user interfaces. It works fast, is easy to learn, and is efficient, especially in creating scalable and reusable UI components.
                    </p>
                    <p>
                    The React team announced the release plan for the upcoming stable version of React 18. Now, it is in beta.
                    In this article, we are going to discuss some of the marvelous feature updates for React version 18 with code examples.
                    </p>
                    <h4>Introducing the new root API</h4>
                    <p>
                    A root in React refers to the top-level data structure that renders a tree. In React 18, we will have two root APIs: the legacy root API and new root API.

Legacy root API

The legacy root API is the existing API called with the ReactDOM.render method. It will create a root running in legacy mode, which is similar to usage in React version 17. Before moving React 18 to the production, a warning will be added on the usage of the legacy root API. It will gradually enforce the usage of the new root API. The legacy root API will be deprecated in upcoming versions.

New root API

The new root API will be invoked with the ReactDOM.createRoot method. To use it, first, we have to create the root through the createRoot method with the root element as an argument. Then, we call the root.render method and pass the app component as the parameter. By using the new root API, we can use all the enhancements and concurrent features available in React 18.
                 
Improvement in automatic batching
The batching feature in React 18 merges multiple state updates into a consolidated single rerender for improved performance. For instance, if we update more than one state value in a simple function handler. Then, React 18 will batch these updates into a single update and rerender the app only once instead of calling the render method multiple times.

This will considerably improve the app’s overall performance. It also prevents components from rendering with incomplete state updates where only one state variable is updated, which may lead to irrelevant behavior in the app.
                    </p>
                    <blockquote>
                      <h4>Disable automatic batching</h4>
                      <p>

                      Sometimes, we need to immediately rerender the component after each state change. In that scenario, use the flushSync method to disable the automatic batching.
                      </p>
                      {/* <p className="blockquote-footer">
                        Someone famous in{" "}
                        <cite title="Source Title">Dick Grayson</cite>
                      </p> */}
                    </blockquote>
                    <h4> Suspense</h4>
                    <p>
                    We can accomplish server-side rendering in React by rendering all the components on the server first. Then, we have to send the results as HTML elements to the browser.

In the browser, React will load JavaScript as usual. Then it will connect the HTML elements generated from the server with the JavaScript and hydration logic.

The server-side rendering (SSR) allows us to see the page content before the JavaScript bundle loads and runs.

The suspense feature will delay the rendering of components in React. It was first introduced in React version 16.6 with certain limitations and basic support for suspense rendering.

React 18’s stable version will support the full-fledged suspense feature based on the concurrent feature, along with the following:

Delayed transition: Instructs the components to wait for the data to be resolved before proceeding with a new state transition.
Placeholder throttling: Reduces UI thrash by throttling the appearance of nested placeholder and successive placeholder components.
SuspendList: Helps suspend many components by arranging them in the order in which these components need to be revealed to the user.

React 18 handles suspense differently from the previous versions. This seems to be a breaking change. But with automatic batching, the impact of the change is minimum. It will not affect the migration process of the app to React version 18 significantly.

Earlier, the suspense feature in React 16 and 17 was called legacy suspense. The enhanced suspense in the React 18 is called concurrent suspense.

In general, both the legacy and concurrent suspense features offer the same basic user experience, apart from resolving the ComponentThatSuspends method, as in the following example.

Concurrency
                    </p>
                    <h4>Concurrency</h4>
                    <p>
Concurrency allows you to execute multiple tasks at the same time. For instance, let’s take a standard React app. While executing an animation action in a component, concurrency will allow UI interaction with the other React components at the same time.

Previously, only one setState update was possible at a time and all the updates had the same priority. The new concurrent feature with the startTransition API will mark all the updates as non-urgent. Based on the given priority, React will interrupt them or put them on hold.</p>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">Design</li>
                    <li href="#">Development</li>
                    <li href="#">Travel</li>
                    <li href="#">Web Design</li>
                    <li href="#">Marketing</li>
                    <li href="#">Research</li>
                    <li href="#">Managment</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-1 */}

      {/* Start Modal for Blog-2 */}
      <Modal
        isOpen={isOpen2}
        onRequestClose={toggleModalTwo}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalTwo}>
            <img src={process.env.PUBLIC_URL + "/img/cancel.svg"} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src={process.env.PUBLIC_URL + "/img/blog/blog-2.jpg"} alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>
                    Exploring the Latest in React Native: Version 0.72 and What's New
                    </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src={process.env.PUBLIC_URL + "/img/testimonial/team-2.jpg"} alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>Sara</label>
                        <span>05 Oct 2024</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <p>
                    React Native’s latest release, Version 0.72, continues to solidify its position as a leading framework for building mobile applications. This update introduces significant performance improvements and new features aimed at streamlining development workflows and enhancing app efficiency.

<h4>1. Hermes Becomes the Default Engine</h4>
One of the most notable updates in React Native 0.72 is the decision to make Hermes the default JavaScript engine across all platforms. Hermes, developed by Facebook, enhances performance by optimizing the JavaScript execution process, reducing app startup times and memory usage, particularly for Android apps. Developers who have been using Hermes manually will now find it integrated seamlessly into the framework.

<h4>2. React Native Fabric and TurboModules</h4>
React Native is also taking steps towards its new architecture, with the introduction of Fabric and TurboModules. Fabric improves the UI rendering pipeline by making it more flexible and better integrated with native threads, which results in smoother, more responsive apps. TurboModules help optimize the interaction between JavaScript and native code, enhancing app performance by enabling lazy loading of modules, thus reducing memory usage.

<h4>3. Improved DevTools and Debugging</h4>
The developer experience has been elevated with updated DevTools. The latest version includes better profiling tools, enhanced debugging capabilities, and integration with Flipper, the mobile app debugging platform. These improvements make it easier for developers to track and fix performance bottlenecks during the development process.

<h4>4. TypeScript by Default</h4>
With the increasing popularity of TypeScript, React Native 0.72 now includes improved TypeScript support out of the box. This means better type-checking, reducing errors during development and providing a more robust coding experience for developers.

<h4>5. Support for React 18 Features</h4>
React Native 0.72 also brings full support for React 18 features, including the concurrent rendering capabilities, which allow apps to be more responsive during high-load operations. This will particularly benefit apps that handle heavy data processing or user interaction.

<h4>6. Auto Linking for Dependencies</h4>
With auto-linking, developers no longer need to manually link native modules. The system automatically detects and links native modules during the installation of new dependencies, reducing setup time and potential errors in configuration.

<h4>7. Smaller Bundle Sizes</h4>
React Native 0.72 continues to reduce the size of JavaScript bundles, which directly impacts the overall size of mobile applications. Smaller bundle sizes lead to faster downloads and installation times for users, as well as improved runtime performance.

<h4>Conclusion</h4>
The release of React Native 0.72 reinforces the framework's focus on performance, developer experience, and modern web standards. With features like Hermes as the default engine, Fabric, TurboModules, and improved TypeScript support, React Native continues to evolve as a versatile tool for cross-platform mobile development. Developers can now build faster, more efficient, and scalable apps with less hassle.
                    </p>
                   
                  
                   
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">Design</li>
                    <li href="#">Development</li>
                    <li href="#">Travel</li>
                    <li href="#">Web Design</li>
                    <li href="#">Marketing</li>
                    <li href="#">Research</li>
                    <li href="#">Managment</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-2 */}

  
    </>
  );
};

export default News;
