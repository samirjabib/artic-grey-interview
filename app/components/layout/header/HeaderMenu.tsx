import type {HeaderMenuProps} from './types';
import {MenuMobile} from './MenuMobile';
import {MenuDesktop} from './MenuDesktop';

export function HeaderMenu({
  menu,
  primaryDomainUrl,
  viewport,
  publicStoreDomain,
}: HeaderMenuProps) {
  if (viewport === 'mobile') {
    return (
      <MenuMobile
        menu={menu}
        primaryDomainUrl={primaryDomainUrl}
        publicStoreDomain={publicStoreDomain}
      />
    );
  }

  return (
    <MenuDesktop
      menu={menu}
      primaryDomainUrl={primaryDomainUrl}
      publicStoreDomain={publicStoreDomain}
    />
  );
}
