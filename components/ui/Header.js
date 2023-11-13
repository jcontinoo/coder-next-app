"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Cart from "./Cart";

const Header = () => {
    return(
        <header className="w-full bg-white border">
            <div className="container m-auto pt-6 flex justify-between items-center">
                <Image 
                src={"/nba-store.png"}
                alt="NBA Logo"
                width={170}
                height={170}
                />
                
                <Link className="font-bold pt-12" href={"/"}>Inicio</Link>
                <Link className="font-bold pt-12" href={"/catalogo/todos"}>Catalogo</Link>
                <Link className="font-bold pt-12" href={"/nosotros"}>Nosotros</Link>
                <Link className="font-bold pt-12" href={"/contacto"}>Contacto</Link>
                
                <div className="pt-12">
                    <Cart />
                </div>
            </div>
        </header>
    )
}

export default Header