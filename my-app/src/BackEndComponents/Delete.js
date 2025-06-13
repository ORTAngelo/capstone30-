
import {React, useEffect, useState} from 'react'
import {Box, Button, Typography} from '@mui/material'
import AxiosInstance from './Axios'
import {useNavigate, useParams} from 'react-router-dom'

const Delete = () => {
  const {id} = useParams()

  const [myData,setMydata] = useState()
  const [loading,setLoading] = useState(true)

  const GetData = ()=>{
    AxiosInstance.get(`product/${id}`).then((res) =>{
      setMydata(res.data)
      console.log(res.data)
      setLoading(false)
    })
  }

  useEffect(() =>{
    GetData();
  },[])

  const navigate = useNavigate()

  const submission = (data) => {

    AxiosInstance.delete(`product/${id}/`)
    .then(() =>{
      navigate(`/inventory`)
    })
  }

  return (
    <div>
      {loading ?<p>Loading data..</p>:
      <div>
        <Box sx={{display:'flex', width:'100%', marginBottom:'10px'}}>
          <Typography sx={{marginleft:'20px', fontWeight:'bold', fontSize:'23px'}}>
            Delete Product: {myData.ProductName}
          </Typography>
        </Box>

        <Box sx={{display:'flex', width:'100%', boxShadow:3, padding:4, flexDirection:'column'}}>

          <Box sx={{display:'flex', justifyContent:'start', marginBottom:'40px'}}>
            Are your sure you want to delete this product: {myData.ProductName}
          </Box>

          <Box sx={{width:'30%'}}>
                <Button variant="contained" onClick={submission} sx={{width:'100%'}}>
                  Confirm Delete
                </Button>
          </Box>   

        </Box>
      </div>
      }
    </div>
  )
}

export default Delete 