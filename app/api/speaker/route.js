import data from '@utils/fakedata.json'

export const GET = async (req) => {
    try {
        const speakerData = data.speakers;

        return new Response(JSON.stringify(speakerData), {
            status: 200
        })
    } catch (error) {
        return new Response("failed to get data", {
            status: 500
        })
    }
}