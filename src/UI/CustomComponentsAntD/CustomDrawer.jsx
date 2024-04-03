import React from "react"
import { Drawer } from "antd"

const CustomDrawer = ({
  title,
  width = 580,
  isOpenDrawer,
  onClose,
  className,
  headerStyle,
  bodyStyle,
  extra,
  placement = "right",
  children,
  closeIcon,
  footer = null,
}) => (
  <Drawer
    title={title}
    extra={extra}
    width={width}
    footer={footer}
    onClose={onClose}
    open={isOpenDrawer}
    className={className}
    placement={placement}
    closeIcon={closeIcon}
  >
    {children}
  </Drawer>
)

export default CustomDrawer
