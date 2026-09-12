-- Projects
ALTER TABLE "projects" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read projects"
  ON "projects" FOR SELECT
  USING (true);

CREATE POLICY "Authenticated insert projects"
  ON "projects" FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated update projects"
  ON "projects" FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Experiences
ALTER TABLE "experiences" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read experiences"
  ON "experiences" FOR SELECT
  USING (true);

CREATE POLICY "Authenticated write experiences"
  ON "experiences" FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Audit logs
ALTER TABLE "audit_logs" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated read audit logs"
  ON "audit_logs" FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "System insert audit logs"
  ON "audit_logs" FOR INSERT
  WITH CHECK (auth.role() = 'service_role');