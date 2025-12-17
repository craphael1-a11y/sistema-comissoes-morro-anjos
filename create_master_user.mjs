import { drizzle } from "drizzle-orm/mysql2";
import bcrypt from "bcrypt";
import { users } from "./drizzle/schema.ts";

const db = drizzle(process.env.DATABASE_URL);

async function createMasterUser() {
  const username = "CristhianGestor";
  const password = "310394";
  const name = "Cristhian - Administrador";
  
  const passwordHash = await bcrypt.hash(password, 10);
  
  try {
    await db.insert(users).values({
      username,
      passwordHash,
      name,
      email: null,
      role: "admin",
      openId: null,
      loginMethod: "local",
    });
    
    console.log("✅ Usuário master criado com sucesso!");
    console.log("Usuário:", username);
    console.log("Senha:", password);
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      console.log("⚠️  Usuário já existe");
    } else {
      console.error("❌ Erro ao criar usuário:", error);
    }
  }
  
  process.exit(0);
}

createMasterUser();
