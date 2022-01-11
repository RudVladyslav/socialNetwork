import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profile-reduser";
import {render, screen} from "@testing-library/react";
import App from "../App";

let state = {
    PostsData: [
        {id: "1", message: "I am superman", like: ""},
        {id: "2", message: "No, you is batman", like: "7"},
        {id: "3", message: "i like povik", like: "7"},
        {id: "4", message: "povik vovik", like: "7"},
    ]
}

test('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("Vova is best of the best")
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.PostsData.length).toBe(5)
});

test('message post is corrected', () => {
    // 1. test data
    let action = addPostActionCreator("Vova is best of the best")
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.PostsData[4].message).toBe('Vova is best of the best')

});

test('after deleting post of message should be decrement', () => {
    // 1. test data
    let action = deletePostActionCreator(1)
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.PostsData.length).toBe(3)

});



