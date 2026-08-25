// One-time setup script. MongoDB has no "CREATE TABLE" step — a collection
// is created automatically the first time a document is saved into it.
// This script connects, inserts one sample contact message (creating the
// "contacts" collection in the process), then disconnects.
import mongoose from "mongoose";
import dotenv from "dotenv";
import Contact from "./models/Contact.js";

dotenv.config();

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to", process.env.MONGODB_URI);

    const existing = await Contact.countDocuments();
    if (existing > 0) {
      console.log(`"contacts" collection already has ${existing} document(s) — nothing to seed.`);
    } else {
      await Contact.create({
        name: "Sample Visitor",
        email: "visitor@example.com",
        message: "This is a sample message — the contact form will save real ones here.",
      });
      console.log('Created the "contacts" collection with one sample document.');
    }
  } catch (err) {
    console.error("Seed failed:", err.message);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

seed();