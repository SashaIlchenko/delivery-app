import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Header } from './components/header/Header';
import { Suspense } from 'react';
import { Container } from './components/App.styled';

export const Layout = () => {
    return (
        <>
            <Header />
            <Container >
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
                <Toaster position="top-right" reverseOrder={false} />
            </Container ></>
    );
};