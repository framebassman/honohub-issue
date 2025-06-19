import { Hono } from 'hono';
import { createHub } from "honohub";
import hubConfig from "../hub.config";

const app = new Hono();

app.get('/healthcheck', (c) => c.text('ok'));
app.route("/", createHub(hubConfig));


export default app
