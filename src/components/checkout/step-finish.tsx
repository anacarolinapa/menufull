import { useCheckoutStore } from "@/stores/checkout-store"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GenerateMessage } from "@/lib/generate-message";

export const StepFinish = () => {
    const { name } = useCheckoutStore(state => state);

    const message = GenerateMessage();
    const link = `https://wa.me//${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURI(message)}`;

    return (
        <div className="text-center flex flex-col gap-5">
            <p>
                Perfeito <strong>{name}</strong>!
            </p>

            <p>
                Agora envie seu pedido ao nosso WhatsApp para concluir. Nosso atendente irá lhe guiar sobre o andamento de seu pedido
            </p>

            <Button>
                <Link target="_blank" href={link}>
                    Enviar para o WhatsApp
                </Link>
            </Button>
        </div>
    )
}