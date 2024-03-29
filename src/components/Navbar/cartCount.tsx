"use client";

import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { CiShoppingCart } from "react-icons/ci";

const CartCount = () => {
  const { cartTotalQty } = useCart();
  const router = useRouter();

  return (
    <div
      className="relative cursor-pointer"
      onClick={() => router.push("/cart")}
    >
      <div className="text-3xl">
        <CiShoppingCart />
      </div>
      <span
        className="
      absolute 
      top-[-10px] 
      right-[-10px] 
      bg-red-500 
      text-white 
      rounded-full 
      w-6 h-6 
      flex items-center 
      justify-center
      text-sm"
      >
        {cartTotalQty}
      </span>
    </div>
  );
};

export default CartCount;
