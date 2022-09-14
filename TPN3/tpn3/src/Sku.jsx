import React, { Component } from "react";
class Sku extends Component {
    render() {
        return (
            <p className="sku">S.K.U: {~~(Math.random() * 10000)}000</p>
        )
    }
}
export default Sku