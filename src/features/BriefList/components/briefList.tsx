import { useEffect } from "react"
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

  useEffect(() => {
    dispatch(getBriefs())
  }, [brief])

  const getProductName = (id: string): string => {
    return products.products.filter(
      (product: Iproduct) => product.id === parseInt(id)
    )[0].name;
  }

  return (
    <div>
      {
        briefs.briefs && products.products &&
        briefs.briefs.map((brief:Ibrief) => {
          return (
            <div>
              <p>{brief.title}</p>
              <p>{brief.comment}</p>
              <p>{getProductName(brief.productId)}</p>
            </div>
          )
        })
      }
    </div>
  )
}