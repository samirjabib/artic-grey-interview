import {NavLink} from '@remix-run/react';
import {FALLBACK_HEADER_MENU} from './constants';
import type {MenuDesktopProps} from './types';
import {activeLinkStyle} from './utils';

export const MenuDesktop = ({
  menu,
  primaryDomainUrl,
  publicStoreDomain,
}: MenuDesktopProps) => {
  return (
    <nav className="border-2 border-red-500" role="navigation">
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
            className=""
            end
            key={item.id}
            onClick={close}
            prefetch="intent"
            style={activeLinkStyle}
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
};
