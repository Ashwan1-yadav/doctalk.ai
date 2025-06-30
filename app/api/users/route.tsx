import { NextResponse } from "next/server";
import { db } from "@/database/db";
import { usersTable } from "@/database/schema";
import { clerkClient } from '@clerk/nextjs/server';
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
    let userId: string;

    try {
        const body = await req.json();
        userId = body?.userId;
        if (!userId) {
            return NextResponse.json("Unauthorized", { status: 401 });
        }
    } catch (e) {
        return NextResponse.json("Invalid JSON", { status: 400 });
    }

    try {
        const clerk = await clerkClient();
        const user = await clerk.users.getUser(userId);
        const email = user.emailAddresses[0]?.emailAddress || '';
        const name = `${user.firstName || ''} ${user.lastName || ''}`.trim();

        const existing = await db
            .select()
            .from(usersTable)
            .where(eq(usersTable.email, email));

        if (existing.length === 0) {
            const response = await db.insert(usersTable).values({
                clerkId : userId,
                name,
                email,
                credits: 5,
            }).returning();

            return NextResponse.json(response[0]);
        }

        return NextResponse.json(existing[0]);

    } catch (error) {
        console.error('Error inserting user:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
