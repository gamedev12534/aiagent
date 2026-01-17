import { Hono } from "hono";
import { cors } from "hono/cors";
import {
  CreateLeadSchema,
  UpdateLeadSchema,
  CreateContactMessageSchema,
  UpdateContactMessageSchema,
  type Lead,
  type ContactMessage,
} from "@/shared/types";
import { checkRateLimit } from "./rate-limiter";

const app = new Hono<{ Bindings: Env }>();

app.use("/*", cors());

// Helper function to verify admin password
function verifyAdmin(request: Request, env: any): boolean {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return false;
  }
  const token = authHeader.substring(7);
  return token === env.ADMIN_PASSWORD;
}

// POST /api/leads - Create a new lead
app.post("/api/leads", async (c) => {
  try {
    const body = await c.req.json();

    // Check honeypot
    if (body.honeypot) {
      return c.json({ error: "Invalid submission" }, 400);
    }

    // Rate limiting by email
    if (!checkRateLimit(`lead:${body.email}`)) {
      return c.json({ error: "Too many requests. Please try again later." }, 429);
    }

    // Validate input
    const validatedData = CreateLeadSchema.parse(body);

    // Insert into database
    const result = await c.env.DB.prepare(
      `INSERT INTO leads (name, email, company, website, role, use_case, volume_estimate, channels, notes, source_page, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'new')`
    )
      .bind(
        validatedData.name,
        validatedData.email,
        validatedData.company || null,
        validatedData.website || null,
        validatedData.role || null,
        validatedData.useCase,
        validatedData.volumeEstimate || null,
        validatedData.channels ? JSON.stringify(validatedData.channels) : null,
        validatedData.notes || null,
        validatedData.sourcePage
      )
      .run();

    return c.json({ success: true, id: result.meta.last_row_id }, 201);
  } catch (error: any) {
    if (error.errors) {
      return c.json({ error: "Validation failed", details: error.errors }, 400);
    }
    return c.json({ error: "Failed to create lead" }, 500);
  }
});

// GET /api/leads - Get all leads (admin only)
app.get("/api/leads", async (c) => {
  if (!verifyAdmin(c.req.raw, c.env)) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  try {
    const { results } = await c.env.DB.prepare(
      `SELECT * FROM leads ORDER BY created_at DESC`
    ).all<Lead>();

    return c.json({ leads: results });
  } catch (error) {
    return c.json({ error: "Failed to fetch leads" }, 500);
  }
});

// PATCH /api/leads/:id - Update lead status (admin only)
app.patch("/api/leads/:id", async (c) => {
  if (!verifyAdmin(c.req.raw, c.env)) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  try {
    const id = c.req.param("id");
    const body = await c.req.json();
    const validatedData = UpdateLeadSchema.parse(body);

    await c.env.DB.prepare(
      `UPDATE leads SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`
    )
      .bind(validatedData.status, id)
      .run();

    return c.json({ success: true });
  } catch (error: any) {
    if (error.errors) {
      return c.json({ error: "Validation failed", details: error.errors }, 400);
    }
    return c.json({ error: "Failed to update lead" }, 500);
  }
});

// POST /api/contact - Create a new contact message
app.post("/api/contact", async (c) => {
  try {
    const body = await c.req.json();

    // Check honeypot
    if (body.honeypot) {
      return c.json({ error: "Invalid submission" }, 400);
    }

    // Rate limiting by email
    if (!checkRateLimit(`contact:${body.email}`)) {
      return c.json({ error: "Too many requests. Please try again later." }, 429);
    }

    // Validate input
    const validatedData = CreateContactMessageSchema.parse(body);

    // Insert into database
    const result = await c.env.DB.prepare(
      `INSERT INTO contact_messages (name, email, company, message, status)
       VALUES (?, ?, ?, ?, 'new')`
    )
      .bind(
        validatedData.name,
        validatedData.email,
        validatedData.company || null,
        validatedData.message
      )
      .run();

    return c.json({ success: true, id: result.meta.last_row_id }, 201);
  } catch (error: any) {
    if (error.errors) {
      return c.json({ error: "Validation failed", details: error.errors }, 400);
    }
    return c.json({ error: "Failed to create contact message" }, 500);
  }
});

// GET /api/contact - Get all contact messages (admin only)
app.get("/api/contact", async (c) => {
  if (!verifyAdmin(c.req.raw, c.env)) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  try {
    const { results } = await c.env.DB.prepare(
      `SELECT * FROM contact_messages ORDER BY created_at DESC`
    ).all<ContactMessage>();

    return c.json({ messages: results });
  } catch (error) {
    return c.json({ error: "Failed to fetch contact messages" }, 500);
  }
});

// PATCH /api/contact/:id - Update contact message status (admin only)
app.patch("/api/contact/:id", async (c) => {
  if (!verifyAdmin(c.req.raw, c.env)) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  try {
    const id = c.req.param("id");
    const body = await c.req.json();
    const validatedData = UpdateContactMessageSchema.parse(body);

    await c.env.DB.prepare(
      `UPDATE contact_messages SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`
    )
      .bind(validatedData.status, id)
      .run();

    return c.json({ success: true });
  } catch (error: any) {
    if (error.errors) {
      return c.json({ error: "Validation failed", details: error.errors }, 400);
    }
    return c.json({ error: "Failed to update contact message" }, 500);
  }
});

export default app;
