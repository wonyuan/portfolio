const SPOTIFY_CLIENT_ID = import.meta.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = import.meta.env.SPOTIFY_CLIENT_SECRET;
const SPOTIFY_REFRESH_TOKEN = import.meta.env.SPOTIFY_REFRESH_TOKEN;

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
            refresh_token: SPOTIFY_REFRESH_TOKEN,
        }),
    });
    return res.json();
}

export default async function handler(_req: any, res: any) {
    res.setHeader("Access-Control-Allow-Origin", "*");

    const { access_token } = await getAccessToken();

    const nowPlaying = await fetch(
        "https://api.spotify.com/v1/me/player/currently-playing",
        { headers: { Authorization: `Bearer ${access_token}` } }
    );

    if (nowPlaying.status === 204 || nowPlaying.status > 400) {
        return res.status(200).json({ isPlaying: false });
    }

    const data = await nowPlaying.json();
    if (!data?.item) return res.status(200).json({ isPlaying: false });

    return res.status(200).json({
        isPlaying: data.is_playing,
        name: data.item.name,
        artists: data.item.artists.map((a: any) => a.name).join(", "),
        albumArt: data.item.album.images[2]?.url ?? data.item.album.images[0]?.url,
        trackUrl: data.item.external_urls.spotify,
        progressMs: data.progress_ms,
        durationMs: data.item.duration_ms,
    });
}