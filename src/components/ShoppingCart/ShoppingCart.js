import React, { Component } from "react";
import { Card, Table, InputNumber, Icon, Button } from "antd";

class ShoppingCart extends Component {
  render() {
    const { cartList, teaList } = this.props;
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
              dataSource={[
                {
                  key: "1",
                  name: "White Peone",
                  quantity: (
                    <InputNumber min={1} max={10} defaultValue={1} min={1} />
                  ),
                  priceUnit: "R$10.00",
                  priceTotal: "R$10.00",
                  remove: <Icon type="delete" theme="filled" />
                }
              ]}
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
