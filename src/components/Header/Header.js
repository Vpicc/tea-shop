import React from "react";
import { Typography } from "antd";
import logo from "../../img/logo.png";

const { Title } = Typography;

const Header = () => (
  <header>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img src={logo} alt="Logo" />
      <Title style={{ marginTop: 20 }}>Tea Shop</Title>
    </div>
  </header>
);

export default Header;
