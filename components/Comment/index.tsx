import React from "react";
import { Typography, IconButton, MenuItem, Menu } from "@material-ui/core";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@material-ui/icons";
import Image from "next/image";

import styles from "./Comment.module.scss";

interface CommentPostProps {
  user: {
    fullname: string;
    avatar: string;
  };
  text: string;
  likes: number;
  createdAt: string;
}

export const Comment: React.FC<CommentPostProps> = ({
  user,
  text,
  createdAt,
  likes,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <img src={user.avatar} alt="Avatar" />
        <b>{user.fullname}</b>
        <span>{createdAt}</span>
        <div className={styles.likeContainer}>
          <KeyboardArrowDown className={styles.btn} />
          <span className={styles.likes}>{likes ? `+${likes}` : "0"}</span>
          <KeyboardArrowUp className={styles.btn} />
        </div>
      </div>
      <Typography className={styles.text}>{text}</Typography>
      <span className={styles.replyBtn}>Ответить</span>
      <IconButton onClick={handleClick}>
        <MoreHoriz />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        elevation={2}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
      >
        <MenuItem onClick={handleClose}>Удалить</MenuItem>
        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
      </Menu>
    </div>
  );
};
