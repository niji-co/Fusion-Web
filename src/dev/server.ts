const server = {
  users: [
    {
      uuid: "0",
      username: "breadandjams",
      email: "hidden_email@gmail.com",
      password: "",
      profilePicture: {
        name: "profile picture",
        url: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
      },
      displayName: "James",
      bio: "Hey how ya doing",
      contactEmail: "demo_email@gmail.com",
      contactNumber: "+65 98765432",
    },
  ],
  projects: [
    {
      title: "Project A",
      author: "0",
      tags: ["Web", "Mobile"],
      thumbnail: {
        name: "image",
        url: "https://i.ytimg.com/vi/cpb8pKFzd0s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6MIHKER3EoS8xZ99e2Wqa9niqTw",
      },
      rows: [
        {
          id: "0",
          type: 0,
          content: "Lorem ipsun",
          style: 1,
        },
        {
          id: "1",
          type: 1,
          asset: {
            name: "image",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
          },
        },
      ],
    },
    {
      title: "Project B",
      author: "0",
      tags: ["Mobile", "Server"],
      thumbnail: {
        name: "image",
        url: "https://i.ytimg.com/an_webp/mI6s6RBV1Jw/mqdefault_6s.webp?du=3000&sqp=CMygsoUG&rs=AOn4CLBH6bCxCqFAjqvy6qvezXq3qAVsSg",
      },
      rows: [
        {
          id: "1",
          type: 0,
          content: "This is another body",
          style: 1,
        },
      ],
    },
  ],
};

export default server;
