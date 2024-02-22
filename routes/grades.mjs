import express from 'express';
import db from '../db/conn.mjs';
import { ObjectId } from 'mongodb';

const router = express.Router();

//Get all route
router.get('/', async (req, res) => {
  let collection = await db.collection('grades');
  let result = await collection.find({}).limit(10).toArray();
  res.json(result);
});

// Get a single grade entry
router.get('/:id', async (req, res) => {
  let collection = await db.collection('grades');
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send('Not found').status(404);
  else res.send(result).status(200);
});

//Get a student by ID
router.get('/student/:studentID', async (req, res) => {
  let collection = await db.collection('grades');
  let query = { student_id: Number(req.params.studentID) };
  let result = await collection.findOne(query);

  if (!result) res.send('Not found').status(404);
  else res.send(result).status(200);
});

//
//Get a class by class_id
router.get('/class/:classID', async (req, res) => {
  let collection = await db.collection('grades');
  let query = { class_id: Number(req.params.classID) };
  let result = await collection.findOne(query);

  if (!result) res.send('Not found').status(404);
  else res.json(result).status(200);
});

export default router;
