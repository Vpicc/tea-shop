import React, { Component } from "react";
import { Card, Table, InputNumber, Icon, Button } from "antd";

class ShoppingCart extends Component {
  render() {
    const { cartList, teaList, removeFromCart, changeQuantity } = this.props;

    let dataSource = [];
    for (let key in cartList) {
      if (cartList.hasOwnProperty(key)) {
        let element = {};

        element.key = key.toString();
        element.name = teaList[key].name;
        element.quantity = (
          <InputNumber
            value={cartList[key]}
            defaultValue={1}
            onChange={quantity => changeQuantity(quantity, key)}
            min={1}
            max={Number(teaList[key].stock_quantity)}
          />
        );
        element.priceUnit = `R$${teaList[key].price}`;
        element.priceTotal = `R$${teaList[key].price * cartList[key]}`;
        element.remove = (
          <Button icon="delete" onClick={() => removeFromCart(key)} />
        );
        dataSource.push(element);
      }
    }

    return (
      <Card title="Carrinho">
        {cartList.length === 0 ? (
          <p>Não há items no Carrinho.</p>
        ) : (
          <>
            <Table
              columns={[
                { title: "Nome do Chá", dataIndex: "name", key: "name" },
                {
                  title: "Quantidade",
                  dataIndex: "quantity",
                  key: "quantity"
                },
                {
                  title: "Preço unitário",
                  dataIndex: "priceUnit",
                  key: "priceUnit"
                },
                {
                  title: "Preço Total",
                  dataIndex: "priceTotal",
                  key: "priceTotal"
                },
                { title: "", dataIndex: "remove", key: "remove" }
              ]}
              dataSource={dataSource}
              bordered
              pagination={false}
            />
            <Button type="primary" block>
              Comprar
            </Button>
          </>
        )}
      </Card>
    );
  }
}

export default ShoppingCart;
