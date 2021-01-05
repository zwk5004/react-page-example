import { cstbapi } from "../cstbapi";
import { UserRole } from "../../types/User";

export function inviteUser(email: string): Promise<void> {
  return cstbapi.post("user/invite", { email }).then(response => response.data);
}

export function getRoles(): Promise<UserRole[]> {
  return cstbapi.get("/user/roles").then(response => response.data);
}

export function register(values): Promise<void> {
  delete values.confirmPassword;
  return cstbapi.post("/user/register", values).then(r => r.data);
}

export function confirmAccount(uuid): Promise<any> {
  return cstbapi.get(`/user/emailConfirm?uuid=${uuid}`).then(r => r.data);
}

export function registerRetry(email): void {
  cstbapi.post("/user/registerRetry", { email }).then(r => r.data);
}

export function forgotPassword(email): void {
  cstbapi.post("/user/forgotPassword", { email }).then(r => r.data);
}

export function resetPassword(uuid, password): Promise<any> {
  return cstbapi
    .post("/user/resetPassword", { uuid, password })
    .then(r => r.data);
}
