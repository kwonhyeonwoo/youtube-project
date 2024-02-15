import React, { useEffect } from 'react';
import Home from '../Home';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { fetchData } from '../../../store/authSlice';
const HomeContainer = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: RootState) => state.api);

    console.log('data', data)
    return (
        <Home />
    );
};

export default HomeContainer;