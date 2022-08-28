import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts'];

export const Sidebar = () => {
    return (
        <Drawer anchor="left" open={ true } onClose={ ()=> console.log('cerrando') }>
            <Box sx={{ width: 250 }}>
                <Box sx={{ padding: '5px 10px'}}>
                    <Typography variant="h4">Menú</Typography>
                </Box>
                <List>
                    {
                        menuItems.map((item, idx) => (
                            <ListItem button key={ idx }>
                                <ListItemIcon>
                                    { idx % 2 ?  <InboxIcon /> : <MailIcon /> }
                                </ListItemIcon>
                                <ListItemText primary={ item } />
                            </ListItem>
                        ))
                    }
                </List>
                <Divider />
                <List>
                    {
                        menuItems.map((item, idx) => (
                            <ListItem button key={ idx }>
                                <ListItemIcon>
                                    { idx % 2 ?  <InboxIcon /> : <MailIcon /> }
                                </ListItemIcon>
                                <ListItemText primary={ item } />
                            </ListItem>
                        ))
                    }
                </List>
            </Box>
        </Drawer>
    )
}