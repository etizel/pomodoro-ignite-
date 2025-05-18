import { Outlet } from 'react-router-dom';
import { LayoutContainer } from './styles';
import { Header } from '../Header';
export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}
