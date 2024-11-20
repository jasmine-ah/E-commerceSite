import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Dashboard, Inventory, People, BarChart } from "@mui/icons-material";

const Sidebar = ({ activeTab, setActiveTab }) => (
  <>
  <List >
    <ListItem style={{transition: 'background-color 0.3s ease',}} className="hover:bg-[#d6dbe4] hover:text-[#e5e7eb]" button onClick={() => setActiveTab('products')}>
      <ListItemIcon style={{ color: '#9ca3af' }}><Dashboard /></ListItemIcon>
      <ListItemText primary="Products" />
    </ListItem>
    <ListItem style={{transition: 'background-color 0.3s ease',}} className="hover:bg-[#d6dbe4] hover:text-[#e5e7eb]" button onClick={() => setActiveTab('orders')}>
      <ListItemIcon style={{ color: '#9ca3af' }}><Inventory /></ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    <ListItem style={{transition: 'background-color 0.3s ease',}} className="hover:bg-[#d6dbe4] hover:text-[#e5e7eb]" button onClick={() => setActiveTab('users')}>
      <ListItemIcon style={{ color: '#9ca3af' }}><People /></ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>
    <ListItem style={{transition: 'background-color 0.3s ease',}} className="hover:bg-[#d6dbe4] hover:text-[#e5e7eb]" button onClick={() => setActiveTab('reports')}>
      <ListItemIcon style={{ color: '#9ca3af' }}><BarChart /></ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
  </List>
</>
);

export default Sidebar;
