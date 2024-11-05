import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Dashboard, Inventory, People, BarChart } from "@mui/icons-material";

const Sidebar = ({ activeTab, setActiveTab }) => (
  <List>
    <ListItem button onClick={() => setActiveTab('products')}>
      <ListItemIcon><Dashboard /></ListItemIcon>
      <ListItemText primary="Products" />
    </ListItem>
    <ListItem button onClick={() => setActiveTab('orders')}>
      <ListItemIcon><Inventory /></ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    <ListItem button onClick={() => setActiveTab('users')}>
      <ListItemIcon><People /></ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>
    <ListItem button onClick={() => setActiveTab('reports')}>
      <ListItemIcon><BarChart /></ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
  </List>
);

export default Sidebar;
