import { Box, Button } from "@mui/material";
import React from "react";
import "./App.css";
import ButtonAppBar from "./AppBar";
import MiniDrawer from "./Drawer";

function App() {
    return (
        <div
            style={{
                position: "absolute",
                bottom: 0,
                top: 0,
                left: 0,
                right: 0,
            }}
        >
            <MiniDrawer />
            {/* <div style={{ height: "5.5%" }}>
                <ButtonAppBar />
            </div>
            <Box
                display={"flex"}
                flexDirection="row"
                style={{ height: "94.5%" }}
            >
                <Box bgcolor={"red"} display="flex" flex={3}>
                    a
                </Box>
                <Box bgcolor={"blue"} display="flex" flex={1}>
                    b
                </Box>
            </Box> */}
        </div>
    );
}

export default App;
