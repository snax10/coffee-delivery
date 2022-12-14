import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";
import { Trash } from 'phosphor-react'

export function CoffeeCartCard() {
    return (
        <CoffeeCartCardContainer>
            <div>
                <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1672012800&Signature=YDapFjre3gu29Fu5p9nkBPLUTSj9IHcpeQsBMj5QeRrpnqMo4nsfTPrfJ12aN~TwwgQN36Ow2EAWfOAFqBhYWRoHMOIm2suAdDsC7mBQ7dPG1UhnithZ2CSaPpXrE9STYTck827odBAplS24TS8~aoHPJkEY48jOiYklRBvZfTUy75J20TxlXpYzmmy-DeVQjjl7wCcV1a7AbMJDDei5kUemeCsppBneAnJ8tbKinvy~ONmbmQGeDPuRS0on11h0~W7vzwJya2CmNrEQ5k48GJnuIYm5FW-Qmuup2PPVHFct6vOhS9lsA6AomTvBI6eii85DbbWCTYeNsRb1BrV43A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                <div>
                    <RegularText color="subtitle">Expresso Tradicional</RegularText>
                    <ActionsContainer>
                        <QuantityInput size="small" />
                        <RemoveButton>
                            <Trash size={16} />
                            REMOVER
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>

            <p>R$ 9,90</p>
        </CoffeeCartCardContainer>
    )
}