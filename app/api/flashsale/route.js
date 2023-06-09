import data from '@utils/fakedata.json'

export const GET = async (req) => {
    try {
        const flashSaleData = data.phones;

        return new Response(JSON.stringify(flashSaleData), {
            status: 200
        })
    } catch (error) {
        return new Response("failed to get data", {
            status: 500
        })
    }
}