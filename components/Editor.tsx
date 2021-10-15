import React, { useEffect } from "react";
import EditorJS from "@editorjs/editorjs";

export const Editor: React.FC = (props) => {
  useEffect(() => {
    const editor = new EditorJS({
      holder: "editor",
      placeholder: "Введите текст вашей статьи",
    });
    return () => {
      editor.isReady.then(() => {
        editor.destroy();
      });
    };
  }, []);

  return <div id={"editor"}></div>;
};
