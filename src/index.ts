import { Hono } from 'hono';
import { createHub } from "honohub";
import hubConfig from "../hub.config";

const app = new Hono().route("/", createHub(hubConfig));

export default app
