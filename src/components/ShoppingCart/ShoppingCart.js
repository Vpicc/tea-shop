import React, { Component } from "react";
import { Card, Table, InputNumber, Button, Typography } from "antd";

const { Title } = Typography;

class ShoppingCart extends Component {
  calculateTotalPrice(dataSource) {
    let total = 0;
    for (let element in dataSource) {
      total += parseFloat(element.priceTotal);
    }
    return total;
  }
  render() {
    const { cartList, teaList, removeFromCart, changeQuantity } = this.props;

    let dataSource = [];
    let total = 0;
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
        let teaTotalPrice = (teaList[key].price * cartList[key]).toFixed(2);
        element.priceTotal = `R$${teaTotalPrice}`;
        total += parseFloat(teaTotalPrice);
        element.remove = (
          <Button icon="delete" onClick={() => removeFromCart(key)} />
        );
        dataSource.push(element);
      }
    }

    return (
      <Card title="Carrinho">
        {!cartList || Object.keys(cartList).length === 0 ? (
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
            <Title level={3}>Valor Total: R${total.toFixed(2)}</Title>
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
