import React from 'react';
import { Col } from 'react-bootstrap';

interface IProps {
    title: string;
    description?: string;
    handleRemove: (email: string) => void
}

const Detail = ( {title, description, handleRemove}: IProps ) => {
    return (
        <Col xs={12} md={4}>
        <div style={{border: '1px solid black', borderRadius: '5px', padding: '10px', margin: '5px'}}>
            <p>
                <strong>Title:</strong> {title}
            </p>
            <p>
                <strong>Description:</strong> {description}
            </p>
            <button onClick={() => handleRemove(title)}>Remove</button>
        </div>
        </Col>
    );
};

export default Detail;