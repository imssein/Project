import { combineReducers } from "redux";
import posts from "../modules/posts";
import districts from "../modules/districts";
import review from "../modules/review";

const reducer = combineReducers({
    review,
    districts,
    posts,
});

export default reducer;