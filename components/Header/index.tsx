import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/static/img/logo.svg";

import {
  Paper,
  Button,
  IconButton,
  Avatar,
  DialogActions,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  useMediaQuery,
  useTheme,
  Typography,
} from "@material-ui/core";
import {
  SearchOutlined as SearchIcon,
  CreateOutlined as PenIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  ExpandMoreOutlined as ArrowBottom,
  NotificationsNoneOutlined as NotificationIcon,
  AccountCircleOutlined,
} from "@material-ui/icons";

import styles from "./Header.module.scss";
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
        <Link href="/">
          <a>
            <Image height={35} className="mr-20" src={logo} alt="Logo" />
          </a>
        </Link>

        <div className={styles.searchBlock}>
          <SearchIcon />
          <input placeholder="Поиск" />
        </div>

        <Link href="/write">
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

        {/*<Link href="/profile/1">*/}
        {/*  <a className="d-flex align-center">*/}
        {/*    <Avatar*/}
        {/*      className={styles.avatar}*/}
        {/*      alt="Remy Sharp"*/}
        {/*      src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"*/}
        {/*    />*/}
        {/*    <ArrowBottom />*/}
        {/*  </a>*/}
        {/*</Link>*/}

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
