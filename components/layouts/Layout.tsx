import { FC } from "react";
import Head from "next/head";

import { Box } from "@mui/material";


interface Props {
    title?: string;
    children: JSX.Element;
}

export const Layout: FC <Props> = ({ title= "Open Jira", children }) => {
    return (
        <Box sx={{ flexFlow: 1 }}>
            <Head>
                <title>{ title }</title>
            </Head>

            {/* Navbar */}
            {/* Sidebar */}

            <Box sx={{ padding: '10px 20px' }}>
                { children }
            </Box>
        </Box>
    )
}