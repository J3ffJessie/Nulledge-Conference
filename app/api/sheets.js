import { google } from "googleapis";

export async function getDataFromSheets() {
    try {
        const jwt = new google.auth.JWT({
            email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
            key: (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
            scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"]
        })

        const sheets = google.sheets({ version: "v4", auth: jwt });
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: process.env.SPREADSHEET_NAME,
        });

        const rows = response.data.values;
        if (rows.length) {
            return rows.map((row) => ({
                title: row[0],
                type: row[1],
                date: row[2],
                startTime: row[3],
                endTime: row[4],
                image: row[5],
                description: row[6],
                speakers: row[7],
                speakersTitles: row[8],
                speakersImages: row[9],
                speakersURLs: row[10],
                speakersEmployers: row[11],
                speakersEmployerURLs: row[12],
                speakersEmployerImages: row[13],
                featured: row[14]
            }));
        }
    } catch (err) {
        console.log(err);
    }

    return [];
}