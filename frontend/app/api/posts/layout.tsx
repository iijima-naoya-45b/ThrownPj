// app/api/posts/layout.tsx
export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
