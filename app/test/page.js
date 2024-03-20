import { sql } from "@vercel/postgres";

export default async function Test({ params }) {
  const { rows } = await sql`SELECT * FROM users`;
  console.log("hello world");

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.quantity}
        </div>
      ))}
    </div>
  );
}