"use client"
import Link from 'next/link';
import Image from 'next/image';
import cart from '../../public/cart-icon.png';
import React from 'react';

const Cart = () => {
  return (
    <>
      <div>
        <Link href="/carrito">
            <Image src={cart} alt="Menu" width={30} height={30} />
        </Link>
      </div>
    </>
  );
};

export default Cart;
