
import {React, useEffect, useState} from 'react'
import {Box, Button, Typography} from '@mui/material'
import MyTextField from './forms/MyTextField'
import MyMultilineField from './forms/MyMultilineField'
import {useForm} from 'react-hook-form'
import AxiosInstance from './Axios'
import {useNavigate} from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

const Create = () => {

  const [loading,setLoading] = useState(false)

  const navigate = useNavigate()
  const defaultValues ={
    name:'',
    comments:'',
    status:'',
  }

  const schema = yup.object({
    ProductName: yup.string().required('Product is required field'),
    Description: yup.string().required('Description is required field'),
    Price: yup
    .number()
    .transform((value, originalValue) => originalValue === '' ? 0 : value)
    .required('Price is required field')
    .positive('Price must be a positive number'),
    Category: yup.string().required('Category is required'),
    Stocks: yup
    .number()
    .integer('Stocks must be an integer')
    .required('Stocks are required field')
    .positive('Price must be a positive number'),
  })

  const {handleSubmit, control, formState:{errors}} = useForm({defaultValues:defaultValues, resolver:yupResolver(schema)})
  const submission = (data) => {

    AxiosInstance.post(`product/`,{
      ProductName: data.ProductName, 
      Description: data.Description, 
      Price: parseFloat(data.Price),
      Category: data.Category,
      Stocks: parseFloat(data.Stocks),
    })
    .then(() =>{
      navigate(`/inventory`)
    })
  }

  return (
    <div>
      {loading ?<p>Loading data..</p>:
      <form onSubmit={handleSubmit(submission)}>
      <Box sx={{display:'flex', width:'100%', marginBottom:'10px'}}>
        <Typography sx={{marginleft:'20px', fontWeight:'bold', fontSize:'23px'}}>
          Add Product
        </Typography>
      </Box>

      <Box sx={{display:'flex', width:'100%', boxShadow:3, padding:4, flexDirection:'column'}}>

        <Box sx={{display:'flex', justifyContent:'space-around', marginBottom:'40px'}}>
            <MyTextField
              label="Product"
              name="ProductName"
              control={control}
              placeholder="Provide a product name"
              width={'30%'}
            />

            <MyTextField
              label="Price"
              name="Price"
              control={control}
              placeholder="Provide a price"
              width={'30%'}
              type="number"
            />

            <MyTextField
              label="Stocks"
              name="Stocks"
              control={control}
              placeholder="Provide Stock"
              width={'30%'}
              type="number"
            />

        </Box>

        <Box sx={{display:'flex', justifyContent:'space-around',}}>
            <MyMultilineField
              label="Description"
              name="Description"
              control={control}
              placeholder="Provide description"
              width={'30%'}
            />

            <MyTextField
              label="Category"
              name="Category"
              control={control}
              placeholder="Provide Category"
              width={'30%'}
            />
        </Box>

        <Box sx={{display:'flex', justifyContent:'start', marginTop:'30px'}}>
           <Button variant="contained" type="submit" sx={{width:'30%'}}>
              Submit
            </Button>
        </Box>

      </Box>
      </form>}
    </div>
  )
}

export default Create


/////////////////