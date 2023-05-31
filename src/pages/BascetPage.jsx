import { OrderForm } from "components/orderForm/OrderForm";
import { OrderList } from "components/orderList/OrderList";
import styled from "@emotion/styled";
const BascetPage = () => {
    const Container = styled.div`
    display: flex;
    align-items: flex-start;`
    return <Container><OrderForm />
        <OrderList />
    </Container>
}

export default BascetPage;