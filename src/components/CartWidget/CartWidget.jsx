import { Badge } from "@mui/material";
import { BsFillCartFill } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={8} color="primary">
        <BsFillCartFill size={30} />
      </Badge>
    </div>
  );
};

export default CartWidget;
