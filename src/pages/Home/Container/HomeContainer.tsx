import React, { useEffect } from 'react';
import Home from '../Home';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { fetchData } from '../../../store/authSlice';
const HomeContainer = () => {
    const dispatch: AppDispatch = useDispatch();
    const { data, loading, error } = useSelector((state: RootState) => state.getAuth);
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch])
    return (
        <Home

        />
    );
};

export default HomeContainer;