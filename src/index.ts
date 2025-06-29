import { Hono } from 'hono';
import { createHub } from "honohub";
import { cors } from "hono/cors";
import hubConfig from "../hub.config";

const app = new Hono();

app.get('/healthcheck', (c) => c.text('ok'));
app.use(cors()).route("/", createHub(hubConfig));


export default app
