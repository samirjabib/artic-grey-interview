import {Await} from '@remix-run/react';
import {CartBadge} from './CartBadge';
import {Suspense} from 'react';
import {CartBanner} from './CartBanner';
import type {CartToggleProps} from './types';

export function CartToggle({cart}: CartToggleProps) {
  return (
    <Suspense fallback={<CartBadge count={null} />}>
      <Await resolve={cart}>
        <CartBanner />
      </Await>
    </Suspense>
  );
}
