import data from '@utils/fakedata.json'

export const GET = async (req) => {
    try {
        const watchData = data.watchs;

        return new Response(JSON.stringify(watchData), {
            status: 200
        })
    } catch (error) {
        return new Response("failed to get data", {
            status: 500
        })
    }
}