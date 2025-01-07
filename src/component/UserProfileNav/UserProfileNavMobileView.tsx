import { FC, useState } from "react";
import {
  NavBarContainer,
  NavBarHeaderTitle,
  PrimaryHeaderButtonStyle,
  primaryTypographyHeaderMobileStyle,
  textStyleListItemText,
  ListNavItemContainer,
  ListItemButtonStyle,
  primaryTypographyStyleMobile,
} from "../../assets/styles/UserProfileNav/UserProfileNavStyles";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import UserInformationDataForNavBar from "../../assets/config/developer_data/customizedev";
import {
  ListItemButton,
  ListItemText,
  IconButton,
  Drawer,
} from "@mui/material";
import TerminalIcon from "@mui/icons-material/Terminal";
import CloseIcon from "@mui/icons-material/Close";

const UserProfileNavMobileView: FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const {
    developer_username,
    navbar_home,
    navbar_about,
    navbar_contact,
    navbar_terminal,
    navbar_experience,
    navbar_projects,
    navbar_blogs,
    navbar_youtube
  } = UserInformationDataForNavBar;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <NavBarContainer>
      <IconButton aria-label="menu-icon" onClick={toggleMenu}>
        <MenuOpenIcon sx={{ fontSize: "1.3em" }} />
      </IconButton>

      <NavBarHeaderTitle>
        <ListItemButton sx={PrimaryHeaderButtonStyle}>
          <ListItemText
            primary={developer_username}
            primaryTypographyProps={primaryTypographyHeaderMobileStyle}
            sx={textStyleListItemText}
          ></ListItemText>
        </ListItemButton>
      </NavBarHeaderTitle>

      <IconButton aria-label="terminal-icon">
        <TerminalIcon sx={{ fontSize: "1.3em" }} onClick={() => scrollToSection("terminal")} />
      </IconButton>

      <Drawer anchor="top" open={menuOpen} onClose={toggleMenu}>
        <IconButton
          aria-label="close-menu-icon"
          onClick={closeMenu}
          sx={{
            "&:hover": {
              background: "transparent",
            },
          }}
        >
          <CloseIcon sx={{ fontSize: "2em" }} />
        </IconButton>
        <ListNavItemContainer types="block" sx={{ padding: "1em 0" }}>
          <ListItemButton sx={ListItemButtonStyle} onClick={() => scrollToSection("/")}>
            <ListItemText
              primary={navbar_home}
              primaryTypographyProps={primaryTypographyStyleMobile}
              sx={textStyleListItemText}
            ></ListItemText>
          </ListItemButton>

          <ListItemButton sx={ListItemButtonStyle}>
            <ListItemText
              primary={navbar_about}
              primaryTypographyProps={primaryTypographyStyleMobile}
              sx={textStyleListItemText}
              onClick={() => scrollToSection("about")}
            ></ListItemText>
          </ListItemButton>
          <ListItemButton
            sx={ListItemButtonStyle}
            onClick={() => window.open("https://blog.nishantbanjade.com.np", "_blank")}
          >
            <ListItemText
              primary={navbar_blogs}
              primaryTypographyProps={primaryTypographyStyleMobile}
              sx={textStyleListItemText}
            />
          </ListItemButton>
          <ListItemButton sx={ListItemButtonStyle} onClick={() => scrollToSection("contact")}>
            <ListItemText
              primary={navbar_contact}
              primaryTypographyProps={primaryTypographyStyleMobile}
              sx={textStyleListItemText}
            ></ListItemText>
          </ListItemButton>

          <ListItemButton sx={ListItemButtonStyle} onClick={() => scrollToSection("experience")}>
            <ListItemText
              primary={navbar_experience}
              primaryTypographyProps={primaryTypographyStyleMobile}
              sx={textStyleListItemText}
            ></ListItemText>
          </ListItemButton>
          <ListItemButton sx={ListItemButtonStyle} onClick={() => scrollToSection("projects")}>
            <ListItemText
              primary={navbar_projects}
              primaryTypographyProps={primaryTypographyStyleMobile}
              sx={textStyleListItemText}
            ></ListItemText>
          </ListItemButton>
          <ListItemButton sx={ListItemButtonStyle} onClick={() => scrollToSection("terminal")}>
            <ListItemText
              primary={navbar_terminal}
              primaryTypographyProps={primaryTypographyStyleMobile}
              sx={textStyleListItemText}
            ></ListItemText>
          </ListItemButton>
          
          <ListItemButton
            sx={ListItemButtonStyle}
            onClick={() => window.open("https://www.github.com/nixhantb", "_blank")}
          >
            <ListItemText
              primary="Github"
              primaryTypographyProps={primaryTypographyStyleMobile}
              sx={textStyleListItemText}
            />
          </ListItemButton>
          <ListItemButton
            sx={ListItemButtonStyle}
            onClick={() => window.open("https://youtube.com/@codelogs_nishant?si=yiFptd1Wp8Bh2VSC", "_blank")}
          >
            <ListItemText
              primary={navbar_youtube}
              primaryTypographyProps={primaryTypographyStyleMobile}
              sx={textStyleListItemText}
            />
          </ListItemButton>
          
        </ListNavItemContainer>
      </Drawer>
    </NavBarContainer>
  );
};

export default UserProfileNavMobileView;
