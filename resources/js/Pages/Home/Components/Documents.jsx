import React from 'react'
import { Card, FolderTree } from '../../../Components'

export default function Documents({documents, ...props}) {
  return (
    <div style={{ flexGrow: 4 }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',  justifyContent: "space-between" }}>
        <h2 className='card-header'>Recent Documents</h2>
        <a href="#" className='hyperlink'>View All Documents</a>
      </div>
      <Card style={{ height: "433px", padding: '32px 24px' }}>
        <FolderTree documents={documents}/>
      </Card>
    </div>
  )
}
