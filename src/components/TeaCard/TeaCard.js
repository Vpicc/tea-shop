import React from "react";
import { Card, Button, Typography } from "antd";
import map from "../../img/map.png";
import teaCup from "../../img/teaCup.png";
import milk from "../../img/milk.png";
import crossed from "../../img/crossed.png";

const { Title } = Typography;

const imgStyle = { width: 24 };

const TeaCard = ({
  teaName,
  teaType,
  country,
  drinkWithMilk,
  price,
  id,
  quantity,
  addItem
}) => (
  <Card title={teaName}>
    <p>
      <img src={teaCup} alt="Chá" style={imgStyle} /> {teaType}
    </p>
    <p>
      <img src={map} alt="País" style={imgStyle} /> {country}
    </p>
    {drinkWithMilk === "true" ? (
      <p>
        <img src={milk} alt="Leite" style={imgStyle} />
        Opção com leite
      </p>
    ) : (
      <p>
        <img src={crossed} alt="X" style={imgStyle} /> Sem opção com leite
      </p>
    )}
    <p>Quantidade em Estoque: {quantity}</p>
    <Title level={2}>R${price}</Title>
    <Button
      type="primary"
      onClick={() => addItem(id)}
      block
      disabled={quantity === "0"}
    >
      Adicionar
    </Button>
  </Card>
);

export default TeaCard;
