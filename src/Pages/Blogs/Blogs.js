import React from 'react';
import { Table } from 'react-bootstrap';
import './Blogs.css';

const Blogs = () => {
    return (
        // Here is the answer of 4 questions
        <div className='container mb-10'>
            <div className='question'>
                <p className='text-2xl text-white text-center'>How will you improve the performance of a React Application?</p>
                <p> There are so many way to improve the performance of React Application.Some of these are given below.
                    <ul >
                        <li>1.Keeping component state local where necessary</li>
                        <li>2.Memoizing React components to prevent unnecessary re-renders</li>
                        <li>3.Code-splitting in React using dynamic import()</li>
                        <li>4.Windowing or list virtualization in React applications</li>
                        <li>5.Lazy loading images in React</li>
                    </ul>
                </p>
            </div>
            <div className='question'>
                <p className='text-2xl text-white text-center'>What are the different ways to manage a state in a React application?</p>
                <p>  There are 4 ways to manage a state in a React Application.
                    <ol>
                        <li>1. Local (UI) state - Local state is data we manage in one or another component.

                            Local state is most often managed in React using the useState hook.

                            For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form's inputs.</li>
                        <li>2. Global (UI) state - Global state is data we manage across multiple components.

                            Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                            A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.</li>
                        <li>3. Server state - Data that comes from an external server that must be integrated with our UI state.

                            Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                            There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.</li>
                        <li>4. URL state - Data that exists on our URLs, including the pathname and query parameters.

                            URL state is often missing as a category of state, but it is an important one.
                            In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                            There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</li>
                    </ol>
                </p>
            </div>
            <div className='question'>
                <p className='text-2xl text-white text-center'>HWhat is a unit test? Why should write unit tests?</p>
                <p>  Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class.
                    Why we use it?
                    Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.
                    It simplifies the debugging process.
                    Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.
                </p>
            </div>
            <div className='question'>
                <p className='text-2xl text-white text-center'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</p>
                <p>  If we think that there is an array of object which name is Products.It's has three element where every element is has three properties.One of them is name.Then we can use find operation for search the whole element of this properties.We will apply find with a necessary if operation.When match the condition then we will return true and showing data as output.
                </p>
            </div>
            <div className='question'>
                <p className='text-2xl text-white text-center'>YWhy you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</p>
                <p>  We use setProducts because sometime we need to change the value of a state.Then we can set the latest value to the products variable.But if we use[...products] then we can't set the latest value of the state.
                </p>
            </div>
        </div>
    );
};

export default Blogs;