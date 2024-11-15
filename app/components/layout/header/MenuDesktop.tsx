import {NavLink} from '@remix-run/react';
import {FALLBACK_HEADER_MENU} from './constants';
import type {MenuDesktopProps} from './types';
import clsx from 'clsx';

import {SearchToggle} from '../search/SearchToggle';

export const MenuDesktop = ({
  menu,
  primaryDomainUrl,
  publicStoreDomain,
}: MenuDesktopProps) => {
  return (
    <nav
      className="flex flex-row items-center justify-between gap-10"
      role="navigation"
    >
      <SearchToggle />
      {(menu || FALLBACK_HEADER_MENU).items.map((item) => {
        if (!item.url) return null;
        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;

        return (
          <NavLink
            className={({isActive, isPending}) => {
              return clsx(
                'text-sm',
                isActive && 'font-bold',
                isPending && 'text-gray-500',
              );
            }}
            end
            key={item.id}
            // onClick={close}
            prefetch="intent"
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
};
