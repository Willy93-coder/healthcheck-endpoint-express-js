import { z } from "zod";

process.loadEnvFile();
const envSchema = z.object({
  // DB
  MONGO_URI: z.string().startsWith("mongodb://"),

  // Server port
  PORT: z.coerce.number(),
});

// Type inference from schema
export type Env = z.infer<typeof envSchema>;

// Parse and validate environment variables
let env: Env;

try {
  env = envSchema.parse(process.env);
} catch (error) {
  if (error instanceof z.ZodError) {
    console.error("❌Invalid environment variables:");
    console.error(JSON.stringify(error.flatten().fieldErrors, null, 2));

    // Detailed error messages
    error.issues.forEach((err) => {
      const path = err.path.join(".");
      console.error(`  ${path}: ${err.message}`);
    });

    process.exit(1);
  }
  throw error;
}

export { env };
