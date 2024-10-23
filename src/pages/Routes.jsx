import React from 'react';
import { useRoutes } from 'react-router-dom';
import NotFound from './NotFound';
import MenuPage from './MenuPage';
import Insert from './Insert';
import Select from './Select';



const Routes = () => {
    const element = useRoutes([
    
        {
            children: [
                {
                    path: '/',
                    element: <MenuPage />
                },
                {
                    path: '/insert',
                    element: <Insert />
                },
                {
                    path: '/select',
                    element: <Select />
                },
                {
                    path: '*',
                    element: <NotFound />
                },
            ]
        }
    ])

    return element
}
export default Routes