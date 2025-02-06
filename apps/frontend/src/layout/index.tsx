import React from 'react';
import Sidebar from '@/components/sidebar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex border-collapse container">
      <Sidebar />
      <main className="flex-1 border-r-[0.5px] border-[#684018] pt-[2rem] pb-1  ">{children}</main>
    </div>
  );
};
