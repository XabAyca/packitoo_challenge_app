import { Button, MenuItem, TextField } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, addBrief } from '../../../shared/api/apiManager';
import { RootState } from '../../../shared/store';
import { Box } from '@mui/system';
import { Iproduct, Iproducts } from '../../../shared/constants/interface';

export const BriefForm = () => {
  const [title, setTitle] = useState<string>("")
  const [comment, setComment] = useState<string>("")
  const [productId, setProductId] = useState<string>("")
  const dispatch = useDispatch()
  const products: Iproducts | any = useSelector((state: RootState) => state.getProducts)

  useEffect(() => {
    dispatch(getProducts());
  }, [])

  const createBrief = (e:ChangeEvent) => {
    e.preventDefault()
    const data:any ={
      title: title,
      comment: comment,
      productId: productId
    }   
    dispatch(addBrief(data))
  }

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 2, width: "50ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={(e: ChangeEvent<HTMLFormElement>) => createBrief(e)}
    >
      <div>
        <TextField
          size="small"
          label="Title"
          variant="outlined"
          required
          value={title}
          placeholder="Title"
          type="string"
          name="title"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
        <TextField
          size="small"
          label="Product"
          helperText="Please select your product"
          select
          required
          value={productId}
          name="productId"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setProductId(e.target.value)
          }
        >
          {products.products &&
            products.products.map((product: Iproduct) => {
              return <MenuItem value={product.id}>{product.name}</MenuItem>;
            })}
        </TextField>
      </div>
      <div>
        <TextField
          multiline
          rows={4}
          required
          label="Comment"
          value={comment}
          placeholder="Comment"
          name="comment"
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setComment(e.target.value)
          }
        />
      </div>
      <div>
        <Button
          variant="outlined"
          type="submit"
          sx={{ margin: "20px", width: "200px" }}
        >
          Save
        </Button>
      </div>
    </Box>
  );
};