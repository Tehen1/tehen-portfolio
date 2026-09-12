import { Button } from "@tehen/ui/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        <h1 className="text-5xl font-bold">
          TeheN <span className="text-primary">Architect</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          AI/Web3/Infra — Next.js 15, React 19, Supabase RLS, tRPC, OTEL
        </p>
        <div className="flex gap-4">
          <Button>Projets</Button>
          <Button variant="outline">Contact</Button>
        </div>
      </motion.section>
    </main>
  );
}