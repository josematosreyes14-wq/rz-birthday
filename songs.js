const songs = [
    {
        "id": 1,
        "title": "Por Si Me Faltas",
        "artist": "Dante",
        "message": "",
        "videoId": "7rpqpi8Ta38",
        "duration": "4:44",
        "videoTitle": "DANTE - POR SI ME FALTAS",
        "channel": "DanteACVEVO",
        "scene": "night",
        theme: {
            background: "#0A0A0A",
            glow: "#F5F5F7",
            accent: "#8B0000"
        }
    },
    {
        "id": 2,
        "title": "Un Beso y una Flor",
        "artist": "Nino Bravo",
        "cover": "assets/covers/02.jpg",
        "message": "",
        "videoId": "PAcq2bVq8-4",
        "duration": "3:43",
        "videoTitle": "Un Beso Y Una Flor",
        "channel": "nino bravo vevo",
        "scene": "sunset",
        theme: {
            background: "#3D2314",
            glow: "#F4A261",
            accent: "#D62828"
        }
    },
    {
        "id": 3,
        "title": "Ese Tipo Soy Yo",
        "artist": "Roberto Carlos",
        "cover": "assets/covers/03.jpg",
        "message": "",
        "videoId": "G0DUVB7_P3A",
        "duration": "4:35",
        "videoTitle": "Roberto Carlos - Ese Tipo Soy Yo (Esse Cara Sou Eu) (Lyrics)",
        "channel": "Roberto Carlos",
        "scene": "sunset",
        theme: {
            background: "#0B1325",
            glow: "#F4EAD4",
            accent: "#C2416B"
        }
    },
    {
        "id": 4,
        "title": "Glow",
        "artist": "Livingston",
        "cover": "assets/covers/04.jpg",
        "message": "",
        "videoId": "8YzPH0idqMI",
        "duration": "3:06",
        "videoTitle": "Livingston - Glow (Visualizer)",
        "channel": "Livingston",
        "scene": "night",
        theme: {
            background: "#050B14",
            glow: "#00F5FF",
            accent: "#FFD700"
        }
    },
    {
        "id": 5,
        "title": "M.A.I",
        "artist": "Milo J",
        "cover": "assets/covers/05.jpg",
        "message": "",
        "videoId": "MldGX_mbS-o",
        "duration": "3:01",
        "videoTitle": "MILO J - M.A.I (Video Oficial)",
        "channel": "MILO J",
        "scene": "night",
        theme: {
            background: "#1F140E",
            glow: "#FFF1D0",
            accent: "#606C38"
        }
    },
    {
        "id": 6,
        "title": "She Will Be Loved",
        "artist": "Maroon 5",
        "cover": "assets/covers/06.jpg",
        "message": "",
        "videoId": "nIjVuRTm-dc",
        "duration": "4:29",
        "videoTitle": "Maroon 5 - She Will Be Loved (Official Music Video)",
        "channel": "Maroon5VEVO",
        "scene": "night",
        theme: {
            background: "#2B3A42",
            glow: "#EFEFEF",
            accent: "#6B1D2F"
        }
    },
    {
        "id": 7,
        "title": "You Found Me",
        "artist": "The Fray",
        "cover": "assets/covers/07.jpg",
        "message": "",
        "videoId": "jFg_8u87zT0",
        "duration": "4:01",
        "videoTitle": "The Fray - You Found Me (Official Video)",
        "channel": "thefrayVEVO",
        "scene": "night",
        theme: {
            background: "#1A1C20",
            glow: "#93B5C6",
            accent: "#B85C38"
        }
    },
    {
        "id": 8,
        "title": "I Was Made For Lovin' You",
        "artist": "KISS",
        "cover": "assets/covers/08.jpg",
        "message": "",
        "videoId": "ZhIsAZO5gl0",
        "duration": "3:59",
        "videoTitle": "Kiss - I Was Made For Lovin' You",
        "channel": "KissVEVO",
        "scene": "sunset",
        theme: {
            background: "#050505",
            glow: "#FF007F",
            accent: "#D4AF37"
        }
    },
    {
        "id": 9,
        "title": "The Reason",
        "artist": "Hoobastank",
        "cover": "assets/covers/09.jpg",
        "message": "",
        "videoId": "fV4DiAyExN0",
        "duration": "4:11",
        "videoTitle": "Hoobastank - The Reason (Official Music Video)",
        "channel": "HoobastankVEVO",
        "scene": "night",
        theme: {
            background: "#24282F",
            glow: "#D1E8E2",
            accent: "#9A7B56"
        }
    },
    {
        "id": 10,
        "title": "Wonderwall",
        "artist": "Oasis",
        "cover": "assets/covers/10.jpg",
        "message": "",
        "videoId": "bx1Bh8ZvH84",
        "duration": "4:38",
        "videoTitle": "Oasis - Wonderwall (Official Video)",
        "channel": "OasisVEVO",
        "scene": "night",
        theme: {
            background: "#1C2826",
            glow: "#F5EBE0",
            accent: "#4A6984"
        }
    },
    {
        "id": 11,
        "title": "Flaca",
        "artist": "Andrés Calamaro",
        "cover": "assets/covers/11.jpg",
        "message": "",
        "videoId": "UCF9oHXhDMU",
        "duration": "4:33",
        "videoTitle": "Andrés Calamaro - Flaca (Videoclip Oficial)",
        "channel": "Warner Music Spain",
        "scene": "freedom",
        theme: {
            background: "#1C1310",
            glow: "#FAD02C",
            accent: "#9E2A2B"
        }
    },
    {
        "id": 12,
        "title": "Lips On You",
        "artist": "Maroon 5",
        "cover": "assets/covers/12.jpg",
        "message": "",
        "videoId": "auWpNlPk6VQ",
        "duration": "3:31",
        "videoTitle": "Lips On You; Maroon5 (sub. español)",
        "channel": "Spring Sadness",
        "scene": "sunset",
        theme: {
            background: "#0D0B12",
            glow: "#9D4EDD",
            accent: "#D90429"
        }
    },
    {
        "id": 13,
        "title": "Sol",
        "artist": "Willian",
        "cover": "assets/covers/13.jpg",
        "message": "",
        "videoId": "PW6ZSzdjrlo",
        "duration": "2:19",
        "videoTitle": "Willian - Sol (Video Lyrics)",
        "channel": "Willian",
        "scene": "sunset",
        theme: {
            background: "#120E16",
            glow: "#FF9F1C",
            accent: "#E9C46A"
        }
    },
    {
        "id": 14,
        "title": "Sweet Child O' Mine",
        "artist": "Guns N' Roses",
        "cover": "assets/covers/14.jpg",    
        "message": "",
        "videoId": "1w7OgIMMRc4",
        "duration": "5:03",
        "videoTitle": "Guns N' Roses - Sweet Child O' Mine (Official Music Video)",
        "channel": "GunsNRosesVEVO",
        "scene": "freedom",
        theme: {
            background: "#0A090B",
            glow: "#00D2FF",
            accent: "#E63946"
        }
    },
    {
        "id": 15,
        "title": "Fix You",
        "artist": "Coldplay",
        "cover": "assets/covers/15.jpg",
        "message": "",
        "videoId": "k4V3Mo61fJM",
        "duration": "4:54",
        "videoTitle": "Coldplay - Fix You (Official Video)",
        "channel": "Coldplay",
        "scene": "night",
        theme: {
            background: "#0F141D",
            glow: "#FFE5A3",
            accent: "#E67E22"
        }
    },
    {
        "id": 16,
        "title": "Enamorado Tuyo",
        "artist": "Cuarteto de Nos",
        "cover": "assets/covers/16.jpg",
        "message": "",
        "videoId": "BKcLMsCStms",
        "duration": "4:20",
        "videoTitle": "Enamorado Tuyo - El Cuarteto de Nos // Letra",
        "channel": "Canciones Que Debes Escuchar Antes de Morir ",
        "scene": "freedom",
        theme: {
            background: "#A8DADC",
            glow: "#FF007F",
            accent: "#F4A261"
        }
    },
    {
        "id": 17,
        "title": "Last Man Standing",
        "artist": "Livingston",
        "cover": "assets/covers/17.jpg",
        "message": "",
        "videoId": "GFhmpVSfnZo",
        "duration": "3:05",
        "videoTitle": "Livingston - Last Man Standing (Official Visualizer)",
        "channel": "Livingston",
        "scene": "forest",
        theme: {
            background: "#140B19",
            glow: "#F5E4BC",
            accent: "#9FA8A3"
        }
    },
    {
        "id": 18,
        "title": "Si Por Mi Fuera",
        "artist": "Beret",
        "cover": "assets/covers/18.jpg",
        "message": "",
        "videoId": "1ZhsWvvw9p4",
        "duration": "3:37",
        "videoTitle": "Beret - Si Por Mi Fuera (Videoclip Oficial)",
        "channel": "BERET",
        "scene": "freedom",
        theme: {
            background: "#141A29",
            glow: "#FF7B00",
            accent: "#00F5D4"
        }
    },
    {
        "id": 19,
        "title": "La Flaca",
        "artist": "Jarabe de Palo",
        "cover": "assets/covers/19.jpg",
        "message": "",
        "videoId": "r2g0pM3PMNQ",
        "duration": "4:29",
        "videoTitle": "Jarabe De Palo - La Flaca (Videoclip Oficial)",
        "channel": "Jarabe de Palo Catálogo",
        "scene": "sunset",
        theme: {
            background: "#0B1325",
            glow: "#F4EAD4",
            accent: "#C2416B"
        }
    },
    {
        "id": 20,
        "title": "Better Me For You (Brown Eyes)",
        "artist": "Max McNown",
        "cover": "assets/covers/20.jpg",
        "message": "Quitemos lo Cristiano pq todos sabemos que piso una iglesia y muero XD",
        "videoId": "0-jSotRMNL8",
        "duration": "3:15",
        "videoTitle": "Max McNown - Better Me For You (Brown Eyes) (Official Performance Video)",
        "channel": "Max McNown",
        "scene": "sunset",
        theme: {
            background: "#1C1C1E",
            glow: "#E5BA73",
            accent: "#784421"
        }
    },
    {
        "id": 21,
        "title": "Y Que Nunca Te Falte Un Te Quiero",
        "artist": "Mägo de Oz",
        "cover": "assets/covers/21.jpg",
        "message": "",
        "videoId": "jxnjTMR6MF0",
        "duration": "3:47",
        "videoTitle": "Mägo de Oz - Y que nunca te falte un \"te quiero\" (Audio Oficial)",
        "channel": "Mägo de Oz",
        "scene": "sunset",
        theme: {
            background: "#14361F",
            glow: "#FFD166",
            accent: "#D90429"
        }
    },
    {
        "id": 22,
        "title": "Dawn",
        "artist": "Ike Dweck",
        "cover": "assets/covers/22.jpg",
        "message": "",
        "videoId": "_Geq9uSL_f8",
        "duration": "3:20",
        "videoTitle": "Ike Dweck - Dawn",
        "channel": "Neon City",
        "scene": "night",
        theme: {
            background: "#1E2229",
            glow: "#FAD390",
            accent: "#8B5E3C"
        }
    },
    {
        "id": 23,
        "title": "Rojitas Las Orejas",
        "artist": "Fito & Fitipaldis",
        "cover": "assets/covers/23.jpg",
        "message": "",
        "videoId": "dClhNR5jrQM",
        "duration": "3:45",
        "videoTitle": "Rojitas las orejas - Fito & Fitipaldis",
        "channel": "audreybusty",
        "scene": "sunset",
        theme: {
            background: "#1E1B1A",
            glow: "#FFF8E7",
            accent: "#D62246"
        }
    },
    {
        "id": 24,
        "title": "Coraline",
        "artist": "Måneskin",
        "cover": "assets/covers/24.jpg",
        "message": "",
        "videoId": "PO5kceBVNIE",
        "duration": "5:06",
        "videoTitle": "Måneskin - Coraline // sub esp + lyrics",
        "channel": "cora",
        "scene": "rain",
        theme: {
            background: "#0F0F12",
            glow: "#E3C185",
            accent: "#7A1F2D"
        }
    },
    {
        "id": 25,
        "title": "Delusional",
        "artist": "John Michael Howell",
        "cover": "assets/covers/25.jpg",
        "message": "",
        "videoId": "9bAPa7dCdBs",
        "duration": "2:47",
        "videoTitle": "John Michael Howell - Delusional (official music video)",
        "channel": "JohnMichaelHowell",
        "scene": "rain",
        theme: {
            background: "#140926",
            glow: "#FF4DAD",
            accent: "#00F5D4"
        }
    },
    {
        "id": 26,
        "title": "Ordinary World",
        "artist": "Green Day",
        "cover": "assets/covers/26.jpg",
        "message": "",
        "videoId": "mMeU6iHwO9g",
        "duration": "3:00",
        "videoTitle": "Green Day - Ordinary World (Sub.Español)",
        "channel": "Musical Lyrics",
        "scene": "rain",
        theme: {
            background: "#1E1611",
            glow: "#F7D070",
            accent: "#4A533C"
        }
    },
    {
        "id": 27,
        "title": "Cristina",
        "artist": "Sebastian Yatra",
        "cover": "assets/covers/27.jpg",
        "message": "",
        "videoId": "Iiyp9rR9zko",
        "duration": "3:21",
        "videoTitle": "Sebastian Yatra - Cristina (Letra)",
        "channel": "LatinHype",
        "scene": "sunset",
        theme: {
            background: "#0B0C10",
            glow: "#00F3FF",
            accent: "#FF007F"
        }
    },
    {
        "id": 28,
        "title": "2000 Light Years Away",
        "artist": "Green Day",
        "cover": "assets/covers/28.jpg",
        "message": "",
        "videoId": "Yhea380bYp0",
        "duration": "2:26",
        "videoTitle": "Green Day - 2000 Light Years Away",
        "channel": "Green Day",
        "scene": "night",
        theme: {
            background: "#0F111A",
            glow: "#00FF87",
            accent: "#FFC300"
        }
    },
    {
        "id": 29,
        "title": "Me Acordé de Ti",
        "artist": "Fito & Fitipaldis",
        "cover": "assets/covers/29.jpg",
        "message": "",
        "videoId": "aD9CZBG5bZw",
        "duration": "4:06",
        "videoTitle": "Fito & Fitipaldis - Me acordé de ti - Con letra.",
        "channel": "Ary705",
        "scene": "forest",
        theme: {
            background: "#1B263B",
            glow: "#E9D8A6",
            accent: "#9B2226"
        }
    },
    {
        "id": 30,
        "title": "Can Do",
        "artist": "GRANRODEO",
        "cover": "assets/covers/30.jpg",
        "message": "",
        "videoId": "feEgW1TeSMs",
        "duration": "4:24",
        "videoTitle": "GRANRODEO -- Can Do | Lyrics Video (Kan/Rom/Eng)",
        "channel": "AKAly (アカリ)",
        "scene": "freedom",
        theme: {
            background: "#14100E",
            glow: "#FF6B00",
            accent: "#00D2FF"
        }
    },
    {
        "id": 31,
        "title": "La Danza Del Fuego",
        "artist": "Mägo de Oz",
        "cover": "assets/covers/31.jpg",
        "message": "",
        "videoId": "NbrGRuDIfGw",
        "duration": "7:33",
        "videoTitle": "Mägo de Oz - La danza del fuego (Videoclip Oficial)",
        "channel": "Mägo de Oz",
        "scene": "forest",
        theme: {
            background: "#0A140F",
            glow: "#FF5400",
            accent: "#D4AF37"
        }
    },
    {
        "id": 32,
        "title": "If We Have Each Other",
        "artist": "Alec Benjamin",
        "cover": "assets/covers/32.jpg",
        "message": "",
        "videoId": "tscMSXk_jaQ",
        "duration": "3:02",
        "videoTitle": "Alec Benjamin - If We Have Each Other [Official Music Video]",
        "channel": "Alec Benjamin",
        "scene": "night",
        theme: {
            background: "#231B15",
            glow: "#FFE5D9",
            accent: "#6B705C"
        }
    },
    {
        "id": 33,
        "title": "Bobby Sox",
        "artist": "Green Day",
        "cover": "assets/covers/33.jpg",
        "message": "",
        "videoId": "NDjtguZG6iw",
        "duration": "3:47",
        "videoTitle": "Green Day - Bobby Sox (Official Music Video)",
        "channel": "Green Day",
        "scene": "freedom",
        theme: {
            background: "#131418",
            glow: "#FF2A85",
            accent: "#2ECC71"
        }
    },
    {
        "id": 34,
        "title": "The First Time We Met",
        "artist": "Damiano David",
        "cover": "assets/covers/34.jpg",
        "message": "",
        "videoId": "n1Hzf_is8tI",
        "duration": "3:39",
        "videoTitle": "Damiano David - The First Time (Official Visual Video)",
        "channel": "DamianoDavidVEVO",
        "scene": "night",
        theme: {
            background: "#090A10",
            glow: "#39FF14",
            accent: "#B7092B"
        }
    },
    {
        "id": 35,
        "title": "Vulnerable",
        "artist": "Walls",
        "cover": "assets/covers/35.jpg",
        "message": "",
        "videoId": "2wLujjNCZTc",
        "duration": "3:16",
        "videoTitle": "Walls, Dani Fernández - Vulnerable (Videoclip Oficial)",
        "channel": "Walls",
        "scene": "rain",
        theme: {
            background: "#1B1E24",
            glow: "#E8ECEF",
            accent: "#901A1E"
        }
    }
];