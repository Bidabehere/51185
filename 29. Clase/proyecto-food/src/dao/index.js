import { connectDB } from "../config/dbConnection.js";
import { UserMongo } from "./managers/users.mongo.js";
import { BusinessMongo } from "./managers/business.mongo.js";
import { OrdersMongo } from "./managers/orders.mongo.js";

connectDB();
export const userDao = new UserMongo();
export const businessDao = new BusinessMongo();
export const ordersDao = new OrdersMongo();
