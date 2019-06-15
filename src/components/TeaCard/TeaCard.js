import React from "react";
import { Card, Button, Typography } from "antd";

const { Title } = Typography;

const TeaCard = ({ teaName, teaType, country, drinkWithMilk, price }) => (
  <Card title={teaName}>
    <p>Tipo de Chá: {teaType}</p>
    <p>País: {country}</p>
    {drinkWithMilk ? <p>Tomável com leite</p> : null}
    <Title level={2}>R${price}</Title>
    <Button type="primary" block>
      Adicionar
    </Button>
  </Card>
);

export default TeaCard;
