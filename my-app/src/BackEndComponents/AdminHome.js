import {React, useEffect, useMemo, useState} from 'react'
import AxiosInstance from './Axios'
import { MaterialReactTable } from 'material-react-table'
import {Box, IconButton, Typography} from '@mui/material'
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom'

const AdminHome = () => {

  const [myData,setMydata] = useState()
  const [loading,setLoading] = useState(true)

  const GetData = ()=>{
    AxiosInstance.get(`orders/`)
    .then((res) =>{
      setMydata(res.data)
      console.log(res.data)
      setLoading(false)
    })
  }

  useEffect(() =>{
    GetData();
  },[])

    const columns = useMemo(
      () => [
        {
            accessorKey: 'order_number', //normal accessorKey
            header: 'Order Number',
            size: 10,
          },
          {
            accessorKey: 'Product', //access nested data with dot notation
            header: 'Product',
            size: 100,
          },
        {
          accessorKey: 'Name', //access nested data with dot notation
          header: 'Name',
          size: 50,
        },
        {
          accessorKey: 'Phone',
          header: 'Phone',
          size: 50,
        },
        {
          accessorKey: 'Email', //normal accessorKey
          header: 'Email',
          size: 100,
        },
        {
          accessorKey: 'Note', //normal accessorKey
          header: 'Note',
          size: 100,
        },
        {
          accessorKey: 'price', //normal accessorKey
          header: 'Price',
          size: 50,
        },
        {
          accessorKey: 'qty', //normal accessorKey
          header: 'Quantity',
          size: 10,
        },
        {
          accessorKey: 'total_price', //normal accessorKey
          header: 'Total Price',
          size: 50,
        },
        {
          accessorKey: 'created_at', //normal accessorKey
          header: 'Created At',
          size: 50,
        },
      ],
      [],
    );

  return (
    <div>
       <Typography sx={{marginleft:'20px', fontWeight:'bold', fontSize:'23px'}}>
          Orders
        </Typography>
      {loading ?<p>Loading data..</p>:
      <MaterialReactTable 
        columns={columns} 
        data={myData} 

        // enableRowActions
        // renderRowActions={({row}) => (
        //   <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
        //     <IconButton color="secondary" component={Link} to={`edit/${row.original.id}`}>
        //       <EditIcon />
        //     </IconButton>

        //     <IconButton color="error" component={Link} to={`delete/${row.original.id}`}>
        //       <DeleteIcon />
        //     </IconButton>
        //   </Box>
        // )}
      />
      }
    </div>
  )
}

export default AdminHome 