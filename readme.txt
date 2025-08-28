Assignment 5- readme.txt
_________________________________________________________________________________________________
Question 1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer 1: 

getElementById: getElementById finds an element by using it's id. since Id is unique, getElementById returns unique element.  

getElementsByClassName: getElementsByClassName finds elements by their classNames.
multiple elements can have same class. so, it can return an HTML collection of elements. 

querySelector: querySelector finds the first element that matches the CSS selector (is, attribute, class, tag, etc. ). It always returns null elements or null if  nothing is found. 

querySelectorAll: querySelectorAll finds all elements that match a given CSS selector. 
_______________________________________________________________________________________________
Question 2: How do you create and insert a new element into the DOM?

Answer 2: by using document.createElement('tagName'), it is possible to insert a new element in DOM.
by Using appendChild() we can insert the created element into the DOM. 
_____________________________________________________________________________________________
Question 3: What is Event Bubbling and how does it work?

Answer 3: when an event occurs, then it runs on the target element and then bubbles up to its' parents, grandparent, great grand parents and respective ancestors. 
______________________________________________________________________________________________
Question 4: What is Event Delegation in JavaScript? Why is it useful?

Answer 4: event delegation is a pattern in JavaScript , where instead of attaching event listeners with multiple child, event listeners are attached with parent and use event bubbling to catch events from the children.

Importance of event delegation:

i. saves memory and speeds up performance. Instead of attaching many event listener, attaching only 1 event listener on single parent can help. 

ii. Dynamic- new elements added later, automatically works
__________________________________________________________________________________________________
Question 5. What is the difference between preventDefault() and stopPropagation() methods?

Answer 5: preventDefault is used when we want to stop default action. for example , when we work with html forms, preventDefault() stops the forms default action automatic form submission.
stopPropagation() stops the event flow. 

_______________________________________________________________________________________________