import { Card, CardContent, Typography, MenuItem, TextField } from '@mui/material';
import { Box } from "@mui/system";
import { ChangeEvent, useEffect, useState } from 'react';
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux"
import { getBriefs } from '../../../shared/api/apiManager';
import { RootState } from '../../../shared/store';
import { Iproduct, Ibriefs, Ibrief, Iproducts } from '../../../shared/constants/interface';

export const BriefList = () => {
  const dispatch = useDispatch()
  const [filter, setFilter] = useState(0)
  const [filteredB, setFilteredB]= useState([]);
  const briefs: Ibriefs | any = useSelector((state: RootState) => state.briefs)
  const products: Iproducts | any= useSelector((state: RootState) => state.getProducts);
  const brief: Ibrief | any = useSelector((state: RootState) => state.addBrief)

  // Use setTimeOut to see the loader
  useEffect(() => {
    setTimeout(() => {
      dispatch(getBriefs());
    }, 1000)
  }, [brief]);

  const getProductName = (id: number): string => {
    return products.products.filter(
      (product: Iproduct) => product.id === id
    )[0].name;
  }
  
  const filteredBriefs = () => {
    if (filter === 0) {
      setFilteredB(briefs.briefs)
    } else {
      setFilteredB(
        briefs.briefs.filter((brief: Ibrief) => brief.productId === filter)
      );
    }
  };

  useEffect(() => {
    briefs.briefs && filteredBriefs()
  },[briefs,filter])

  return (
    <>
      <Box
        sx={{
          "& .MuiTextField-root": { m: 2, width: "25ch" },
        }}
      >
        <TextField
          label="Filter"
          id="demo-simple-select"
          select
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFilter(parseInt(e.target.value))
          }
          defaultValue={0}
        >
          <MenuItem value={0}>All</MenuItem>
          {products.products &&
            products.products.map((product: Iproduct) => {
              return (
                <MenuItem key={product.id} value={product.id}>
                  {product.name}
                </MenuItem>
              );
            })}
        </TextField>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexFlow: "row wrap",
        }}
      >
        {briefs.briefs && products.products && filteredB ? (
          filteredB.map((brief: Ibrief) => {
            return (
              <Card key={brief.id} sx={{ width: 275, margin: "20px" }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {brief.title}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {brief.comment}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {getProductName(brief.productId)}
                  </Typography>
                </CardContent>
              </Card>
            );
          })
        ) : (
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        )}
      </Box>
    </>
  );
}