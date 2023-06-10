import data from '@utils/fakedata.json'

export const GET = async (req) => {
    try {
        const phoneData = data.phones;

        return new Response(JSON.stringify(phoneData), {
            status: 200
        })
    } catch (error) {
        return new Response("failed to get data", {
            status: 500
        })
    }
}