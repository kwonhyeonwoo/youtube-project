import React, { useEffect } from 'react';
import Profile from '../Profile';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { fetchData } from '../../../store/authSlice';

const ProfileContainer = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data, error, loading } = useSelector((state: RootState) => state.getAuth);
    useEffect(() => {
        dispatch(fetchData());
    }, [])
    return <Profile
        data={data}
        error={error}
        loading={loading}
    />
};

export default ProfileContainer;