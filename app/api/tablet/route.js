import data from '@utils/fakedata.json'

export const GET = async (req) => {
    try {
        const tabletData = data.tablets;

        return new Response(JSON.stringify(tabletData), {
            status: 200
        })
    } catch (error) {
        return new Response("failed to get data", {
            status: 500
        })
    }
}