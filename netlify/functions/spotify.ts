import { Handler } from "@netlify/functions";

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

async function getAccessToken() {
    const basic = btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`);
    const res = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: SPOTIFY_REFRESH_TOKEN!,
        }),
    });
    return res.json();
}

function extractTrackId(url: string): string {
    return url.split("/track/")[1]?.split("?")[0] ?? "";
}

export const handler: Handler = async (_event: any, _context: any) => {
    try {
        const { access_token } = await getAccessToken();

        // 1. Try currently playing
        const nowPlaying = await fetch(
            "https://api.spotify.com/v1/me/player/currently-playing",
            { headers: { Authorization: `Bearer ${access_token}` } }
        );

        if (nowPlaying.status === 200) {
            const data = await nowPlaying.json();
            if (data?.item) {
                const trackUrl: string = data.item.external_urls.spotify;
                return {
                    statusCode: 200,
                    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
                    body: JSON.stringify({
                        isPlaying: data.is_playing,
                        name: data.item.name,
                        artists: data.item.artists.map((a: any) => a.name).join(", "),
                        albumArt: data.item.album.images[1]?.url ?? data.item.album.images[0]?.url,
                        trackUrl,
                        trackId: extractTrackId(trackUrl),
                        progressMs: data.progress_ms,
                        durationMs: data.item.duration_ms,
                    }),
                };
            }
        }

        // 2. Fallback to recently played
        const recentlyPlayed = await fetch(
            "https://api.spotify.com/v1/me/player/recently-played?limit=1",
            { headers: { Authorization: `Bearer ${access_token}` } }
        );

        if (recentlyPlayed.ok) {
            const data = await recentlyPlayed.json();
            const item = data?.items?.[0]?.track;
            if (item) {
                const trackUrl: string = item.external_urls.spotify;
                return {
                    statusCode: 200,
                    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
                    body: JSON.stringify({
                        isPlaying: false,
                        name: item.name,
                        artists: item.artists.map((a: any) => a.name).join(", "),
                        albumArt: item.album.images[1]?.url ?? item.album.images[0]?.url,
                        trackUrl,
                        trackId: extractTrackId(trackUrl),
                        progressMs: 0,
                        durationMs: item.duration_ms,
                    }),
                };
            }
        }

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify({ isPlaying: false }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch Spotify status" }),
        };
    }
};
