import { React, useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import MyTextField from "./forms/MyTextField";
import MyMultilineField from "./forms/MyMultilineField";
import { useForm } from "react-hook-form";
import AxiosInstance from "./Axios";
import Dayjs from "dayjs";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const {id} = useParams();

  const [loading, setLoading] = useState(true);

  const GetData = ()=>{
    AxiosInstance.get(`product/${id}`).then((res) => {
      console.log(res.data);
      setValue("ProductName", res.data.ProductName );
      setValue("Description", res.data.Description);
      setValue("Price", res.data.Price);
      setValue("Category", res.data.Category);
      setValue("Stocks", res.data.Stocks);
      setLoading(false);
    });
  };

  useEffect(() => {
    GetData();
  }, []);

  const navigate = useNavigate();
  const defaultValues = {
    name: "",
    comments: "",
    status: "",
  };

  const { handleSubmit, setValue, control } = useForm({
    defaultValues: defaultValues,
  });
  const submission = (data) => {

    AxiosInstance.put(`product/${id}/`, {
      ProductName: data.ProductName,
      Description: data.Description,
      Price: data.Price,
      Category: data.Category,
      Stocks: data.Stocks,
    }).then(() => {
      navigate(`/inventory`);
    });
  };

  return (
    <div>
      {loading ? (
        <p>Loading data..</p>
      ) : (
        <form onSubmit={handleSubmit(submission)}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              backgroundColor: "#00003f",
              marginBottom: "10px",
            }}
          >
            <Typography sx={{ marginleft: "20px", color: "#ffff" }}>
              Create records
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              width: "100%",
              boxShadow: 3,
              padding: 4,
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "40px",
              }}
            >
              <MyTextField
                label="Product"
                name="ProductName"
                control={control}
                placeholder="Provide a product name"
                width={"30%"}
              />
              <MyTextField
                label="Price"
                name="Price"
                control={control}
                placeholder="Provide a price"
                width={"30%"}
                type="number"
              />
              <MyTextField
                label="Stocks"
                name="Stocks"
                control={control}
                placeholder="Provide Stock"
                width={"30%"}
                type="number"
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <MyMultilineField
                label="Description"
                name="Description"
                control={control}
                placeholder="Provide description"
                width={"30%"}
              />
              <MyTextField
                label="Category"
                name="Category"
                control={control}
                placeholder="Provide Category"
                width={"30%"}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                marginTop: "30px",
              }}
            >
              <Button variant="contained" type="submit" sx={{ width: "100%" }}>
                Submit
              </Button>
            </Box>
          </Box>
        </form>
      )}
    </div>
  );
};

export default Edit;
