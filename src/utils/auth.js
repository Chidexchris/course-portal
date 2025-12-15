export function getCurrentUser() {
  if (!window.netlifyIdentity) return null;
  return window.netlifyIdentity.currentUser();
}

export function getUserRole() {
  const user = getCurrentUser();
  return user?.app_metadata?.roles?.[0] || "student";
}
