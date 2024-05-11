import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const Likes = pgTable('likes', {
    id:serial('id').primaryKey(),
    user:varchar('user').notNull(),
    colors: text('colors').notNull(), 
})