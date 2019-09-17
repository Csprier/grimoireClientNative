import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

// Local storage
import { loadAuthToken } from './local-storage';

// Reducers
import authReducer from './reducers/auth.reducer';
// import createNoteReducer from './reducers/createNote.reducer';
// import searchReducer from './reducers/search.reducer';
// import notesReducer from './reducers/notes.reducer';
// import editNoteReducer from './reducers/editNote.reducer';
// import modalReducer from './reducers/modal.reducer';
// import tagsReducer from './reducers/tags.reducer';
// import foldersReducer from './reducers/folders.reducer';

// Actions
import { setAuthToken, refreshAuthToken } from './actions/auth.actions';

const rootReducer = combineReducers({
  auth: authReducer,
  // createNote: createNoteReducer,
  // editNote: editNoteReducer,
  // form: formReducer,
  // modal: modalReducer,
  // notes: notesReducer,
  // tags: tagsReducer,
  // folders: foldersReducer,
  // search: searchReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer, 
  composeEnhancers(
    applyMiddleware(thunk)
  ));

// Hydrate the authToken from localStorage if it exists
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;