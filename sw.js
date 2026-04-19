const TMDB_KEY = 'fb7bb23f03b6994dafc674c074d01761';
const BASE_URL = 'https://api.themoviedb.org/3';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Only intercept calls to our /api path
    if (url.pathname.startsWith('/api/')) {
        event.respondWith(handleApiRequest(url));
    }
});

async function handleApiRequest(url) {
    const path = url.pathname;
    let targetUrl = '';

    // 1. Hero / Trending
    if (path === '/api/hero') {
        targetUrl = `${BASE_URL}/trending/movie/week?api_key=${TMDB_KEY}`;
    } 
    
    else if (path === '/api/trending') {
        targetUrl = `${BASE_URL}/trending/all/week?api_key=${TMDB_KEY}`;
    }

    // 2. Search
    else if (path === '/api/search') {
        const query = url.searchParams.get('query');
        const type = url.searchParams.get('type') || 'multi';
        targetUrl = `${BASE_URL}/search/${type}?api_key=${TMDB_KEY}&query=${encodeURIComponent(query)}`;
    }

    // 3. Images (Redirect directly to TMDB CDN)
    else if (path.startsWith('/api/img/')) {
        const imgPath = path.replace('/api/img/', '');
        return Response.redirect(`https://image.tmdb.org/t/p/w500/${imgPath}`, 302);
    }

    // 4. Movie Details
    else if (path.startsWith('/api/movie/')) {
        const movieId = path.split('/').pop();
        targetUrl = `${BASE_URL}/movie/${movieId}?api_key=${TMDB_KEY}&append_to_response=credits`;
    }

    // 5. Discover (Multi-page English filter)
    else if (path.startsWith('/api/discover/')) {
        const type = path.split('/').pop();
        return handleDiscoverRequest(type);
    }

    if (targetUrl) {
        try {
            const response = await fetch(targetUrl);
            const data = await response.json();
            return new Response(JSON.stringify(data), {
                headers: { 'Content-Type': 'application/json' }
            });
        } catch (err) {
            return new Response(JSON.stringify({ error: 'Fetch failed' }), { status: 500 });
        }
    }

    return fetch(url);
}

// Special handler for the multi-page English filter logic
async function handleDiscoverRequest(type) {
    let combinedResults = [];
    
    try {
        // Fetching 5 pages (reduced from 10 to prevent browser timeouts)
        for (let page = 1; page <= 5; page++) {
            const res = await fetch(`${BASE_URL}/discover/${type}?api_key=${TMDB_KEY}&sort_by=popularity.desc&page=${page}`);
            const data = await res.json();
            
            const englishOnly = data.results
                .filter(item => item.original_language === 'en')
                .map(item => ({ ...item, media_type: type }));
            
            combinedResults = [...combinedResults, ...englishOnly];
        }
        
        return new Response(JSON.stringify({ results: combinedResults }), {
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: 'Discover failed' }), { status: 500 });
    }
}