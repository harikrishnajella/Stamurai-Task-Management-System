// src/components/TaskCard.jsx

import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import moment from 'moment';

const TaskCard = ({ task }) => {
  const getPriorityVariant = (priority) => {
    switch (priority) {
      case 'high': return 'danger';
      case 'medium': return 'warning';
      case 'low': return 'success';
      default: return 'secondary';
    }
  };

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>{task.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Due: {moment(task.dueDate).format('DD MMM YYYY')}
        </Card.Subtitle>
        <Card.Text>{task.description}</Card.Text>
        <Badge bg={getPriorityVariant(task.priority)} className="me-2">{task.priority}</Badge>
        <Badge bg="info" className="me-2">{task.status}</Badge>
        <Badge bg="dark">Assigned to: {task.assignedTo.name || 'N/A'}</Badge>
      </Card.Body>
    </Card>
  );
};

export default TaskCard;
