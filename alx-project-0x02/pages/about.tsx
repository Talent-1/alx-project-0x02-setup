import React from  'react';
import Button from '@/components/common/Button';
import Button from '@/components/layout/Header';

const About: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
          <Header />
            <h1 className="text-4xl font-bold mb-4">About Daily Contents</h1>
        {/* small button */}
        <div className="mb-6">
        <button className="bg-red-500 text-white px-3 hover:red-600"> 
        {size: small}
        {shape: rounded-sm}
        Small btn
        </button>
        </div>

          {/* medium button */}
        <div className="mb-6">
        <button className="bg-red-400 text-white px-3 hover:red-500"> 
        {size: medium}
        {shape: rounded-md}
        Medium btn
        </button>
        </div>

          {/* small button */}
        <div className="mb-6">
        <button className="bg-red-200 text-white px-3 hover:red-300"> 
        {size: large}
        {shape: rounded-full}
        Large btn
        </button>
        </div>
        </div>
    );
}

export default About;