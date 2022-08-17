import {
  HeaderContainer,
  HeaderContent,
  NewTransactionsButton,
} from './styles';

import * as Dialog from '@radix-ui/react-dialog';
import logoImg from '../../assets/logo.svg';
import { NewTransactionModal } from '../NewTransactionModal';

function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt='logo' />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionsButton>Nova Transação</NewTransactionsButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
