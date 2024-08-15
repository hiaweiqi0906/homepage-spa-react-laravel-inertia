import React, { useEffect } from 'react'
import { Sidebar, Card, FolderTree, Welcome, Topbar } from '../../Components'
import './index.css'
import { usePage } from '@inertiajs/react';
import CareerGoal from './Components/CareerGoal';
import Documents from './Components/Documents';

export default function Home() {
  const { props } = usePage();
  const { userData, userPersonalData, documentsData, careerGoalData, typeOfUser } = props;

  const renderDashboardContent = () => {
    return (
      typeOfUser === "managed"
        ? <div style={{ display: "flex", flexDirection: "row", marginTop: "3.5rem", gap: "2rem" }}>
          <CareerGoal careerGoal={careerGoalData[0]} />
          <Documents documents={documentsData} />
        </div>
        : <div style={{ display: "flex", flexDirection: "row", marginTop: "3.5rem", gap: "2rem" }}>
          <Documents documents={documentsData} />
        </div>
    )
  }

  return (
    <>
      <Sidebar profile_picture_url={userData.profile_picture_url} />
      <Topbar userPersonalData={userPersonalData} />
      <div className='main container'>
        <Welcome style={{ marginTop: '3rem' }} userPersonalData={userPersonalData} typeOfUser={typeOfUser}/>
        {renderDashboardContent()}
      </div>
    </>
  )
}
