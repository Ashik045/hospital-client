import React from 'react';
import doctor1 from '../../images/doctors1.jpg';
import doctor2 from '../../images/doctors2.jpg';
import doctor5 from '../../images/doctors5.jpg';
import BlogCard from '../BlogCard/BlogCard';
import './blog.css';

const blogDetails = [
    {
        id: 1,
        name: 'Mr. John',
        date: '02 March 2019',
        imgs: doctor1,
        title: 'You should come to doctor at last one time in a year',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rem quibusdam quo nam a quos!',
    },
    {
        id: 1,
        name: 'Tommy Shelby',
        imgs: doctor2,
        date: '24 November 2020',
        title: 'hare we are waiting to serve a better life',
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio beatae deserunt eveniet nesciunt vero laudantium!',
    },
    {
        id: 1,
        name: 'Poly Jeni',
        imgs: doctor5,
        date: '24 January 2019',
        title: 'come hare we will take care of you',
        description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut laudantium inventore temporibus reiciendis minus. Provident.',
    },
];

const Blog = () => (
    <section className="blogSec">
        <div className="bHeader text-center">
            <h5 style={{ color: '#13D0D1' }}>OUR BLOGS</h5>
            <h2>From Our Blog News</h2>
        </div>

        <div className="cardRow">
            {blogDetails.map((detailsss) => (
                <BlogCard key={detailsss.id} detailsss={detailsss} />
            ))}
        </div>
    </section>
);

export default Blog;
