import React from "react";
import { Card, Button, Typography } from "antd";

const { Title } = Typography;

const TeaCard = ({
  teaName,
  teaType,
  country,
  drinkWithMilk,
  price,
  id,
  addItem
}) => (
  <Card title={teaName}>
    <p>Tipo de Chá: {teaType}</p>
    <p>País: {country}</p>
    {drinkWithMilk === "true" ? (
      <p>Tomável com leite</p>
    ) : (
      <p>Não tomável com leite</p>
    )}
    <Title level={2}>R${price}</Title>
    <Button type="primary" onClick={() => addItem(id)} block>
      Adicionar
    </Button>
  </Card>
);

export default TeaCard;
