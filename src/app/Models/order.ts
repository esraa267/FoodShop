import { cart } from "./cart";

interface Order{
    order:{quantity:number},
    orderProduct:cart[] ,
}
export default Order