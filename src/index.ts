import { Context, Hono } from 'hono';
import { createHub } from "honohub";
import hubConfig from "../hub.config";

// const app = new Hono().route("/", createHub(hubConfig));
const app = new Hono()

app.get('/', (c) => c.text('Hono!'))

export default app
