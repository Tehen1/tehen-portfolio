import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { PrismaClient } from "@prisma/client";
import { createClient } from "@supabase/supabase-js";

const prisma = new PrismaClient();
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

describe("RLS Policies", () => {
  beforeAll(async () => {
    await prisma.project.create({
      data: { slug: "test-project", title: "Test", description: "Test desc", stack: ["Next.js"] }
    });
  });

  afterAll(async () => {
    await prisma.project.deleteMany({ where: { slug: "test-project" } });
    await prisma.$disconnect();
  });

  it("allows public read on projects", async () => {
    const { data, error } = await supabase.from("projects").select("*");
    expect(error).toBeNull();
    expect(data).toBeDefined();
    expect(data!.some((p) => p.slug === "test-project")).toBe(true);
  });
});