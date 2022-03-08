import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Card, CardActionArea, CardContent, Grid } from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

export default function MiniDrawer() {
    const [open, setOpen] = React.useState(false);
    const [selectedDrawer, setSelectedDrawer] = React.useState(0);
    const numberofTable: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: "flex" }} style={{ height: "100%" }} bgcolor="gray">
            <CssBaseline />

            <Drawer
                variant="permanent"
                open={open}
                onMouseOver={handleDrawerOpen}
                onMouseOut={handleDrawerClose}
            >
                <DrawerHeader>
                    <Typography>147R</Typography>
                </DrawerHeader>
                <Divider />
                <List>
                    {["Inbox", "Starred", "Send email", "Drafts"].map(
                        (text, index) => (
                            <ListItemButton
                                key={text}
                                onClick={() => setSelectedDrawer(index)}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : "auto",
                                        justifyContent: "center",
                                    }}
                                >
                                    {index % 2 === 0 ? (
                                        <InboxIcon />
                                    ) : (
                                        <MailIcon />
                                    )}
                                </ListItemIcon>
                                <ListItemText
                                    primary={text}
                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        )
                    )}
                </List>
                <Divider />
                <List>
                    {["All mail", "Trash", "Spam"].map((text, index) => (
                        <ListItemButton
                            key={text}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText
                                primary={text}
                                sx={{ opacity: open ? 1 : 0 }}
                            />
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>

            {selectedDrawer === 0 ? (
                <Box
                    display={"flex"}
                    flexDirection="column"
                    flex={1}
                    style={{ height: "100%" }}
                >
                    <Typography variant="h4" style={{ height: 80 }}>
                        Resturant
                    </Typography>
                    <Box>
                        <Grid container spacing={3} columns={12} paddingX={6}>
                            {numberofTable.map((tnum) => (
                                <Grid
                                    item
                                    xs={2}
                                    justifyContent="center"
                                    alignItems={"center"}
                                    display={"flex"}
                                    alignSelf={"center"}
                                >
                                    <Card
                                        style={{
                                            width: 200,
                                            height: 200,
                                            backgroundColor:
                                                tnum % 2 === 0
                                                    ? "green"
                                                    : "white",
                                        }}
                                    >
                                        <CardActionArea
                                            onClick={() =>
                                                setSelectedDrawer(tnum)
                                            }
                                            style={{
                                                height: "100%",
                                                justifyContent: "center",
                                                alignContent: "center",
                                                display: "flex",
                                            }}
                                        >
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="body1"
                                                    component="div"
                                                >
                                                    Table {tnum}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            ) : (
                <Box
                    display={"flex"}
                    flexDirection="column"
                    flex={1}
                    style={{ height: "100%" }}
                >
                    <Typography variant="h4">Resturant</Typography>
                    <Box display={"flex"} flexDirection="row" height="100%">
                        <Box display="flex" flex={3}>
                            a
                        </Box>
                        <Box bgcolor={"blue"} display="flex" flex={1}>
                            b
                        </Box>
                    </Box>
                </Box>
            )}
        </Box>
    );
}
