import React, { useEffect } from 'react';
import Header from '../Header';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from '../../../store';
import { fetchData } from '../../../store/authSlice';
const HeaderContainer = () => {
    const dispatch: AppDispatch = useDispatch();
    const { data, loading, error } = useSelector((state: RootState) => state.getAuth);
    useEffect(() => {
        dispatch(fetchData());
    }, [])
    return (
        <Header
            data={data}
        />
    );
};

export default HeaderContainer;