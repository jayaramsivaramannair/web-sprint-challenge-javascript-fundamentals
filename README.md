# Sprint Challenge - JavaScript Fundamentals

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in project. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied array methods, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. 

_You have **three hours** to complete this challenge. Plan your time accordingly._


## Introduction

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Briefly compare and contrast `.forEach` & `.map` (2-3 sentences max)
`The main distinction between .forEach and .map is that -`
`.forEach applies the function received as a parameter to each array element but its return value is undefined.`
`On the other hand, .map applies the function received as a parameter to each array element and returns a new array by transforming elements in the original array`.

`The second distinction between .forEach and .map is that -`
`In case of .forEach, we cannot chain other methods to it since the return value is undefined.`
`On the other hand, as .map returns a new array with transformed elements, we can chain other methods to the result such as .sort(), .filter() and so on...`

2. Explain the difference between a callback and a higher order function.
`Higher order function is a function which accepts another function as a parameter or returns a function as an output`
`On the other hand, callbacks represent functions which are passed in as parameters to a higher order function`

3. What is closure?
`closure enables an inner/nested function to access a variable not only within its own function scope but it can also access variables from its surrounding function`
`closure also enables an inner/nested function to keep the access alive to a variable in its surrounding function scope even after the nested function returns`
`closure can save state of a variable in its surrounding function scope and this becomes especially useful when a function needs to keep track of a counter between successive function calls`

4. Describe the four rules of the 'this' keyword.
`The value of 'this' differs on how and where the function is invoked.`
`The four rules of this keyword are as below:`
`(a) Global Binding: Using this keyword inside a function or in a global scope will refer to the global object which is window in case of a browser`
`(b) Implicit Binding: 'this' keyword refers to the object on which the function is called`
`(c) Explicit Binding: This occurs when we use the call(), apply() and bind() methods. In these case, 'this' refers to the object which we have specified`
`(d) new keyword: new keyword creates a new instance of an object. In this case, 'this' keyword refers to the new instance of the object being created`

5. Why do we need super() in an extended class?
`super keyword is used in an extended/child class because it helps us initialize variables or set values of properties which are common to both the parent class and child class.`
`In a way, super keyword helps us avoid duplication and inherit properties from the parent class in few lines of code.`

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade. 

## Instructions

### Task 1: Project Set Up

- [ ] Create a forked copy of this project
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!)
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly
- [ ] Push commits: git push origin `<firstName-lastName>`

### Task 2: Project Requirements

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

#### Task A: Objects and Arrays

Test your knowledge of advanced array methods and callbacks.
* [ ] Use the [arrays-callbacks.js](challenges/arrays-callbacks.js) link to get started.  Read the instructions carefully!

#### Task B: Closure

This challenge takes a look at closures as well as scope. 
* [ ] Use the [closure.js](challenges/closure.js) link to get started. Read the instructions carefully!

#### Task C: Prototypes

Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

#### Task D: Classes

Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals 

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!

## Submission format

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**


