import React, { useState } from 'react'
import FilterProduct from './FilterProduct';

export default function AllProduct() {
    const [category, setCategory] = useState('All');

    return (
      <div>
        <nav>
          <button onClick={() => setCategory('All')}>All Products</button>
          <button onClick={() => setCategory('Tea')}>Tea</button>
          <button onClick={() => setCategory('Coffee')}>Coffee</button>
        </nav>
  
        {category === 'All' ? (
          <div className="inline-flex">
            <FilterProduct category="Tea" />
            <FilterProduct category="Coffee" />
          </div>
        ) : (
          <FilterProduct category={category} />
        )}
      </div>
    );
  };
