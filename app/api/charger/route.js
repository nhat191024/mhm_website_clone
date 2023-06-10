import data from '@utils/fakedata.json'

export const GET = async (req) => {
    try {
        const chargerData = data.charger;

        return new Response(JSON.stringify(chargerData), {
            status: 200
        })
    } catch (error) {
        return new Response("failed to get data", {
            status: 500
        })
    }
}