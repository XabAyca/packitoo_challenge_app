import { Card, CardContent, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react"
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux"
import { getBriefs } from '../../../shared/api/apiManager';
import { RootState } from '../../../shared/store';

export const BriefList = () => {
  const dispatch = useDispatch()
  const briefs: Ibriefs | any = useSelector((state: RootState) => state.briefs)
  const products: any = useSelector((state: RootState) => state.getProducts);
  const brief: any = useSelector((state: RootState) => state.addBrief)
  
  interface Ibrief{
    id: number;
    title: string;
    comment: string;
    productId: string;
  }

  interface Ibriefs{
    loading: boolean;
    briefs:Ibrief
  }

  interface Iproduct{
    name: string;
    id: number;
  }

  // Use setTimeOut to see the loader
  useEffect(() => {
    setTimeout(() => {
      dispatch(getBriefs());
    }, 1000)
  }, [brief]);

  const getProductName = (id: string): string => {
    return products.products.filter(
      (product: Iproduct) => product.id === parseInt(id)
    )[0].name;
  }

  return (
    <Box
      sx={{ display: "flex", justifyContent: 'space-around', flexFlow: 'row wrap' }}>
      {briefs.briefs && products.products ? (
        briefs.briefs.map((brief: Ibrief) => {
          return (
            <Card sx={{ width: 275, margin: "20px" }}>
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
  );
}