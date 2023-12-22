"use client"
import CreateForm from "@/components/admin/CreateForm";
import Link from "next/link"

const CreateProduct = () => {

    return (
        <>
            <div className="mt-4 ml-8">
                <Link href='/admin' className="bg-blue-700 text-white px-3 py-1.5 rounded text-sm hover:bg-blue-800">
                    Volver al panel admin
                </Link>
            </div>

            <CreateForm />
        </>
    )
}

export default CreateProduct;