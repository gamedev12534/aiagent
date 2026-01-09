import z from "zod";

// Lead schemas
export const CreateLeadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  website: z.string().url("Valid URL required").optional().or(z.literal("")),
  role: z.string().optional(),
  useCase: z.enum(["lead_gen", "support", "both"]),
  volumeEstimate: z.string().optional(),
  channels: z.array(z.string()).optional(),
  notes: z.string().optional(),
  sourcePage: z.enum(["demo", "contact"]),
  honeypot: z.string().optional(),
});

export const UpdateLeadSchema = z.object({
  status: z.enum(["new", "contacted", "qualified", "disqualified"]),
});

export type CreateLeadInput = z.infer<typeof CreateLeadSchema>;
export type UpdateLeadInput = z.infer<typeof UpdateLeadSchema>;

export interface Lead {
  id: number;
  name: string;
  email: string;
  company: string | null;
  website: string | null;
  role: string | null;
  use_case: string;
  volume_estimate: string | null;
  channels: string | null;
  notes: string | null;
  source_page: string;
  status: string;
  created_at: string;
  updated_at: string;
}

// Contact message schemas
export const CreateContactMessageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().optional(),
});

export const UpdateContactMessageSchema = z.object({
  status: z.enum(["new", "replied"]),
});

export type CreateContactMessageInput = z.infer<typeof CreateContactMessageSchema>;
export type UpdateContactMessageInput = z.infer<typeof UpdateContactMessageSchema>;

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  company: string | null;
  message: string;
  status: string;
  created_at: string;
  updated_at: string;
}
