
import express from 'express';
import Item from '../models/Item.js';
const router = express.Router();

// create booking / lead
router.post('/', async (req, res) => {
  try {
    const { name, phone, service } = req.body;
    const item = new Item({ name, phone, service });
    await item.save();
    res.json({ message: 'Saved', item });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// list
router.get('/', async (req, res) => {
  const items = await Item.find().sort({ createdAt: -1 }).limit(50);
  res.json(items);
});

export default router;
