import { google } from "googleapis";
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSession } from "@/components/hero-session"
import { getDataFromSheets } from "@/app/api/sheets"
export default async function Page({ params }) {
    const { id } = await params;
    var sessionData = await getSheetData()
    let scheduleData = sessionData.props.data.filter(function (event, index) {
        if (index == parseInt(id, 10)) { return true }
        return false
    })
    if (scheduleData.length == 0) {
        return <div className="min-h-screen bg-background">
            <Header />
            <main>
                No Session
            </main>
            <Footer />
        </div>
    }
    scheduleData = scheduleData[0]
    return <>
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <HeroSession
                    title={scheduleData.title}
                    type={scheduleData.type}
                    date={scheduleData.date}
                    startTime={scheduleData.startTime}
                    endTime={scheduleData.endTime}
                    who={scheduleData.speakers}
                    image={scheduleData.image}
                    description={scheduleData.description}
                />
            </main>
            <Footer />
        </div>
    </>
}

export async function getSheetData() {
    const sheet = await getDataFromSheets();
    return {
        props: {
            data: sheet.slice(0, sheet.length), // remove sheet header
        },
        revalidate: 1, // In seconds
    };
}