import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { fetchTeas, postOrder } from "./api/Api";
import mock from "./test/mock.json";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import Menu from "./components/Menu/Menu";
import TeaCardList from "./components/TeaCardList/TeaCardList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cartList: {},
      filter: "ALL",
      teaList: null,
      sendSuccess: null,
      sendingOrder: false
    };
  }

  componentWillMount() {
    /*fetchTeas((list) => {console.log(list)});
    postOrder(`{\n\t"client": {\n\t\t"name": "Eduardo",\n\t\t
    "email": "eduardo@service.com",\n\t\t
    "country": "Brazil"\n\t},\n\t
    "teas": [\n\t\t{\n\t\t\t"id": 1,\n\t\t\t"quantity": 2\n\t\t},\n\t\t{\n\t\t\t"
    id": 4,\n\t\t\t"quantity": 3\n\t\t}\n\t]\n}`,(response) => {console.log(response)});*/
    this.processTeaList(mock);
  }

  processTeaList(list) {
    let teaArray = [];

    for (let i = 0; i < list.length; i++) {
      teaArray[list[i].id] = list[i];
    }

    this.setState({ teaList: teaArray });
  }

  setFilter = e => {
    this.setState({
      filter: e.key
    });
  };

  addToCart = id => {
    const sendSuccess = this.state.sendSuccess;
    const cartList = { ...this.state.cartList };
    const teaList = this.state.teaList;

    if (cartList[id]) {
      if (cartList[id] < teaList[id].stock_quantity) {
        cartList[id]++;
      }
    } else {
      cartList[id] = 1;
    }
    this.setState({ cartList });

    if (sendSuccess === true) {
      this.setState({ sendSuccess: null });
    }
  };

  changeItemQuantity = (quantity, id) => {
    const cartList = { ...this.state.cartList };
    const teaList = this.state.teaList;

    if (cartList[id]) {
      if (quantity > teaList[id].stock_quantity) {
        cartList[id] = teaList[id].stock_quantity;
      } else {
        cartList[id] = quantity;
      }
    }
    this.setState({ cartList });
  };

  removeFromCart = id => {
    const cartList = { ...this.state.cartList };
    delete cartList[id];
    this.setState({ cartList });
  };

  sendCart = client => {
    let infoToSend = { client: {}, teas: [] };
    let cartList = { ...this.state.cartList };

    infoToSend.client = client;

    for (let key in cartList) {
      if (cartList.hasOwnProperty(key)) {
        let teaObject = {};
        teaObject.id = key;
        teaObject.quantity = cartList[key];
        infoToSend.teas.push(teaObject);
      }
    }
    console.log("Order", infoToSend);
    this.setState({ sendingOrder: true });
    postOrder(JSON.stringify(infoToSend), response => {
      if (response.success === true) {
        console.log(response);
        this.setState({ sendSuccess: true });
        cartList = {};
        this.setState({ cartList });
      } else {
        this.setState({ sendSuccess: false });
      }
      this.setState({ sendingOrder: false });
    });
  };

  render() {
    const { filter, teaList, cartList, sendSuccess, sendingOrder } = this.state;
    return (
      <div className="App">
        <Header />
        <Row>
          <Col xs={24} sm={24} md={24} lg={4} xl={3}>
            <Menu currentFilter={filter} setFilter={this.setFilter} />
          </Col>

          <Col xs={24} sm={24} md={24} lg={10} xl={13}>
            <Row gutter={48}>
              <TeaCardList
                teaList={teaList}
                currentFilter={filter}
                addItem={this.addToCart}
              />
            </Row>
          </Col>

          <Col xs={24} sm={24} md={24} lg={10} xl={8}>
            <ShoppingCart
              cartList={cartList}
              teaList={teaList}
              changeQuantity={this.changeItemQuantity}
              removeFromCart={this.removeFromCart}
              sendCart={this.sendCart}
              sendingOrder={sendingOrder}
            />
            {sendSuccess ? (
              <p style={{ color: "green" }}>Pedido enviado! </p>
            ) : null}
            {sendSuccess === false ? (
              <p style={{ color: "red" }}>Falha ao enviar pedido </p>
            ) : null}
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
