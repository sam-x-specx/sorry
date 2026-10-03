import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sorryPage',
  title: 'Sorry Page',
  type: 'document',
  fields: [
    defineField({ name: 'recipientName', title: 'Recipient Name', type: 'string' }),
    defineField({ name: 'openingMessage', title: 'Opening Message', type: 'text' }),
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'apologyHeading', title: 'Apology Heading', type: 'string' }),
    defineField({ name: 'apologyMessage', title: 'Apology Message', type: 'text' }),
    defineField({ name: 'angerQuestion', title: 'Anger Check Question', type: 'string' }),

    defineField({ name: 'nahiBataogiMessage', title: 'Nahi Bataogi Message', type: 'text' }),
    defineField({ name: 'nahiBataogiImage', title: 'Nahi Bataogi Image (bear)', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'chupHoHeading', title: 'Chup Ho Heading', type: 'string' }),
    defineField({ name: 'chupHoMessage', title: 'Chup Ho Message', type: 'text' }),
    defineField({ name: 'chupHoImage', title: 'Chup Ho Image (bunnies)', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'chupHoNote', title: 'Chup Ho Small Note', type: 'string' }),

    // New: "Are we friends again?" screen
    defineField({ name: 'friendsHeading', title: 'Friends Again Heading', type: 'string' }),
    defineField({ name: 'friendsSubtext', title: 'Friends Again Subtext', type: 'string' }),
    defineField({ name: 'friendsNote', title: 'Friends Again Small Note', type: 'string' }),

    defineField({ name: 'finalMessage', title: 'Final Message', type: 'text' }),
    defineField({ name: 'yayHeading', title: 'Yay Heading', type: 'string' }),
    defineField({ name: 'yayMessage', title: 'Yay Message', type: 'text' }),
    defineField({ name: 'yayImage', title: 'Yay Image (bunny)', type: 'image', options: { hotspot: true } }),
  ],
})
