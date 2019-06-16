import React from "react";
import { Col } from "antd";
import TeaCard from "../TeaCard/TeaCard";

const TeaCardList = ({ teaList, currentFilter, addItem }) => {
  const filteredTeas = teaList.filter(tea => {
    switch (currentFilter) {
      case "AWAKE":
        return tea.type === "black tea";
      case "DIGESTION":
        return tea.type === "green tea";
      case "MEDICINAL":
        return tea.type === "white tea" || tea.type === "oolong tea";
      case "MEALS":
        return tea.type === "chai";
      case "MILK":
        return tea.drink_with_milk === "true";
      default:
        return true;
    }
  });
  return filteredTeas.map(tea => (
    <Col span={8} key={tea.id}>
      <TeaCard
        teaName={tea.name}
        teaType={tea.type}
        country={tea.made_in}
        drinkWithMilk={tea.drink_with_milk}
        price={tea.price}
        id={tea.id}
        addItem={addItem}
        quantity={tea.stock_quantity}
      />
    </Col>
  ));
};

export default TeaCardList;
