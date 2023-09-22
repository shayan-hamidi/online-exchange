import {
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeIcon from "@mui/icons-material/Home";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import RoundaboutLeftOutlinedIcon from "@mui/icons-material/RoundaboutLeftOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import logo from "../../assets/images/logo.png";

export default function Nav() {
  const initialRoutesList = [
    { name: "خانه", route: "/", routeIcon: <HomeIcon /> },
    {
      name: "سوالات متداول",
      route: "/questions",
      routeIcon: <QuestionAnswerIcon />,
    },
    {
      name: "مزایا",
      route: "/benefits",
      routeIcon: <ThumbUpAltOutlinedIcon />,
    },
    // { name: "مجله", route: "/magezine" , routeIcon: <AutoStoriesOutlinedIcon /> },
    {
      name: "درباره ما",
      route: "/aboutUs",
      routeIcon: <RoundaboutLeftOutlinedIcon />,
    },
    {
      name: "تماس با ما",
      route: "/contactUs",
      routeIcon: <PermContactCalendarOutlinedIcon />,
    },
    { name: "آکادمی", route: "/academy", routeIcon: <SchoolOutlinedIcon /> },
  ];
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
    setOpen(false);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250, background: "#f0f9ff", height: "100vh" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
    >
      <List>
        {initialRoutesList.map((item, index) => (
          <>
            <ListItem
              sx={{
                svg: {
                  color: "#1D5D9B",
                },
              }}
              key={item.route}
              disablePadding
            >
              <ListItemButton display={"flex"} justifyContent="center">
                <ListItemIcon>{item.routeIcon}</ListItemIcon>
                <ListItemText
                  onClick={() => navigate(item.route)}
                  primary={item.name}
                  sx={{
                    fontWeight: "bold",
                  }}
                />
              </ListItemButton>
            </ListItem>
            {Number(index) !== initialRoutesList.length - 1 ? <Divider /> : ""}
          </>
        ))}
      </List>
      <Box
        position={"absolute"}
        bottom={0}
        left={0}
        right={0}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ minHeight: "50px" }}
      >
        <Typography variant="caption" textAlign={"center"}>
          <copy>کلیه حقوق این سایت متعلق به ارزینو است</copy>
          <Grid
            item
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
          >
            <img src={logo} alt="arzino logo" width={50} height={30} />
          </Grid>
        </Typography>
      </Box>
    </Box>
  );
  return (
    <Grid container>
      <Grid
        item
        sx={{
          height: "70px",
          background: "#FAF0D7",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 7, lg: 9 },
          margin: "0 auto",
          borderRadius: "0px 0px 60px 60px",
          display: { xs: "none", md: "flex" },
        }}
        xs={8}
      >
        {initialRoutesList.map((item) => {
          return (
            <Link className="nav-link" to={item.route} key={item.route}>
              {item.name}
            </Link>
          );
        })}
      </Grid>
      <Grid
        item
        sx={{
          display: { xs: "block", md: "none" },
          background: "#FAF0D7",
        }}
        xs={12}
        py={2}
        px={4}
      >
        <Grid
          container
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Grid item>
            <Button
              onClick={() => setOpen(true)}
              sx={{
                padding: "4px 0px !important",
              }}
            >
              <MenuOutlinedIcon />
            </Button>
            <SwipeableDrawer
              anchor={"right"}
              open={open}
              onClose={toggleDrawer("right", false)}
              onOpen={toggleDrawer("right", true)}
              sx={{ display: { md: "none" } }}
            >
              {list("right")}
            </SwipeableDrawer>
          </Grid>
          <Grid item>
            <Typography>ARZINO</Typography>
          </Grid>
          <Grid
            item
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
          >
            <img src={logo} alt="arzino logo" width={50} height={30} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
