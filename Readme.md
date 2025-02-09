# Vite - Vanilla javascript crashcourse

Component based, object oriented, showcase portfolio crashcourse.

## Get started

install all dependencies `npm install`. Run a dev server (auto open) and run a mock backend `npm run dev`.

## Structure, architecture.

This examplatory portfolio app follows a component-based architecture, which is a popular design pattern in modern web development. This approach breaks down the user interface into reusable, self-contained components, making the code more modular and easier to maintain.

### Key Practices:

1. **Component-Based Structure**: Each part of the UI is encapsulated in a component, such as the Gallery item component. This promotes reusability and separation of concerns.

2. **Object-Oriented Programming (OOP)**: The use of OOP principles helps in organizing the code into objects, making it more manageable and scalable.

3. **Dynamic DOM Manipulation**: By using JavaScript to dynamically create and append DOM elements, the application can efficiently update the UI in response to user interactions or data changes.

4. **Asynchronous Data Handling**: The use of `async/await` for fetching data ensures that the application remains responsive while waiting for data from the backend. Wrapping these calls in try-catch blocks provides robust error handling.

5. **State Management**: Implementing a store to keep track of the like-state for gallery items ensures that the application can manage and persist user interactions effectively.

These practices are considered best practices because they lead to code that is more maintainable, scalable, and easier to understand. They also enhance the user experience by making the application more responsive and interactive.

## Next:

- create Gallery item component.
- use Elements to dynamically create and append dom elements.
- use async await wrapped in try-catch blocks to fetch data & for each item in the collection create a gallery item.
- gallery item: 

```html
<div class="gallery-item" data-select="gallery-item">
  <img src="https://bees-resources.vercel.app/img/deconstructivism.png" alt="deconstructivism">
  <div class="item-details">
    <h3>Deconstructivism</h3>
    <button class="like-btn">
      <i class="far fa-heart"></i>
      <span class="likes">0</span>
    </button>
  </div>
</div>
```

- add store to gallery item that keeps track of like-state [general-count+user-specific-(de)activation]
- remove: store example @ScrollButton component.
