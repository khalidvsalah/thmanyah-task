import React from "react";

export const Account: React.FC<{ url: string; children: React.ReactNode }> = ({
  url,
  children,
}) => {
  return <a href={url}>{children}</a>;
};
