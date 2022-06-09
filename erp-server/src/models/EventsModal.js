const mongoose = require("mongoose");

const EventsSchema = new mongoose.Schema(
  {
    eventName: { type: String, require: true },
    eventInfo: { type: String, require: true },
    start: { type: String, require: true },
    end: { type: String, require: true },
    reglink: { type: String, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const EventsData = mongoose.model("events-Info", EventsSchema);
module.exports = EventsData;