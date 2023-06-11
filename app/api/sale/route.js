import data from '@utils/fakedata.json'

export const GET = async (req) => {
    try {
        const saleData = data.saleNew;

        return new Response(JSON.stringify(saleData), {
            status: 200
        })
    } catch (error) {
        return new Response("failed to get data", {
            status: 500
        })
    }
}