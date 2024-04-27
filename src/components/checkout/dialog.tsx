"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { useState } from "react";
import { StepUser } from "@/components/checkout/step-user";
import { StepAddress } from "@/components/checkout/step-address";
import { StepFinish } from "@/components/checkout/step-finish";
import { CheckoutSteps } from "@/types/checkout-steps";

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const CheckoutDialog = ({ open, onOpenChange }: Props) => {
    const [step, setStep] = useState<CheckoutSteps>('user');

    let stepTitle = '';
    let stepProgress = 0;
    switch (step) {
        case 'user':
            stepTitle = 'Dados pessoais';
            stepProgress = 30;
            break;
        case 'address':
            stepTitle = 'Endereço de entrega';
            stepProgress = 70;
            break;
        case 'finish':
            stepTitle = 'Envio para o WhatsApp';
            stepProgress = 100;
            break;
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="w-11/12">
                <DialogHeader>
                    <DialogTitle>
                        {stepTitle}
                    </DialogTitle>
                </DialogHeader>

                <Progress value={stepProgress} />

                <div className="flex flex-col gap-3">
                    {step === 'user' && <StepUser setStep={setStep} />}
                    {step === 'address' && <StepAddress setStep={setStep} />}
                    {step === 'finish' && <StepFinish />}
                </div>
            </DialogContent>
        </Dialog>
    )
}