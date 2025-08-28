______________________________________________________________________________________________
Assignment 5- readme.md (Questions and Answers)
______________________________________________________________________________________________
Question 1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer 1: 

getElementById: getElementById finds an element by using it's id. since Id is unique, getElementById returns unique element.  

getElementsByClassName: getElementsByClassName find elements by their classNames.
Multiple elements can have same class. so, it can return an HTML collection of elements. 

querySelector: querySelector finds the first element that matches the CSS selector (id, attribute, class, tag, etc. ). It always returns null elements or null if  nothing is found.

querySelectorAll: querySelectorAll finds all elements that match a given CSS selector. 
________________________________________________________________________________________________
Question 2: How do you create and insert a new element into the DOM?

Answer 2:

By using document.createElement('tagName'), it is possible to create a new element in the DOM.
By using appendChild() we can insert the created element into the DOM. 

Example: 

const newDiv=document.createElement("div");
document.body.appendChild('newDiv')
________________________________________________________________________________________________
Question 3: What is Event Bubbling and how does it work?

Answer 3: 

When an event occurs, it is first handled on the target element and then bubbles up to its parent, grandparent, great grand parent and other ancestors. This concept is known as event bubbling
_________________________________________________________________________________________________
Question 4: What is Event Delegation in JavaScript? Why is it useful?

Answer 4: 

Event delegation is a pattern in JavaScript , where instead of attaching event listeners to multiple child elements, the event listener is attached to the parent element and uses event bubbling to catch events from its children.

Importance of event delegation:
i. Saves memory and speeds up performance- Instead of attaching many event listeners, attaching a single event listener on the parent is more efficient. 
ii. Handles dynamic content- new child elements added later will automatically work with the parent's event listener
__________________________________________________________________________________________________
Question 5: What is the difference between preventDefault() and stopPropagation() methods?

Answer 5: 
preventDefault() is used when we want to stop default action. For example , while working with HTML forms, preventDefault() prevents the form from automatically submitting.
stopPropagation() stops the event from propagating (bubbling) up the DOM tree. 

___________________________________________________________________________________________________