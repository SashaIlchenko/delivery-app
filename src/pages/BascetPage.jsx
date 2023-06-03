import { useState, React } from "react";
import { useJsApiLoader } from '@react-google-maps/api';
import { OrderForm } from "components/orderForm/OrderForm";
import { OrderList } from "components/orderList/OrderList";
import { Map } from "components/Map/Map";
import styled from "@emotion/styled";

const libraries = ['places']
const BascetPage = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyC0rfEP1KlALoGk5YnZJ605X7ilr83PEes",
        libraries
    })
    const [submitData, setSubmitData] = useState(null);
    const onSubmit = (values) => {
        setSubmitData(values);

    }
    const Container = styled.div`
    display: flex;
    align-items: flex-start;`
    const Wrapper = styled.div`
    display: flex;
    flex-direction:column;`

    return <Container>
        <OrderList user={submitData} />
        <Wrapper>
            <OrderForm onSubmit={onSubmit} isLoaded={isLoaded} />
            {isLoaded ? <Map /> : <h1>Map is loading...</h1>}</Wrapper>
    </Container>
}

export default BascetPage;