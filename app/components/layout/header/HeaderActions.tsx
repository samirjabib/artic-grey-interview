import {Await, NavLink} from '@remix-run/react';
import {HeaderActionsProps} from './types';
import {Suspense} from 'react';
import {CartToggle} from '~/components/shared/cart/CartToggle';

export function HeaderActions({isLoggedIn, cart}: HeaderActionsProps) {
  return (
    <nav className="header-ctas" role="navigation">
      <NavLink prefetch="intent" to="/account">
        <Suspense fallback="Sign in">
          <Await resolve={isLoggedIn} errorElement="Sign in">
            {(isLoggedIn) => (isLoggedIn ? 'Account' : 'Sign in')}
          </Await>
        </Suspense>
      </NavLink>
      <CartToggle cart={cart} />
    </nav>
  );
}
