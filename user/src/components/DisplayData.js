import React, {useContext} from 'react'
import { multiStepContext } from '../StepContext'
import { TableContainer, TableHead, TableBody, TableCell, TableRow, Table } from '@mui/material';




function DisplayData() {
    const {finalData} = useContext(multiStepContext);
  return (
    <div>
        <div>
          <TableContainer style={{display:'flex', justifyContent:'center'}}>
            <Table border="1" style={{width:'70%', justifyContent:'center'}} size='small' aria-label="caption table">
              <TableHead>
                <TableRow style={{backgroundColor:'burlywood', color:'aliceblue'}}>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Mobile No.</TableCell>               
                  <TableCell>Address</TableCell>
                  <TableCell>City</TableCell>
                  <TableCell>State</TableCell>
                  <TableCell>Zip</TableCell>
                  <TableCell>Country</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {finalData.map((data) => (
                  <TableRow key={data.email}>
                    <TableCell>{data.firstName + " " + data.lastName}</TableCell>
                    <TableCell>{data.email}</TableCell>
                    <TableCell>{data.mobile}</TableCell>
                    <TableCell>{data.address}</TableCell>
                    <TableCell>{data.city}</TableCell>
                    <TableCell>{data.state}</TableCell>
                    <TableCell>{data.zip}</TableCell>
                    <TableCell>{data.country}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    </div>
  )
}

export default DisplayData