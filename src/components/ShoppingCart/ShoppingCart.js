import React, { Component } from "react";
import {
  Card,
  Table,
  InputNumber,
  Button,
  Typography,
  Form,
  Input,
  Select
} from "antd";

const { Option } = Select;

const { Title } = Typography;

class Cart extends Component {
  checkInfoAndSubmit = () => {
    const { sendCart } = this.props;
    this.props.form.validateFields((err, client) => {
      if (!err) {
        sendCart(client);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const {
      cartList,
      teaList,
      removeFromCart,
      changeQuantity,
      sendingOrder
    } = this.props;
    const formItemLayout = {
      labelCol: {
        xs: { span: 4 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 18 },
        sm: { span: 18 }
      }
    };

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
            <Form {...formItemLayout}>
              <Form.Item label={<span>Nome</span>}>
                {getFieldDecorator("name", {
                  rules: [
                    {
                      required: true,
                      message: "É necessário informar o nome do cliente",
                      whitespace: true
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="E-mail">
                {getFieldDecorator("email", {
                  rules: [
                    {
                      type: "email",
                      message: "Este E-mail não é valido!"
                    },
                    {
                      required: true,
                      message: "É necessário informar o E-mail do cliente"
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="País" hasFeedback>
                {getFieldDecorator("country", {
                  rules: [
                    { required: true, message: "É necessário informar o país" }
                  ]
                })(
                  <Select placeholder="Por favor, selecione o país">
                    <Option value="Brazil">Brasil</Option>
                    <Option value="India">India</Option>
                    <Option value="Russia">Rússia</Option>
                    <Option value="United States">Estados Unidos</Option>
                    <Option value="China">China</Option>
                  </Select>
                )}
              </Form.Item>
            </Form>
            <Button
              type="primary"
              onClick={() => this.checkInfoAndSubmit()}
              block
              loading={sendingOrder}
            >
              Enviar Pedido
            </Button>
          </>
        )}
      </Card>
    );
  }
}

const ShoppingCart = Form.create({ name: "Buy" })(Cart);
export default ShoppingCart;
