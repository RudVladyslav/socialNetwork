import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";

let store = {
    _state: {
        ProfilePage: {
            PostsData: [
                {id: "1", message: "I am superman", like: ""},
                {id: "2", message: "No, you is batman", like: "7"},
                {id: "3", message: "i liike povik", like: "7"},
                {id: "4", message: "povik vovik", like: "7"},
            ],
            PostText: "",
        },

        DialogPage: {
            MessagesData: [
                {message: "Hi"},
                {message: "How are you?"},
                {message: "I like peaches"},
                {message: " My brother is nerd"},
            ],
            DialogsData: [
                {id: "1", name: "Vova"},
                {id: "2", name: "Dima"},
                {id: "3", name: "Vika"},
                {id: "4", name: "Sasha"},
                {id: "5", name: "Sveta"},
                {id: "6", name: "Viktor"},
            ],
            MessageText: ''
        },

        Navbar: {
            FriendsData: [
                {
                    id: 1,
                    avatar: "https://trikky.ru/wp-content/blogs.dir/1/files/2020/08/15/opera-snimok_2020-08-15_131857_www.instagram.com_.png",
                    name: 'Dasha'
                },
                {
                    id: 2,
                    avatar: "https://trikky.ru/wp-content/blogs.dir/1/files/2020/07/30/original.jpg",
                    name: 'Katya'
                },
                {
                    id: 3,
                    avatar: "https://trikky.ru/wp-content/blogs.dir/1/files/2020/08/15/opera-snimok_2020-08-15_103708_www.instagram.com_.png",
                    name: 'Nika'
                }
            ]
        }
    },
    _callSubscribe() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },

    dispatch(action) {
        profileReducer(this._state.ProfilePage, action)
        dialogsReducer(this._state.DialogPage, action)
        this._callSubscribe(this._state);
    },
}

window.store = store;
export default store;