import { HeaderContainer } from './styles';
import LogoInite from '../../assets/Logo.svg';
import { Timer, Scroll } from 'phosphor-react';

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={LogoInite} alt="" />
      </span>
      <nav>
        <a href="">
          <Timer size={24} />
        </a>
        <a href="">
          <Scroll size={24} />
        </a>
      </nav>
    </HeaderContainer>
  );
}
