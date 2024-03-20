import { sql } from "@vercel/postgres";

export default async function Test({ params }) {
  const { rows } = await sql`SELECT * FROM users WHERE user_id=${params.user}`;

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