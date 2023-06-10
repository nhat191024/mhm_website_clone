import data from '@utils/fakedata.json'

export const GET = async (req) => {
    try {
        const laptopData = data.laptops;

        return new Response(JSON.stringify(laptopData), {
            status: 200
        })
    } catch (error) {
        return new Response("failed to get data", {
            status: 500
        })
    }
}