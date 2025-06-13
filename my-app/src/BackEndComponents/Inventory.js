
import {React, useEffect, useMemo, useState} from 'react'
import AxiosInstance from './Axios'
import { MaterialReactTable } from 'material-react-table'
import {Box, IconButton, Typography} from '@mui/material'
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom'

const Inventory = () => {

  const [myData,setMydata] = useState()
  const [loading,setLoading] = useState(true)

  const GetData = ()=>{
    AxiosInstance.get(`product/`)
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
          accessorKey: 'ProductName', //access nested data with dot notation
          header: 'Product',
          size: 150,
        },
        {
          accessorKey: 'Description',
          header: 'Description',
          size: 200,
        },
        {
          accessorKey: 'Price', //normal accessorKey
          header: 'Price',
          size: 100,
        },
        {
          accessorKey: 'Category', //normal accessorKey
          header: 'Category',
          size: 150,
        },
        {
          accessorKey: 'Stocks', //normal accessorKey
          header: 'Stocks',
          size: 100,
        },
        
        
      ],
      [],
    );

  return (
    <div>
       <Typography sx={{marginleft:'20px', fontWeight:'bold', fontSize:'23px'}}>
          Inventory
        </Typography>
      {loading ?<p>Loading data..</p>:
      <MaterialReactTable 
        columns={columns} 
        data={myData} 

        enableRowActions
        renderRowActions={({row}) => (
          <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
            <IconButton color="secondary" component={Link} to={`edit/${row.original.id}`}>
              <EditIcon />
            </IconButton>

            <IconButton color="error" component={Link} to={`delete/${row.original.id}`}>
              <DeleteIcon />
            </IconButton>
          </Box>
        )}
      />
      }
    </div>
  )
}

export default Inventory 

////////////////