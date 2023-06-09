import React, { useState } from 'react'
import Swal from 'sweetalert2';
import Header from './Header';
import HeaderS from './HeaderS';

import List from './List';
import Sent from './sent';
import Create from './Create';
import Approve from './Approve';

import { facultyData } from '../../data';

function Dashboard(){

    const [faculty, setFaculty] = useState(facultyData);
    const [isCreating, setIsCreating] = useState(false);
    const [isSent, setIsSent] = useState(false);

    return (
        <div className='container'>
        {/* List */}
           {!isCreating && (
            <>
                <Header setIsCreating={setIsCreating} />
                <List faculty={faculty} />
            </>
           )}
               {!isCreating && (
            <>
                <HeaderS setIsCreating={setIsCreating} />
                <Sent />
            </>
           )}

        {/* Create */}
           {isCreating && (
            <Create faculty={faculty} setFaculty={setFaculty} setIsCreating={setIsCreating} />
           )} 
        </div>
    )
}

export default Dashboard;