import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { createTask } from '../services/taskService';


const CreateTask = () => {
  const { user } = useAuth();
  const [form, setForm] = useState({ title: '', description: '', dueDate: '', priority: 'medium', status: 'pending',  assignedTo: '' });
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTask(form, user.token);
      setMessage('Task created successfully!');
      setForm({ title: '', description: '', dueDate: '', priority: 'medium', status: 'pending', assignedTo: '' });
    } catch (err) {
      setMessage('Failed to create task');
    }
  };

  const fetchUsers = async () => {
    const API = 'http://localhost:5000/api/users';

    const options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }
    const res = await fetch(API, options)
    const data = await res.json()
    setUsers(data);
  }

  useEffect(() => {
   fetchUsers()
  }, []);

  return (
    <Container className="mt-4" style={{ maxWidth: '600px' }}>
      <h3>Create Task</h3>
      {message && <Alert variant="info">{message}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" value={form.title} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" name="description" value={form.description} onChange={handleChange} rows={3} />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Due Date</Form.Label>
          <Form.Control type="date" name="dueDate" value={form.dueDate} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Priority</Form.Label>
          <Form.Select name="priority" value={form.priority} onChange={handleChange}>
            <option>low</option>
            <option>medium</option>
            <option>high</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Status</Form.Label>
          <Form.Select name="status" value={form.status} onChange={handleChange}>
            <option>pending</option>
            <option>in-progress</option>
            <option>completed</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Assign To</Form.Label>
          <Form.Select name="assignedTo" value={form.assignedTo} onChange={handleChange}>
            <option value="">Select User</option>
            {users.map(u => <option key={u._id} value={u._id}>{u.name}</option>)}
          </Form.Select>
        </Form.Group>
        <Button type="submit" variant="primary">Create</Button>
      </Form>
    </Container>
  );
};

export default CreateTask;
