import React from 'react'
import { MenuIcon, DocumentItemIcon } from '@images'
import './index.css'

export default function FolderList({ documents, typeOfUser, ...props }) {
  return (
    <div>
      <table width={'100%'}>
        <tr>
          <th width={typeOfUser === "managed"? "60%" : "75%"}>Document Name</th>
          <th width={typeOfUser === "managed"? "25%" : "20%"}>Received On</th>
          <th width="15%"> </th>
        </tr>
        {documents?.map(document => (
          <tr>
            <td><div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}><img src={DocumentItemIcon} alt="" style={{ width: '18px !important', height: '18px', color: 'black' }} /> {document.document_name}</div></td>
            <td >{
              new Intl.DateTimeFormat('en-US', { day: '2-digit', month: 'short', year: 'numeric' })
                .format(new Date(document.received_on ?? document.updated_at))}
            </td>
            <td><img src={MenuIcon} alt="" style={{ width: '18px !important', height: '18px' }} /></td>
          </tr>
        ))}

      </table>
    </div>
  )
}
