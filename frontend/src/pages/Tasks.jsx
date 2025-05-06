import React, { useEffect, useState } from 'react';
import { Container, Form, Row, Col, Spinner } from 'react-bootstrap';
import { getTasks } from '../services/taskService';
import TaskCard from './TaskCard';
import { useAuth } from '../context/AuthContext';

const Tasks = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState({ status: '', priority: '', search: '' });
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => setFilter({ ...filter, [e.target.name]: e.target.value });

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


  const filteredTasks = tasks.filter(task =>
    (!filter.status || task.status === filter.status) &&
    (!filter.priority || task.priority === filter.priority) &&
    (task.title.toLowerCase().includes(filter.search.toLowerCase()) || task.description.toLowerCase().includes(filter.search.toLowerCase()))
  );

  return (
    <Container className="mt-4">
      <h3>All Tasks</h3>
      <Form className="mb-3">
        <Row>
          <Col md={3}>
            <Form.Control placeholder="Search..." name="search" value={filter.search} onChange={handleChange} />
          </Col>
          <Col md={3}>
            <Form.Select name="status" value={filter.status} onChange={handleChange}>
              <option value="">Status</option>
              <option>pending</option>
              <option>in-progress</option>
              <option>completed</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Select name="priority" value={filter.priority} onChange={handleChange}>
              <option value="">Priority</option>
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>

      {loading ? <Spinner animation="border" /> : filteredTasks.map(task => <TaskCard key={task._id} task={task} />)}
    </Container>
  );
};

export default Tasks;
