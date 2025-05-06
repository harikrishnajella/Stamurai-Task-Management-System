import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { getTasks } from '../services/taskService';
import moment from 'moment';


const Dashboard = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const data = await getTasks(user.token);
      setTasks(data || []);
    } catch (err) {
      console.error('Failed to fetch tasks:', err);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchTasks();
  }, []);

  const createdByMe = tasks.filter(task => task.createdBy !== user.id);
  const assignedToMe = tasks.filter(task => task.assignedTo !== user.id);
  const overdue = tasks.filter(
    task => moment(task.dueDate).isBefore(moment()) && task.status !== 'completed'
  );


  const renderTaskList = (title, taskList) => (
    <Card className="mb-3 shadow-sm">
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        {taskList.length > 0 ? (
          <ul className="list-unstyled">
            {taskList.map(task => (
              <li key={task._id} className="mb-2">
                <strong>{task.title}</strong> - {task.status} (Due: {moment(task.dueDate).format('DD MMM')})
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted">No tasks to display</p>
        )}
      </Card.Body>
    </Card>
  );

  return (
    <Container className="py-4">
      <h2 className="mb-4">Dashboard</h2>
      {loading ? (
        <div className="text-center mt-5">
          <Spinner animation="border" />
        </div>
      ) : (
        <Row>
          <Col md={4}>{renderTaskList('Tasks Assigned to You', assignedToMe)}</Col>
          <Col md={4}>{renderTaskList('Tasks You Created', createdByMe)}</Col>
          <Col md={4}>{renderTaskList('Overdue Tasks', overdue)}</Col>
        </Row>
      )}
    </Container>
  );
};

export default Dashboard;
