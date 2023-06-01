import { useState } from "react";

import { OrderForm } from "components/orderForm/OrderForm";
import { OrderList } from "components/orderList/OrderList";
import styled from "@emotion/styled";
const BascetPage = () => {

    const [submitData, setSubmitData] = useState([]);
    const onSubmit = (values) => {
        setSubmitData(p => [...p, values]);

    }
    console.log(submitData)
    const Container = styled.div`
    display: flex;
    align-items: flex-start;`
    return <Container>
        <OrderForm onSubmit={onSubmit} />
        <OrderList user={submitData} />
    </Container>
}

export default BascetPage;