const Subscription = require("../models/Subscription");

class SubscriptionController {
  async create(req, res) {
    const sub = new Subscription(req.body);
    await sub.save();
    res.status(201).json(sub);
  }

  async useSession(req, res) {
    const sub = await Subscription.findByIdAndUpdate(
      req.params.id,
      { $inc: { used_sessions: 1 } },
      { new: true }
    );
    res.json(sub);
  }

  async show(req, res) {
    const sub = await Subscription.findById(req.params.id);
    res.json(sub);
  }
}
module.exports = new SubscriptionController();
