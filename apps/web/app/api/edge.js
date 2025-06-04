export const config = {
runtime: 'edge'
};
export default function handler(request) {
return new Response('Edge Function processed', {
headers: { 'x-edge-function-ran': 'true' },
});
}
