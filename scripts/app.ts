const clientId = '653d095e5e4c4decb4a5383a712c8d13';
const clientSecret = '684678406db74861a1c3ca950191804c';

// アクセストークンを取得する関数
async function fetchAccessToken(): Promise<string> {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });
    const data = await response.json();
    return data.access_token;
}

// 楽曲を取得する関数
async function fetchTracks(): Promise<void> {
    const token = await fetchAccessToken();
    const mood = (document.getElementById('mood') as HTMLSelectElement).value;
    const response = await fetch(`https://api.spotify.com/v1/search?q=${mood}&type=track&limit=5`, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    const data = await response.json();
    displayTracks(data.tracks.items);
}

// 楽曲情報を表示する関数
function displayTracks(tracks: any[]): void {
    const tracksDiv = document.getElementById('tracks')!;
    tracksDiv.innerHTML = '';
    tracks.forEach(track => {
        const trackDiv = document.createElement('div');
        trackDiv.className = 'track';
        trackDiv.innerHTML = `
            <img src="${track.album.images[0].url}" alt="${track.name}">
            <p>${track.name} by ${track.artists[0].name}</p>
        `;
        tracksDiv.appendChild(trackDiv);
    });
}

// fetchTracks 関数をグローバルに公開
(window as any).fetchTracks = fetchTracks;
