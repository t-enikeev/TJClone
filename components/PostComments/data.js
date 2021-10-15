module.exports = {
  comments: [
    {
      id: 1,
      user: {
        fullname: "Вася Пупкин",
        avatar:
          "https://leonardo.osnova.io/104b03b4-5173-fd9f-2af9-b458dddc4a23/-/scale_crop/108x108/-/format/webp/",
      },
      createdAt: new Date().toString(),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at cursus odio. Nam maximus eros ut sem hendrerit, sed pellentesque.",
      likes: 17,
      post: { title: "Какая у вас дома ванна?" },
    },
    {
      id: 2,
      user: {
        fullname: "Виктор Пиктор",
        avatar:
          "https://leonardo.osnova.io/104b03b4-5173-fd9f-2af9-b458dddc4a23/-/scale_crop/108x108/-/format/webp/",
      },
      createdAt: new Date().toString(),
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id rutrum odio, at placerat purus. Aliquam ut volutpat dui, vel.\n" +
        "\n",
      likes: 5,
      post: {
        title: "Какая у вас дома ванна?",
      },
    },
    {
      id: 3,
      user: {
        fullname: "Федор Иванов",
        avatar:
          "https://leonardo.osnova.io/104b03b4-5173-fd9f-2af9-b458dddc4a23/-/scale_crop/108x108/-/format/webp/",
      },
      createdAt: new Date().toString(),
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis libero ac bibendum pellentesque. Curabitur suscipit enim quis risus elementum.\n" +
        "\n",
      likes: 19,
      post: {
        title: "Какая у вас дома ванна?",
      },
    },
  ],
};
