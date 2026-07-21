import json
from pathlib import Path

from googleapiclient.discovery import build
from isodate import parse_duration
from tqdm import tqdm

from config import API_KEY


# ===========================
# Configuración
# ===========================

ROOT = Path(__file__).resolve().parent.parent

SONGS_JSON = ROOT / "songs.json"
SONGS_JS = ROOT / "songs.js"


youtube = build(
    "youtube",
    "v3",
    developerKey=API_KEY
)


# ===========================
# Funciones
# ===========================

def load_songs():

    with open(SONGS_JSON, "r", encoding="utf-8") as file:
        return json.load(file)


def search_song(song):

    query = f"{song['title']} {song['artist']}"

    response = youtube.search().list(
        part="snippet",
        q=query,
        maxResults=5,
        type="video"
    ).execute()

    items = response.get("items", [])

    if not items:
        return None

    artist = song["artist"].lower()
    title = song["title"].lower()

    best_score = -1
    best_video = None

    for item in items:

        snippet = item["snippet"]

        video_title = snippet["title"].lower()
        channel = snippet["channelTitle"].lower()

        score = 0

        # Coincidencias básicas
        if artist in video_title:
            score += 5

        if title in video_title:
            score += 5

        if artist in channel:
            score += 3

        # Canales oficiales
        if "official" in video_title:
            score += 4

        if "official" in channel:
            score += 4

        if "vevo" in channel:
            score += 4

        if "topic" in channel:
            score += 2

        # Penalizaciones
        banned = [
            "cover",
            "karaoke",
            "instrumental",
            "nightcore",
            "slowed",
            "reverb",
            "8d",
            "live",
            "reaction",
            "fan made",
            "fanmade",
            "lyrics",
            "lyric",
            "audio edit",
            "sped up"
        ]

        for word in banned:
            if word in video_title:
                score -= 8

        if score > best_score:
            best_score = score
            best_video = item

    if best_video is None:
        return None

    return best_video["id"]["videoId"]  


def get_video_info(video_id):

    response = youtube.videos().list(
        part="contentDetails,snippet",
        id=video_id
    ).execute()

    item = response["items"][0]

    duration = parse_duration(
        item["contentDetails"]["duration"]
    )

    total_seconds = int(duration.total_seconds())

    minutes = total_seconds // 60
    seconds = total_seconds % 60

    return {
        "duration": f"{minutes}:{seconds:02}",
        "videoTitle": item["snippet"]["title"],
        "channel": item["snippet"]["channelTitle"]
    }


def generate_js(songs):

    js = "const songs = "

    js += json.dumps(
        songs,
        ensure_ascii=False,
        indent=4
    )

    js += ";"

    with open(
        SONGS_JS,
        "w",
        encoding="utf-8"
    ) as file:

        file.write(js)


# ===========================
# Main
# ===========================

def main():

    songs = load_songs()

    print()

    for song in tqdm(songs):

        video_id = search_song(song)

        if video_id is None:

            print(f"No encontrada: {song['title']}")
            continue

        info = get_video_info(video_id)

        song["videoId"] = video_id
        song["duration"] = info["duration"]
        song["videoTitle"] = info["videoTitle"]
        song["channel"] = info["channel"]

    generate_js(songs)

    print()
    print("songs.js generado correctamente.")


if __name__ == "__main__":
    main()