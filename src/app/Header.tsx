'use client';

import {useState} from "react";
import {Button, Drawer, Popover} from "antd";

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

export const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Popover content={content} title="Title">
        <Button type="primary">Hover me</Button>
      </Popover>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
}