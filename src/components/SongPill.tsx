import { useState, useEffect, CSSProperties } from "react";

const POLL_MS = 10_000;

interface TrackData {
    isPlaying: boolean;
    name: string;
    artists: string;
    albumArt: string;
    trackUrl: string;
    trackId: string;
    progressMs: number;
    durationMs: number;
}

export default function SongPill() {
    const [track, setTrack] = useState<TrackData | null>(null);

    useEffect(() => {
        async function updateStatus() {
            try {
                // Fetch from your secure Netlify function
                const res = await fetch("/.netlify/functions/spotify");
                if (!res.ok) return;
                const data = await res.json();
                if (data.name) {
                    setTrack(data);
                }
            } catch (error) {
                console.error("Failed to update Spotify status", error);
            }
        }

        updateStatus();
        const intervalId = setInterval(updateStatus, POLL_MS);
        return () => clearInterval(intervalId);
    }, []);

    if (!track) return (
        <span style={{ ...styles.wrapper, cursor: "default", textDecoration: "none" }}>
            {}
            <span style={{
                width: 26, height: 26, borderRadius: "50%",
                background: "#f0ece6", flexShrink: 0,
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, color: "#aa8866",
            }}>♪</span>
            <div style={styles.info}>
                <span style={styles.name}>nothing atm</span>
                <span style={styles.label}>⏸ spotify</span>
            </div>
        </span>
    );

    return (
        <a
            href={track.trackUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.wrapper}
        >
            <style>{`
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes b1 { 0%,100%{height:4px} 50%{height:12px} }
                @keyframes b2 { 0%,100%{height:10px} 50%{height:4px} }
                @keyframes b3 { 0%,100%{height:6px} 50%{height:14px} }
                .sb { display:inline-block; width:3px; background:#aa8866; border-radius:1px; margin:0 1px; }
                .sb:nth-child(1) { animation: b1 .9s ease infinite; }
                .sb:nth-child(2) { animation: b2 .9s ease infinite .2s; }
                .sb:nth-child(3) { animation: b3 .9s ease infinite .4s; }
            `}</style>

            {track.albumArt && (
                <img
                    src={track.albumArt}
                    alt=""
                    style={{
                        ...styles.art,
                        animation: track.isPlaying ? "spin 8s linear infinite" : "none",
                    }}
                />
            )}

            <div style={styles.info}>
                <span style={styles.name}>{track.name}</span>
                <span style={styles.label}>
                    {track.isPlaying ? "▶ playing · " : "⏸ last played · "}
                    {track.artists}
                </span>
            </div>

            {}
            <span style={{ display: "inline-flex", alignItems: "flex-end", height: 14, flexShrink: 0, opacity: track.isPlaying ? 1 : 0.3 }}>
                <span className="sb" style={track.isPlaying ? {} : { animationPlayState: "paused" }} />
                <span className="sb" style={track.isPlaying ? {} : { animationPlayState: "paused" }} />
                <span className="sb" style={track.isPlaying ? {} : { animationPlayState: "paused" }} />
            </span>


        </a>
    );
}

const styles: Record<string, CSSProperties> = {
    wrapper: {
        display: "inline-flex", alignItems: "center", gap: 8,
        background: "#fff", border: "0.5px solid rgba(0,0,0,0.12)",
        borderRadius: 999, padding: "5px 12px 5px 6px",
        fontSize: 12, color: "#1a1a18", textDecoration: "none",
        boxShadow: "0 1px 8px rgba(0,0,0,0.08)",
        marginTop: "5px",
        maxWidth: 220,
        overflow: "hidden",
        boxSizing: "border-box",
    },
    art: { width: 26, height: 26, borderRadius: "50%", objectFit: "cover", flexShrink: 0 },
    info: { display: "flex", flexDirection: "column", minWidth: 0, flex: 1 },
    name: { fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontSize: 12 },
    label: { color: "#888", fontSize: 10, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
};