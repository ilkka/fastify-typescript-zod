import fastify from "fastify";

const server = fastify({ logger: true });

interface QueryString {
  name: string;
}

server.get<{ QueryString: QueryString }>("/", async (request, reply) => {
  return { hello: request.query.name };
});

async function main() {
  try {
    const address = await server.listen(3000);
    server.log.info(`server listening on ${address}`);
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
}

main();
