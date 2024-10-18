import database from "infra/database.js"

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const maxConnections = await database.query('show max_connections;')

  response.status(200).json({
    updated_at: updatedAt,
    max_connections: maxConnections.rows[0].max_connections
  })
}

export default status