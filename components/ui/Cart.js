"use client"
import Link from 'next/link';
import Image from 'next/image';
import cartIcon from '../../public/cart-icon.png';
import React from 'react';
import { useCartContext } from '@/contexts/CartContext';

const Cart = () => {
  const { cart } = useCartContext();

  return (
    <>
      <div>
        <Link href="/carrito">
          <div className="relative">
            <Image src={cartIcon} alt="Menu" width={30} height={30} />
            {cart.length > 0 && (
              <div
              className="absolute top-0 right-0 bg-blue-700 rounded-full p-1 text-white -mt-1 -mr-1"
              >
                {cart.length}
              </div>
            )}
          </div>
        </Link>
      </div>
    </>
  );
};

export default Cart;
