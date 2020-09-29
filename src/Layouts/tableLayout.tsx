import React from 'react';
import { Layout, Sidebar } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useSidebarStyles = makeStyles({
  drawerPaper: {
    backgroundColor: '#181B1E'
  }
});

const MySidebar = (props: any) => {
  const classes = useSidebarStyles();
  return <Sidebar classes={classes} {...props} />;
};

const MyLayout = (props: any) => <Layout {...props} sidebar={MySidebar} />;

export default MyLayout;
