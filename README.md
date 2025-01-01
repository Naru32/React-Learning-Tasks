# React-Learning-Tasks
A repository documenting my journey of learning React.js, from basic to advanced concepts. This includes various tasks and mini-projects that I’ve worked on to understand and apply React features like state management, event handling, props, Context API, forms, and more. Follow along as I expand my React skills with each update!
## Tasks Completed  
1. **State Variable and onClick Event Handling:**  
   - **Objective:** Implement a state variable that updates dynamically based on user interaction.  
   - **Learnings:**  
     - Understanding React's state management.  
     - Handling events in React using `onClick`.
2. Props and Props Validation
   # Udemy Institute Profile - React Task  

This project is a solution to a task that demonstrates React concepts like props, default props, children props, and props validation. It showcases the creation of a dynamic profile for "Udemy Institute" using React.js.  

## Features  
- Dynamically passing and displaying data between components using props.  
- Assigning default values to props (`rating`, `duration`).  
- Validating props using PropTypes to ensure type safety.  
- Rendering children content dynamically in components.  

## Concepts Learned  
1. **Props:**  
   - Passing data from `Parent.jsx` to `MyProfile.jsx`.  
   - Accessing and displaying props dynamically in the UI.  

2. **Default Props:**  
   - Providing fallback values for missing props (`rating`, `duration`).  

3. **Children Props:**  
   - Including custom JSX elements as children.  

4. **Props Validation:**  
   - Ensuring proper data types for props using `PropTypes`.  
   - Displaying warnings for invalid prop types in the console.

#Simple Counter Task Using React Context API
This repository demonstrates my understanding of the React Context API through the implementation of a Simple Counter task. The project uses Context API to manage global state effectively without prop drilling, showcasing dynamic state updates and seamless data sharing across components.

## 🚀 Features: 
1. **Global State Management:**
Created a CounterContext for managing the counter state globally.
2. **State Modification Functions:**
Increment: Increases the counter by 1.
Decrement: Decreases the counter by 1.
Reset: Resets the counter to its initial value (0).
3. **Dynamic UI Updates:**
A consumer component (SimpleCounter.jsx) updates the counter dynamically using buttons.
4. **Modular Styling:**
counter.module.css is used for scoped and organized styling.
#🛠️ How It Works
1. Context Provider (CounterContext.jsx):

A context named CounterApi is created to store and share the counter state along with three functions: increment, decrement, and reset.
The context provider wraps the App component to make state accessible globally.
2. Consumer Component (SimpleCounter.jsx):

Utilizes the useContext hook to access counter and its associated functions from the context.
Displays the current counter value and provides buttons for incrementing, decrementing, and resetting.
3. Styling (counter.module.css):

Scoped styles enhance the appearance of the counter display and buttons.


## About Me  
I'm a beginner in React, excited to explore and build scalable web applications. Stay tuned for more updates as I learn!
