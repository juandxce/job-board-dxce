import React from 'react';
import { StateProvider } from '../store.js';
import Navbar from '../sections/Navbar';
import Search from '../sections/Search';
import Filters from '../sections/Filters';
import Body from '../sections/Body';


const Index = () => {
  return (
    <StateProvider>
      <div className="max-w-7xl mx-auto px-4 sm:px-6" style={{ background: "#eee" }}>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-full">
            <Navbar />
          </div>
          <div className="col-span-full">
            <Search />
          </div>
          <div className="col-span-1">
            <Filters />
          </div>
          <div className="col-span-3">
            <Body />
          </div>
        </div>
      </div>
    </StateProvider>
  )
}
export default Index
