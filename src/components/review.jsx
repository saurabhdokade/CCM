import React from 'react';
import './ReviewPage.css';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Avatar, AvatarImage } from '../components/ui/avatar';
import RatingStars from '../components/RatingStars';

const reviews = new Array(10).fill({
  product: 'Jeans',
  reviewer: 'Ankita Panday',
  email: 'Kanki11232@gmail.com',
  rating: 4,
  reviewText: 'Material is good and very comfortable',
  date: '12/02/2025',
});

const ReviewPage = () => (
  <div className="review-container">
    {/* <header className="review-topbar">
      {/* <h1>Reviews</h1> */}
      {/* <div className="topbar-icons">
        <Input placeholder="Search..." className="search-input" />
        <div className="notification-icons"> */}
          {/* <span>🔔</span>
          <span>💬</span> */}
          {/* <Avatar className="avatar-small">
            <AvatarImage src="https://i.pravatar.cc/40" /> */}
          {/* </Avatar> */}
        {/* </div> */}
      {/* </div> */}
    {/* </header> */}

    <div className="review-content">
      <Card className="review-card">
        <CardContent className="review-card-content">
          <div className="review-header">
            <h2>Product Reviews</h2>
            <div className="review-controls">
              <Button variant="outline">Filter</Button>
              <Button variant="outline">See all</Button>
            </div>
          </div>

          <div className="review-table-container">
            <table className="review-table">
              <thead>
                <tr>
                  <th><input type="checkbox" /></th>
                  <th>Product Name</th>
                  <th>Reviewer</th>
                  <th>Review</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review, index) => (
                  <tr key={index}>
                    <td><input type="checkbox" /></td>
                    <td className="product-info">
                      <img src="https://i.imgur.com/1Aq1ZlG.png" alt="Product" />
                      <span>{review.product}</span>
                    </td>
                    <td className="reviewer-info">
                      <Avatar className="avatar">
                        <AvatarImage src="https://i.pravatar.cc/40" />
                      </Avatar>
                      <div>
                        <div className="reviewer-name">{review.reviewer}</div>
                        <div className="reviewer-email">{review.email}</div>
                      </div>
                    </td>
                    <td className="review-text">
                      <RatingStars rating={review.rating} />
                      <p>{review.reviewText}</p>
                    </td>
                    <td>{review.date}</td>
                    <td className="ellipsis">⋮</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pagination">
            <Button variant="outline">Previous</Button>
            <Button variant="outline">Next</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default ReviewPage;
