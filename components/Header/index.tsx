import React from "react";
import Link from "next/link";
import logo from "/public/static/img/logo.svg";
import styles from "./Header.module.scss";

import { Paper, Button, IconButton } from "@material-ui/core";
import {
  SearchOutlined as SearchIcon,
  CreateOutlined as PenIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  ExpandMoreOutlined as ArrowBottom,
  NotificationsNoneOutlined as NotificationIcon,
  AccountCircleOutlined,
} from "@material-ui/icons";

import { AuthDialog } from "../AuthDialog";

export const Header: React.FC = () => {
  const [authVisible, setAuthVisible] = React.useState(false);

  const openAuthDialog = () => {
    setAuthVisible(true);
  };

  const closeAuthDialog = () => {
    setAuthVisible(false);
  };

  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link href="/" as={`/`}>
          <a>
            <img
              height={35}
              className="mr-20"
              src={"/static/img/logo.svg"}
              alt="Logo"
            />
          </a>
        </Link>

        <div className={styles.searchBlock}>
          <SearchIcon />
          <input placeholder="Поиск" />
        </div>

        <Link href="/write" as={`/write`}>
          <Button variant="contained" className={styles.penButton}>
            Новая запись
          </Button>
        </Link>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>

        <Button className={styles.loginButton} onClick={openAuthDialog}>
          <AccountCircleOutlined />
          <span>Войти</span>
        </Button>
      </div>

      {authVisible && (
        <AuthDialog onClose={closeAuthDialog} open={authVisible} />
      )}
    </Paper>
  );
};
