'use client';

import React from 'react';

interface FooterProps {
  dict?: {
    footer?: {
      rights?: string;
      builtWith?: string;
      backToTop?: string;
    };
  };
}

export function Footer({ dict }: FooterProps) {
  const rightsText = dict?.footer?.rights || 'All rights reserved.';

  return (
    <footer className="w-full py-8 border-t border-surface-card-border bg-main">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <p className="text-sm text-txt-muted tracking-wide">
          © {new Date().getFullYear()} NOURELDEEN. {rightsText}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
