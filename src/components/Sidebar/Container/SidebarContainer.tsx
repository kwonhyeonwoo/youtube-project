import React from 'react';
import Sidebar from '../Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';

const SidebarContainer = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data } = useSelector((state: RootState) => state.getAuth);
    return (
        <Sidebar data={data} />
    );
};

export default SidebarContainer;