# What are the steps to set up the retduc store?

step up a store.js
    * create store function from redux and make it avaiable for our application
    * create a store requires All reducers in the application ;
    combine-Reducers will allow us to combine the application reducers.

    Create a flash-card-Reducer

    create our action for the flash card app:

            * type : SUBMIT_ANSWER ,payload :isCorrect (true |false)
            * type : RESET_SESSION

    write  up our application with the store

    create our facing components

    Objectives of the flashcard app:

    show the user a questions ,
                -user should be able to click a button to see the answer;
                -user will state whether they know the answer or not
                - once all flashcard are completed , inform the user how many they got right 
                - permit the user to restart the session