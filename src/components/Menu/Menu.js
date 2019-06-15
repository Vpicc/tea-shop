import React from "react";
import { Menu as AntMenu } from "antd";

const Menu = ({ currentFilter, setFilter }) => (
  <AntMenu selectedKeys={currentFilter} onClick={setFilter}>
    <AntMenu.Item key="ALL">Todos os Chás</AntMenu.Item>
    <AntMenu.Item key="AWAKE">Manter-se acordado</AntMenu.Item>
    <AntMenu.Item key="DIGESTION">Ajudar na digestão</AntMenu.Item>
    <AntMenu.Item key="MEDICINAL">Uso medicinal</AntMenu.Item>
    <AntMenu.Item key="MEALS">Acompanhar refeições</AntMenu.Item>
    <AntMenu.Item key="MILK">Tomar com leite</AntMenu.Item>
  </AntMenu>
);

export default Menu;
