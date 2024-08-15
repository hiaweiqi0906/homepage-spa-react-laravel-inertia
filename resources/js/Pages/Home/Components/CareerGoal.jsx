import React from 'react'
import { Card, ProgressCircle } from '../../../Components'
import './index.css'

export default function CareerGoal({careerGoal, ...props}) {
  return (
    <div style={{ flexGrow: 1 }}>
      <h2 className='card-header'>Career Goal</h2>
      <Card style={{ height: "433px", textAlign: "center", padding: '32px 40px' }}>
        <p className='career-goal-subheader'>Your Progress</p>
        <ProgressCircle percentage={careerGoal.progress}/>
        <p className='career-goal-description'>I want to become a </p>
        <p className='card-header'>{careerGoal.name}</p>
        <a href="#" className='hyperlink'>View Insights</a>
      </Card>
    </div>
  )
}
