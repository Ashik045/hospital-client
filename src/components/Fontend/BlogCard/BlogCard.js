import Avatar from '@mui/material/Avatar';
import React from 'react';
import '../Blog/blog.css';

const BlogCard = ({ detailsss }) => (
    <div className="blogCard">
        <div className="bcHeader">
            <div className="bbimg mt-2">
                <Avatar
                    alt="Remy Sharp"
                    className="dNone"
                    src={detailsss.imgs}
                    sx={{ width: 50, height: 50 }}
                />
            </div>
            <div className="text ms-3">
                <h5>{detailsss.name}</h5>
                <p className="text-muted ms-2">{detailsss.date}</p>
            </div>
        </div>

        <h5 className="btitle my-4">{detailsss.title}</h5>

        <div className="description">{detailsss.description}</div>
    </div>
);

export default BlogCard;
