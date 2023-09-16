import { expect, it } from "vitest";
import request from "supertest";
import app from ".";

it("runs", async () => {
  expect(true).toBe(true);
  const res = await request(app).get("/");
  expect(res.body).toMatchObject({ message: "Hello World!" });
});
