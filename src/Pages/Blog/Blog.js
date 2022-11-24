import React from 'react';


const Blog = () => {

    return (
        <div className='mt-10'>
            <div tabIndex={0} className="collapse collapse-arrow border border-black text-black rounded-box mb-2">
                <div className="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>
                        The Four Kinds of React State to Manage.<span className='font-bold'>(Local state. Global state. Server state. URL state.)</span>
                        <br />
                        State represents the value of a dynamic properties of a React component at a given instance. React provides a dynamic data store for each component. The internal data represents the state of a React component and can be accessed using this. state member variable of the component.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-black text-black rounded-box mb-2">
                <div className="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.
                        It is a method by which an object can inherit the properties and methods of another object. <br />
                        Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object. <br />
                        Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. All JavaScript objects inherit properties and methods from a prototype: Date objects inherit from Date.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-black text-black rounded-box mb-2">
                <div className="collapse-title text-xl font-medium">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>
                        The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.

                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-black text-black rounded-box mb-2">
                <div className="collapse-title text-xl font-medium">
                    React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. <br />
                        Popularity. According to a survey by Stack Overflow 40.13% of the developers believe that React is the most commonly used JavaScript Framework. Angular and Vue follow it with 22.96% and 18.97%, respectively.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;