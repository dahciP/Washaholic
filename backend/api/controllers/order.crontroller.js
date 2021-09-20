const order = require("../models/order.model");

const updateToProcess = async (req, res) => {
	
	try {
		await order.findByIdAndUpdate(req.params.id, {
			WashingStatus: "processing",
			Hours: req.body.hours,
		});
		res.status(200).json({ message: "order successfully approved" });
	} catch (err) {
		res.status(200);
		console.log(err.message);
	}
};

const updateToCompleate = async (req, res) => {
	try {
		const date = new Date();

		await order.findByIdAndUpdate(req.params.id, {
			WashingStatus: "completed",
			CompletedDate: date.toDateString(),
			CompletedTime: date.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}),
		});
		res.status(200).json({ message: "order successfully approved" });
	} catch (err) {
		res.status(200);
		console.log(err.message);
	}
};

const getPendingOrders = async (req, res) => {
  try {
    const pendingOrdes = await order.find({
      WashingStatus: "pending",
    });
    res.status(200).json({ pendingOrdes: pendingOrdes });
  } catch (err) {
    res.status(200);
    console.log(err.message);
  }
};

const getProcessingOrders = async (req, res) => {
  try {
    const processingOrdes = await order.find({
      WashingStatus: "processing",
    });
    res.status(200).json({ processingOrdes: processingOrdes });
  } catch (err) {
    res.status(200);
    console.log(err.message);
  }
};

const getCompletedOrders = async (req, res) => {
  try {
    const completedOrdes = await order.find({
      WashingStatus: "completed",
    });
    res.status(200).json({ completedOrdes: completedOrdes });
  } catch (err) {
    res.status(200);
    console.log(err.message);
  }
};

const addOrder = async (req, res) => {
  try {
    const newOrder = new order(req.body);
    await newOrder.save();
    res.status(200);
  } catch (error) {
    res.status(400);
    console.log(error);
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const getUserOrders = async (req, res) => {
  console.log(req.body);
  try {
    const orders = await order.findById(req.body.userId);
    res.status(200).json(orders);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getByIdOrder = async (req, res) => {

  try {
    const order = await order.findById(req.params.id);
    res.status(200).json(order);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateDeliveryStatus = async (req, res) => {
  const order = await order.findByIdAndUpdate(req.body.id, {});
};

const updateDeliverID = async (req, res) => {
  try {
    const deliverer = await order.findByIdAndUpdate(req.params.id, {
      DelivaryId: req.body.userId,
    });
    res.status(202).json(deliverer);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getTotalOrdersBasedOnOrderStatusAndDay = async (req, res) => {
	if (!req.params) {
		return res.status(400).send();
	}

	if (!req.params.status && req.params.day) {
		return res.status(400).send();
	}

	try {
		const orders = await order.find({ WashingStatus: req.params.status });

		if (orders) {
			const filteredOrders = orders.filter((order) => {
				return order.StartDate.substring(0, 3) === req.params.day;
			});
			return res.status(200).json({ total: filteredOrders.length });
		}
	} catch (err) {
		return res.status(404).send();
	}
};

const getTotalOrdersBasedOnDeliveryStatusAndDay = async (req, res) => {
	if (!req.params) {
		return res.status(400).send();
	}

	if (!req.params.status && req.params.day) {
		return res.status(400).send();
	}

	try {
		const orders = await order.find({ DelivaryStatus: req.params.status });

		if (orders) {
			const filteredOrders = orders.filter((order) => {
				return order.StartDate.substring(0, 3) === req.params.day;
			});
			return res.status(200).json({ total: filteredOrders.length });
		}
	} catch (err) {
		return res.status(404).send();
	}
};

module.exports = {
  addOrder,
  getAllOrders,
  getByIdOrder,
  getUserOrders,
  updateDeliveryStatus,
  updateDeliverID,
  getPendingOrders,
  getProcessingOrders,
  getCompletedOrders,
  updateToProcess,
  updateToCompleate,

};
