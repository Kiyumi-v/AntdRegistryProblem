# Something wrong with AntdRegistry

## problem description: 

When we use AntdRegistry, set layer to overwrite component style, set custom theme and use both two components Drawer and Popover, we find out Drawer doesn't shown as expected.

We check out styles generate by AntdRegistry in SSR. Drawer's style has been wrapped by "@layer antd@layer antd" which cause this problem.
