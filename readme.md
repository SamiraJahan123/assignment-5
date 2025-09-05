


 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

getElementById: selects one element by its id.
getElementsByClassName: selects all element by a specific class.
querySelector: selects the first element that matches a CSS selector.
querySelectorAll: selects all elements that match a CSS selector.

2. How do you **create and insert a new element into the DOM**?

let newPara = document.createElement("p");
newPera.innerText = "Assignment-5";
document.body.appendChild(newPara);


3. What is **Event Bubbling** and how does it work?

Event Bubbling is when an event on a child element like a button click, automatically moves up to its parent elements. First the event happens on the element itself, then it bubbles up to its parent, grandparent, and so on, and at last it reaches the top of the DOM. Every parent in the path can respond if it has an event listener.


4. What is **Event Delegation** in JavaScript? Why is it useful?

in event delegation instead of adding an event listener to every single child element, we can add one listener to a parent element . it catches events that happen on its children. This works because of event bubbling
it reduces code, improves performance.


5. What is the difference between **preventDefault() and stopPropagation()** methods?

preventDefault(): This stops the browser's default action for an event. such as if we click a link then it takes us to a new page but if we use preventDefault() then the link won’t open the page

stopPropagation(): stopPropagation stops the event from bubbling up the DOM. So parent elements doesnt get notified about the event.



