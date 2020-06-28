
let state = {
  profilePage: {
    posts: [
      {
        id: 1,
        title: 'Sample blog post 1',
        date: (new Date()).toLocaleString(),
        author: 'Mark',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      },
      {
        id: 2,
        title: 'Sample blog post 2',
        date: (new Date()).toLocaleString(),
        author: 'Igor',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      },
      {
        id: 3,
        title: 'Sample blog post 3',
        date: (new Date()).toLocaleString(),
        author: 'Egor',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      },
    ]
  },
  messagesPage: {
    dialogs: [
      { id: 1, name: 'Egor'},
      { id: 2, name: 'Igor'},
      { id: 3, name: 'Mariya'},
      { id: 4, name: 'Julia'},
      { id: 5, name: 'Danila'},
    ],
    messages: [
      {
        id: 1,
        title: 'Egor',
        text: 'some text',
        image: 'https://dummyimage.com/50x50/ccc/000.png'
      },
      {
        id: 2,
        title: 'Me',
        text: 'some text',
        image: 'https://dummyimage.com/50x50/0f0/000.png',
        styles: {

        },
        className: ''
      },
      {
        id: 3,
        title: 'Egor',
        text: 'some text',
        image: 'https://dummyimage.com/50x50/ccc/000.png'
      },
    ]
  }
};

export let addMessage = (messageText) => {
  let newMessage = {
    id: 4,
    title: 'Me',
    text: messageText,
    image: 'https://dummyimage.com/50x50/0f0/000.png'
  };
  state.messagesPage.messages.push(newMessage);

};

export default state;