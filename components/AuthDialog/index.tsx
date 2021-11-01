import React, { useState } from "react";
import styles from "./AuthDialog.module.scss";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import { MainForm } from "./forms/Main";
import { Login } from "./forms/Login";
import { Register } from "./forms/Register";

interface AuthDialogProps {
  open: boolean;
  onClose: () => void;
}

export const AuthDialog: React.FC<AuthDialogProps> = ({ onClose }) => {
  const [formType, setFormType] = useState<"main" | "login" | "register">(
    "main"
  );
  const handleLoginOpen = () => {
    setFormType("login");
  };
  const handleRegisterOpen = () => {
    setFormType("register");
  };
  const handleMainAuth = () => {
    setFormType("main");
  };
  return (
    <Dialog
      open={true}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth="sm"
      fullWidth
    >
      <DialogContent>
        <DialogContentText>
          <div className={styles.content}>
            {formType === "main" && (
              <MainForm handleLoginOpen={handleLoginOpen} />
            )}
            {formType === "login" && (
              <Login
                handleMainAuth={handleMainAuth}
                handleRegisterOpen={handleRegisterOpen}
              />
            )}
            {formType === "register" && (
              <Register
                handleMainAuth={handleMainAuth}
                handleLoginOpen={handleLoginOpen}
              />
            )}
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};
