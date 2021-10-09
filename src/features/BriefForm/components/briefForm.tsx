import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, addBrief } from '../../../shared/api/apiManager';
import { RootState } from '../../../shared/store';

export const BriefForm = () => {
  const [title, setTitle] = useState<string>("")
  const [comment, setComment] = useState<string>("")
  const [productId, setProductId] = useState<string>("")
  const dispatch = useDispatch()
  const products: any = useSelector((state: RootState) => state.getProducts)

  useEffect(() => {
    dispatch(getProducts());
  }, [])
  
  interface Iproduct{
    id: number;
    name: string;
  }

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
    <form onSubmit={(e: ChangeEvent<HTMLFormElement>) => createBrief(e)}>
      <input
        required
        value={title}
        placeholder="Title"
        type="string"
        name="title"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      />
      <textarea
        required
        value={comment}
        placeholder="Comment"
        name="comment"
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setComment(e.target.value)
        }
      />
      <select
        required
        value={productId}
        name="productId"
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setProductId(e.target.value)
        }
      >
        <option value="">-- Choose a product --</option>
        {products.products &&
          products.products.map((product: Iproduct) => {
            return <option value={product.id}>{product.name}</option>;
          })}
      </select>
      <input type="submit" value="Send" name="send" />
    </form>
  );
};