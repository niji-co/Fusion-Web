const server = {
  projects: [
    {
      title: "Project A",
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
          textStyle: 1,
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
      tags: ["Mobile", "Server"],
      rows: [
        {
          id: "1",
          type: 0,
          content: "This is another body",
          textStyle: 1,
        },
      ],
    },
  ],
};

export default server;
