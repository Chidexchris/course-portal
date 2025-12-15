export function waitForIdentity() {
  return new Promise(resolve => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => resolve(user));
      window.netlifyIdentity.init();
    } else {
      resolve(null);
    }
  });
}
