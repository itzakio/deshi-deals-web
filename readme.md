## Answer of the following questions:

### 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

**Answer:** These three are DOM element selector. The purpose is same, but there are some major difference.

- **getElementById:** This element selector select one element with the matching ID. Each id should be unique on the page or it will select only first element with the matching ID. If no element found on that ID, it will return null.

**Example:**
```html
<div id ="container">
  <div id= "box-1" class = "box"></div>
  <div id= "box-2" class = "box"></div>
</div>
```
```javascript
const el = document.getElementById("container");
console.log("el");
```

-**getElementsByClassName:** This element selector select one or multiple element with the matching Class Name. It returns live HTMLCollection. If DOM changes like adding or removing the elements. The elements updates automatically.

**Example:**
```html
<div id ="container">
  <div id= "box-1" class = "box"></div>
  <div id= "box-2" class = "box"></div>
</div>
```

```javascript
const elements = document.getElementsByClassName("box");
console.log("elements");
```

**querySelector:** This element selector select one element with the matching css selector. It will select only first element with the matching css selector. If no element found on that css selector, it will return null.

**Example:**
```html
<div id ="container">
  <div id= "box-1" class = "box"></div>
  <div id= "box-2" class = "box"></div>
</div>
```

```javascript
const el = document.getElementById("#box-1");
console.log("el");
```

**querySelectorAll:** This element selector select one or multiple element with the matching css selector. It returns NodeList of matching css selector. NodeList is an array like object, So we can loop through the NodeList.

**Example:**

```html
<div id ="container">
  <div id= "box-1" class = "box"></div>
  <div id= "box-2" class = "box"></div>
</div>
```

```javascript
const elements = document.getElementsByClassName(".box");
console.log("elements");
```

---

### 2. How do you **create and insert a new element into the DOM**?

**Answer:** The steps to create and insert a new element into the DOM:

**Step-1:** Get the parent container from the DOM, Where the child container will be inserted.
**Example:**
```html
<div id ="parent-container">
 
</div>
```
```javascript
const parentContainer = document.getElementById("parent-container");
```

**Step-2:** Create a child container to set the inner HTML:
Example: 
```javascript
const childContainer = document.createElement("div");
```

**Step-3:** Set the inner HTML:
Example: 
```javascript
childContainer.innerHTML = `<h1> Helle Programming Hero </h1>`
```

**Step-4:** Append the child container into parent container:
Example: 
```javascript
parentContainer.appendChild(childContainer);
```

---

### 3. What is **Event Bubbling** and how does it work?

**Answer:** Event Bubbling is a main feature of HTML DOM. If you click on element in web page, the element triggered the event and also propagates upward through its parent to ancestor way up to document.
**Example:** 
```html
<div id="parent-container">
  <div id="child-container">
    <button id="btn"> </button>
  </div>
</div>
```

```javascript
document.getElementById("btn").addEventListener("click", function() {
    console.log("Button Clicked");
});

document.getElementById("child-container").addEventListener("click", function() {
    console.log("Child Container Clicked");
});

document.getElementById("parent-container").addEventListener("click", function() {
    console.log("Parent Container Clicked");
});
```


If you clicked on the button who has id of **btn** it will also triggered the event for the parent way up to ancestor elements. So the output will be:
Button Clicked
Child Container Clicked
Parent Container Clicked

And if you clicked on the div who has id of **child-container** it will also triggered the event for the parent way up to ancestor elements. So the output will be:
Child Container Clicked
Parent Container Clicked

---

### 4. What is **Event Delegation** in JavaScript? Why is it useful?

**Answer:** Event Delegation is a technique used to triggered event by using DOM Event Bubbling features. In this technique the EventListener set only in the parent element. And for the bubbling feature parent element can identify witch element is triggering the event by the help of DOM element selectors.

**Example:**
```html
<div id="card-container">
  <!-- card - 1 -->
  <div id="card-1">
    <h1>Card - 1</h1>
    <button class="btn"> </button>
  </div>

  <!-- card - 2 -->
  <div id="card-2">
    <h1>Card - 2</h1>
    <button class="btn"> </button>
  </div>

  <!-- card - 3 -->
  <div id="card-3">
    <h1>Card - 3</h1>
    <button class="button"> </button>
  </div>
</div>
```

```javascript
document.getElementById("card-container").addEventListener("click", function(e) {
      // get the card title
      const cardTitle = e.target.parentNode.childNodes[1].innerText;

      // get the element witch one you clicked for triggered the event
      const cardBtn = e.target.className.includes("btn");

      // give a condition if button have a class name of **btn** 
      if(cardBtn === true){
        Console.log(`${cardTitle} is clicked`);
      }
  });
```

If you clicked on card-1 and card-2 button. It will show output. Because it's includes the classname **btn**. The output will be:
Card - 1 is clicked
Card - 2 is clicked

If you clicked on card-3 button. It will not show any output. Because it don't includes the classname **btn**.

---

### 5. What is the difference between **preventDefault() and stopPropagation()** methods?

**Answer:**
**preventDefault():** Stops the default action of an element from happening like stops a link < a> from navigating, stops a form from submitting and stops right-click from opening context menu.

**Example:**
```html
<form>
  <input type="text" placeholder = "write something">
  <button id="btn"> Submit </button>
</form>
```

```javascript
document.getElementById("btn").addEventListener("click", function(e){
  e.preventDefault();
  console.log("submit button clicked")
})
```

The default behavior form is if their any button inside the form and it clicked, form reload the page. The **preventDefault()** stop that behavior of form.

**stopPropagation():** Stops the event from bubbling from the target element to their parent. If you use the **stopPropagation()** to the child element EventListener the parent can't hear the bubbling.

**Example:**
```html
<div id="parent">
  <button id="child">Click Me</button>
</div>
```

```javascript
  document.getElementById("child").addEventListener("click", function(e) {
  e.stopPropagation(); // stops bubbling
  console.log("Button clicked");
});

  document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});
```

If the **stopPropagation()** was not used in this EventListener and we clicked the button, the output will be:
Button clicked
Parent clicked

And for using the **stopPropagation()** used in this EventListener and we clicked the button parent can't hear the event and the output is:
Button clicked

