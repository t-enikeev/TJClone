import React, { useState } from "react";
import ArrowRightIcon from "@material-ui/icons/NavigateNextOutlined";

import styles from "./SideComments.module.scss";
import { CommentItem } from "./CommentItem";
import clsx from "clsx";

export const comments = [
  {
    id: 1,
    user: {
      id: 1,
      fullname: "Вася Пупкин",
      avatar:
        "https://leonardo.osnova.io/104b03b4-5173-fd9f-2af9-b458dddc4a23/-/scale_crop/108x108/-/format/webp/",
    },
    createdAt: new Date().toString(),
    text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…",
    post: { id: 1, title: "Какая у вас дома ванна?" },
  },
  {
    id: 2,
    user: {
      id: 1,
      fullname: "Вася Пупкин",
      avatar:
        "https://leonardo.osnova.io/104b03b4-5173-fd9f-2af9-b458dddc4a23/-/scale_crop/108x108/-/format/webp/",
    },
    createdAt: new Date().toString(),
    text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…",

    post: {
      id: 1,
      title: "Какая у вас дома ванна?",
    },
  },
  {
    id: 3,
    user: {
      id: 1,
      fullname: "Вася Пупкин",
      avatar:
        "https://leonardo.osnova.io/104b03b4-5173-fd9f-2af9-b458dddc4a23/-/scale_crop/108x108/-/format/webp/",
    },
    createdAt: new Date().toString(),
    text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…",
    post: {
      id: 1,
      title: "Какая у вас дома ванна?",
    },
  },
];

export const SideComments = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => setVisible(!visible);

  return (
    <div className={clsx(styles.root, !visible && styles.rotated)}>
      <h3 onClick={toggleVisibility}>
        Комментарии <ArrowRightIcon />
      </h3>
      {visible && comments.map((obj) => <CommentItem key={obj.id} {...obj} />)}
    </div>
  );
};
