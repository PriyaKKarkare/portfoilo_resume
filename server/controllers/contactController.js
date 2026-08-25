import Contact from "../models/Contact.js";

// POST /api/contact — save a message from the portfolio's contact form
export async function createContactMessage(req, res) {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, email and message are all required." });
    }

    const contact = await Contact.create({ name, email, message });
    return res.status(201).json({ message: "Message received.", id: contact._id });
  } catch (err) {
    return res.status(500).json({ message: "Could not save your message. Please try again." });
  }
}

// GET /api/contact — list messages (e.g. for a private admin view)
export async function getContactMessages(req, res) {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json(messages);
  } catch (err) {
    return res.status(500).json({ message: "Could not fetch messages." });
  }
}
