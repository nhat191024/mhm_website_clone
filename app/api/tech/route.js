import data from '@utils/fakedata.json'

export const GET = async (req) => {
    try {
        const techData = data.techNew;

        return new Response(JSON.stringify(techData), {
            status: 200
        })
    } catch (error) {
        return new Response("failed to get data", {
            status: 500
        })
    }
}