export default function Logout() {
  // Next linting rules might suggest using the Link component instead of an
  // anchor tag.The Link component is meant to perform client - side
  // transitions between pages.As the link points to an API route and not to a
  // page, you should keep it as an anchor tag.
  return <a href="/api/auth/logout">Logout</a>;
}
