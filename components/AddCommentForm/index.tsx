import React, { useState } from "react";
import { Button, Input } from "@material-ui/core";
import styles from "./AddCommentForm.module.scss";

interface AddCommentFormProps {}

const AddCommentForm: React.FC<AddCommentFormProps> = () => {
  const [clicked, setClicked] = useState(false);
  const [text, setText] = useState("");

  const onAddComment = () => {
    setClicked(false);
    setText("");
  };

  return (
    <div className={styles.wrapper}>
      <Input
        classes={{ root: styles.fieldRoot }}
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
        minRows={clicked ? 2 : 1}
        placeholder="Написать комментарий..."
        onFocus={() => setClicked(true)}
        fullWidth
        multiline
      />
      {clicked && (
        <div className={styles.formFooter}>
          <div className="formWidgets"></div>
          <Button
            onClick={onAddComment}
            className={styles.addButton}
            variant="contained"
            color="primary"
          >
            Опубликовать
          </Button>
        </div>
      )}
    </div>
  );
};

export default AddCommentForm;
