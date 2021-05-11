import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', like: 4 },
        { id: 2, message: "It's my first post", like: 6 },
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Vlad' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Olya' },
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your life?' },
        { id: 3, message: 'Hey' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
      ],
      newMessageBody: '',
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log(' changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
