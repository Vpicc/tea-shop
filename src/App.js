import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { fetchTeas, postOrder } from "./api/Api";
import mock from "./test/mock.json";
import {
  Icon,
  Card,
  Button,
  InputNumber,
  Table,
  Form,
  Input,
  Row,
  Col
} from "antd";
import "antd/dist/antd.css";
import Menu from "./components/Menu/Menu";
import TeaCard from "./components/TeaCard/TeaCard";
import TeaCardList from "./components/TeaCardList/TeaCardList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      shoppingCart: { id: null, quantity: null },
      filter: "ALL",
      teaList: null
    };
  }

  componentWillMount() {
    this.setState({ teaList: mock });
    /*fetchTeas((list) => {console.log(list)});
    postOrder(`{\n\t"client": {\n\t\t"name": "Eduardo",\n\t\t
    "email": "eduardo@service.com",\n\t\t
    "country": "Brazil"\n\t},\n\t
    "teas": [\n\t\t{\n\t\t\t"id": 1,\n\t\t\t"quantity": 2\n\t\t},\n\t\t{\n\t\t\t"
    id": 4,\n\t\t\t"quantity": 3\n\t\t}\n\t]\n}`,(response) => {console.log(response)});*/
  }

  setFilter = e => {
    this.setState({
      filter: e.key
    });
  };
  render() {
    const { filter, teaList } = this.state;
    return (
      <div className="App">
        <Header />
        <Row gutter={48}>
          <Col span={3}>
            <Menu currentFilter={filter} setFilter={this.setFilter} />
          </Col>

          <Col span={13}>
            <Row gutter={48}>
              <TeaCardList teaList={teaList} currentFilter={filter} />
            </Row>
          </Col>

          <Col span={8}>
            <Card title="Carrinho">
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
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
/*
<Switch>
<Route exact path="/"> <Home /> </Route>
<Route path="/all-teas"> <AllTeas teaList={this.fetchResult} /> </Route>
<Route path="/recommended"> <Recommended /> </Route>
<Route path="/shopping-cart"> <ShoppingCart /> </Route>
</Switch>
*/
export default App;
