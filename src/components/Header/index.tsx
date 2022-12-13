
import { HeaderContainer } from './styles'
import logoIgnite from '../../assets/coffe-delivery-logo.svg'

export function Header() {
    return (
        <HeaderContainer>
            <div>
                <img src={logoIgnite} alt="" />
            </div>
        </HeaderContainer>
    )
}