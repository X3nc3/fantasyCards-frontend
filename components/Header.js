import styles from "../styles/Header.module.css";
import SignupModal from "./modals/SignupModal.js";
import SigninModal from "./modals/SigninModal.js";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { logout } from "../reducers/users.js";
import { Modal } from 'antd';
import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';

function Header() {
  const [signupVisible, setSignupVisible] = useState(false);
  const [signinVisible, setSigninVisible] = useState(false);
  const isConnected = useSelector((state) => state.users.value.token);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSignup = () => {
    setSignupVisible(true)
  }

  const handleSignin = () => {
    setSigninVisible(true)
  }

  const handleCancelSignUp = () => {
    setSignupVisible(false);
  };

  const handleCancelSignIn = () => {
    setSigninVisible(false);
  };

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleMatchNotStarted = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    router.push("/gameNotStarted")
    setOpen(false);
  };

  const handleMatchFinished = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    router.push("/gameFinished")
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  function handleClickAway() {
    setOpen(false)
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const navItems = () => {
    if (isConnected) {
      return (
        <div className={styles.navItems}>
          <Stack direction="row" spacing={2}>
            <div>
              <Button
                style={{ fontFamily: "Bangers", fontSize: 24, color: "#f2aa4c", backgroundColor: "white", padding: 4, paddingRight: 20, marginRight: 20 }}
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
              >
                Games
              </Button>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === 'bottom-start' ? 'left top' : 'left bottom',
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClickAway}>
                        <MenuList
                          autoFocusItem={open}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem onClick={handleMatchNotStarted}>Match not started</MenuItem>
                          <MenuItem onClick={handleMatchFinished}>Match Finished</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          </Stack>
          <button onClick={() => {
            router.push("/market");
          }} className={styles.item} >Market</button>
          <button
            className={styles.item}
            onClick={() => {
              router.push("/inventory");
            }}
          >
            Inventory
          </button>
          <button
            className={styles.item}
            onClick={() => {
              router.push("/");
              dispatch(logout());
            }}
          >
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <div className={styles.navItems}>
          <button
            onClick={() => {
              handleSignup();
            }}
            className={styles.item}
            id="signup_button"
          >
            Sign up
          </button>
          <button
            onClick={() => {
              handleSignin();
            }}
            className={styles.item}
            id="signin_button"
          >
            Sign in
          </button>
        </div>
      );
    }
  };

  return (
    <div>
      <main className={styles.headerContainer}>
        <img
          className={styles.headerLogo}
          src="./images/headerLogo.svg"
          alt="fantasyCard"
          onClick={() => {
            router.push("/home");
          }}
        />
        {navItems()}
      </main>
      <Modal width={300} centered={true} onCancel={() => handleCancelSignUp()} visible={signupVisible} footer={null}>
        <SignupModal />
      </Modal>
      <Modal width={300} centered={true} onCancel={() => handleCancelSignIn()} visible={signinVisible} footer={null}>
        <SigninModal />
      </Modal>
    </div>
  );
}

export default Header;
