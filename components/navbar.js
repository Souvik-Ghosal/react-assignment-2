import React from 'react';
import './styles.css';
import {
  Apps,
  CameraAltOutlined,
  HelpOutline,
  Menu,
  PersonAddOutlined,
  Search,
  Settings,
} from '@material-ui/icons';
import { Avatar, Badge, Button, makeStyles, Popover } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className="home__header">
      <div className="home__left">
        <Menu className="home__menuIcon" />

        <img
          className="home__logo"
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png"
          alt="Gmail"
        />
      </div>

      <div className="home__center">
        <Search />
        <input className="home__input" placeholder="Search Mail" />
      </div>

      <div className="home__right">
        <HelpOutline />
        <Settings />
        <Apps />
        <div>
          <Avatar />
          <Popover>
            <div className="home__popoverContainer">
              <div className="home__popover__top">
                <Badge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  badgeContent={
                    <div className="home__badge">
                      <CameraAltOutlined className="home__camera" />
                    </div>
                  }
                >
                  <Avatar className={classes.large} />
                </Badge>
                <div className="home__text"></div>
                <div className="home__btn">Manage your google account</div>
              </div>

              <div className="home__popover__btm">
                <div className="home__addBtn">
                  <PersonAddOutlined className="home__addIcon" />
                  <p>Add another account</p>
                </div>

                <Button variant="outlined" className="home__signOut">
                  Sign Out
                </Button>

                <div className="home__popover__footer">
                  <p>Privacy Policy</p>
                  <span>•</span>
                  <p>Terms of service</p>
                </div>
              </div>
            </div>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Header;
