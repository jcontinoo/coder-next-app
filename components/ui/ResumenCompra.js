import React from 'react';
import Modal from 'react-modal';

const ResumenCompraModal = ({ isOpen, onClose, cart, subtotal, total }) => {
    const customStyles = {
        overlay: {
            backdropFilter: 'blur(5px)',
        },
        content: {
            width: '800px',
            margin: 'auto',
        },
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Resumen de Compra"
            style={customStyles}
        >
            <h2 className="text-2xl font-semibold mb-4">Resumen de Compra</h2>
            {cart.map((product) => (
                <div key={product.slug}>
                    <p className="my-2">*{product.name} - Cantidad: {product.quantity}</p>
                    <p>Precio unitario: ${product.price}</p>
                </div>
            ))}
            <hr className="my-8" />
            <p className="font-bold">Subtotal: ${subtotal}</p>
            <p className="font-bold">Total: ${total}</p>
            <button onClick={() => {
                alert('Aquí termina la lógica! Gracias por probar la app :)');
                onClose();
            }} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
                Proceder al pago
            </button>
        </Modal>
    );
};

export default ResumenCompraModal;
