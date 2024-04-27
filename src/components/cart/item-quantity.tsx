import { useCartStore } from "@/stores/cart-store";
import { Cart } from "@/types/cart";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";

type Props = {
    cartItem: Cart;
}

export const CartItemQuantity = ({ cartItem }: Props) => {
    const { upsertCartItem } = useCartStore(state => state);

    const handlePlusButton = () => {
        upsertCartItem(cartItem.product, 1);
    };

    const handleMinusButton = () => {
        upsertCartItem(cartItem.product, -1);
    };

    return (
        <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="size-8" onClick={handlePlusButton}>
                <Plus className="size-4" />
            </Button>

            <div className="text-xs">
                {cartItem.quantity}
            </div>

            <Button variant="outline" size="icon" className="size-8" onClick={handleMinusButton}>
                <Minus className="size-4" />
            </Button>
        </div>
    );
}