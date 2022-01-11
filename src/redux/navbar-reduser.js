let initialState = {
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

const navbarReducer = (state= initialState) => {
    return state;
}

export default navbarReducer;

