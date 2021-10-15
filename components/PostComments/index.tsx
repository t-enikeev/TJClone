import React, { useState } from "react";
import styles from "PostComments.module.scss";
import { Divider, Paper, Tab, Tabs, Typography } from "@material-ui/core";
import { Comment } from "../Comment";
import AddCommentForm from "../AddCommentForm";
import data from "./data";

// type IComment = {
//   text: string;
//   id: number;
//   createdAt: string;
//   user: {
//     fullname: string;
//     avatar: string;
//   };
// };
//
// interface PostCommentsProps {
//   items: IComment[];
// }

export const PostComments: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const comments = data.comments;
  return (
    <Paper elevation={0} className="mt-40 p-30">
      <div className="container">
        <Typography variant="h6" className="mb-20">
          42 комментария
        </Typography>
        <Tabs
          className="mt-20"
          value={activeTab}
          onChange={(_, newValue) => setActiveTab(newValue)}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Популярные" value={0} />
          <Tab label="По порядку" value={1} />
        </Tabs>
        <Divider />
        <AddCommentForm />
        <div className="mb-20" />
        {comments.map((obj) => (
          <Comment
            key={obj.id}
            likes={obj.likes}
            user={obj.user}
            text={obj.text}
            createdAt={obj.createdAt}
          />
        ))}
      </div>
    </Paper>
  );
};
