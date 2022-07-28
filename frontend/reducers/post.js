export const initialState = {
    mainPosts: [
        {
        id: 1,
        User: {
            id: 1,
            nickname: '제로초',
        },
        date: "2022-07-26 17:33",
        title: '첫 게시글',
        category: '자유',
        content: '첫 번째 게시글 첫 번째 게시글  첫 번째 게시글 첫 번째 게시글 첫 번째 게시글 #해쉬태그 #익스프레스',
        Images: [{
            src: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZydWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
        }, 
        {
            src: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZydWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
        },
         {
            src: 'https://images.unsplash.com/photo-1595475207225-428b62bda831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZydWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
        }],
        Comments: [{ 
            User: {
                nickname: 'nero',
            },
            content: '안녕~ ',
        }, {
            User: {
                nickname: 'zero',
            },
            content: '우왕',
        }]
    }],
    imagePaths: [], 
    postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST, 
} 
const dummyPost = {
    id: 2, 
    content: '더미데이터입니다.',
    User: {
        id: 1, 
        nickname: '제로초',
    }, 
    Images: [], 
    Comments: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                // 앞에다 dummyPost를 추가해야지 게시글이 위로 올라감. 
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true, 
            }; 
        default:
            return state;
    }
}
export default reducer; 