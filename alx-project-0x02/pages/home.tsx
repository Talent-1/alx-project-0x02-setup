import React from 'react';
import Card from '@/components/common/Card'
import Button from "@/components/common/Button";
import Header from '@/components/layout/Header';

const Home: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <Header />
            <h1 className="text-4xl font-bold mb-4">Welcome </h1>

           <Card 
           title="Daily Contents"
           content="Your daily dose of insightful articles, tutorials, and stories to keep you informed and inspired."
           />    

           <Button 
  size="lg" 
  shape="rounded" 
  onClick={() => setShowModal(true)}
>
  Create New Post
</Button>

        </div>
    );
}
export default Home;