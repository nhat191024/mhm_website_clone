import data from '@utils/fakedata.json'

export const GET = async (req) => {
    try {
        const shoplocationData = data.shoplocation;

        return new Response(JSON.stringify(shoplocationData), {
            status: 200
        })
    } catch (error) {
        return new Response("failed to get data", {
            status: 500
        })
    }
}