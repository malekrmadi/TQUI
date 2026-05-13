import { initialProfiles, type Profile } from "@/data/profiles";

const KEY_AUTH = "tqui.auth";
const KEY_PROFILES = "tqui.profiles";

export type AuthUser = { name: string; email: string };

export const DEMO = { email: "demo@tqui.fr", password: "demo123" };

function isClient() { return typeof window !== "undefined"; }

export function getUser(): AuthUser | null {
  if (!isClient()) return null;
  try { return JSON.parse(localStorage.getItem(KEY_AUTH) || "null"); } catch { return null; }
}
export function login(email: string, password: string): AuthUser | null {
  if (email.trim().toLowerCase() === DEMO.email && password === DEMO.password) {
    const user = { name: "Alex Morel", email: DEMO.email };
    localStorage.setItem(KEY_AUTH, JSON.stringify(user));
    return user;
  }
  return null;
}
export function register(name: string, email: string): AuthUser {
  const user = { name, email };
  localStorage.setItem(KEY_AUTH, JSON.stringify(user));
  return user;
}
export function logout() { if (isClient()) localStorage.removeItem(KEY_AUTH); }

export function loadProfiles(): Profile[] {
  if (!isClient()) return initialProfiles;
  try {
    const raw = localStorage.getItem(KEY_PROFILES);
    if (!raw) {
      localStorage.setItem(KEY_PROFILES, JSON.stringify(initialProfiles));
      return initialProfiles;
    }
    return JSON.parse(raw);
  } catch { return initialProfiles; }
}
export function saveProfiles(p: Profile[]) {
  if (isClient()) localStorage.setItem(KEY_PROFILES, JSON.stringify(p));
}
