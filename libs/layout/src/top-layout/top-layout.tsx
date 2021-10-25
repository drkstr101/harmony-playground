import React from 'react';

export type TopLayoutProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function TopLayout({ text }: TopLayoutProps) {
  return (
    <div>
      {text}
    </div>
  );
}
