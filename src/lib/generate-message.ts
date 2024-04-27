import { useCartStore } from "@/stores/cart-store";
import { useCheckoutStore } from "@/stores/checkout-store";

export const GenerateMessage = () => {
    const { name, address } = useCheckoutStore(state => state);
    const { cart } = useCartStore(state => state);

    let orderProducts = [];
    for (let item of cart) {
        orderProducts.push(`${item.quantity}x ${item.product.name}`);
    }

    let message = `*Dados do cliente:*
Nome: ${name}
Endereço: ${address.street}, ${address.number}`;

    if (address.complement) {
        message += ` (${address.complement})`;
    }

    message += ` - ${address.district}, ${address.city} - ${address.state}
----------
*Pedido:*
${orderProducts.join('\n')}
    `;

    return message;
}