import {useAsyncValue} from '@remix-run/react';
import {CartBadge} from './CartBadge';
import type {CartApiQueryFragment} from 'storefrontapi.generated';
import {useOptimisticCart} from '@shopify/hydrogen';

export function CartBanner() {
  const originalCart = useAsyncValue() as CartApiQueryFragment | null;
  const cart = useOptimisticCart(originalCart);
  return <CartBadge count={cart?.totalQuantity ?? 0} />;
}
