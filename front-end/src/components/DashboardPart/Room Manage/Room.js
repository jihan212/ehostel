import React from 'react';
import { useParams } from 'react-router-dom';
import { DashboardFakeData } from '../../../DashboardFakeData';
import DataInputAndList from '../DataInputAndList/DataInputAndList';

const Room = () => {
    const {route}=useParams();
    const AllData=DashboardFakeData[route]
   console.log(AllData)
    return (
        <div>
            <DataInputAndList  AllData={AllData}></DataInputAndList>
        </div>
    );
};

export default Room;