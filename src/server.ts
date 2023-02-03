import cors       from '@fastify/cors';
import Fastify    from "fastify";
import { prisma } from './lib/prisma';
import { appRoutes } from './routes';

const app = Fastify();

app.register(cors);
app.register(appRoutes);

app.get(`/`, async ()=> {
    const habits = await prisma.habit.findMany();

    return habits
})

app.listen({
    port: 3000
}).then(()=>{
    console.log("HTTP server running!")
})
