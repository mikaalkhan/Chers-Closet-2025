
import React, { useState } from "react";
// import { Header, Title } from "antd";
import { Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";

function MyHeader() {
    return (
        <Header style={{ background: "#ffffff", padding: "0 20px" }}>
                <Title level={3} style={{ color: "black", lineHeight: "64px", margin: 0 }}>
                  Cher's Closet
                </Title>
        </Header>
    )
}


export default MyHeader;