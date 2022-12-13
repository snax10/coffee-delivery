import { TitleText } from "../../../../components/Typography";
import { SectionTitle } from "../SectionTitle";
import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";
import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { useTheme } from "styled-components";
import { AddressForm } from "./addressForm";
import { PaymentMethodOptions } from "./PaymentMethodOptions";

export function CompleteOrderForm() {
    const { colors } = useTheme();

    return (
        <CompleteOrderFormContainer>
            <TitleText size="xs" color="subtitle">Complete seu pedido</TitleText>

            <FormSectionContainer>
                <SectionTitle
                    title="Endereço de entrega"
                    subtitle="Selecione um endereço cadastrado ou cadastre um novo"
                    icon={<MapPinLine color={colors["brand-yellow-dark"]} size={22} />}
                />

                <AddressForm />
            </FormSectionContainer>

            <FormSectionContainer>
                <SectionTitle
                    title="Pagamento"
                    subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                    icon={<CurrencyDollar color={colors["brand-purple"]} size={22} />}
                />

                <PaymentMethodOptions />
            </FormSectionContainer>
        </CompleteOrderFormContainer>
    )
}