
### start in expo go
npx expo start 


### Task Explanation

In this task, I created a 5 application using Expo and Redux to manage the state of a text input. The application has five screens (home + 4 screens), 
and the text entered on the Home screen is displayed on all of them.

#### Steps Taken

1. **Setup Redux Store**:
   - I initialized a Redux store to manage the application’s state. In the store `store.tsx` , I created a variable called `text`, which holds the string input from the user.
   - I implemented actions and reducers to update the `text` variable through a `dispatch` function `reducers`. This way, whenever the input changes, it triggers an update to the Redux store.

2. **Home Screen**:
   - On the Home screen, I added a text input component. This input allows the user to enter text, and I connected it to the Redux store using `useSelector` to read the curent value and `useDispatch` to update.
   - Whenever the user types text into the input field, the `dispatch` function is called to update the `text` variable in the Redux store.

3. **Displaying Text on Other Screens**:
   - I created four additional screens. Each of these screens retrieves the text from the Redux store using `useSelector`, allowing them to display the updated text in real time.
   - This setup ensures that any change made on the Home screen is reflected across all five screens.

4. **Navigation**:
   - I used the Expo router to navigate between the screens. Each screen is accessible through a tabbed interface, making it easy for users to switch between them while consistently viewing the same text.

 