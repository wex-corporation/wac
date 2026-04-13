class ApiError extends Error {
    constructor(message, details = {}) {
        super(message);
        this.name = 'ApiError';
        Object.assign(this, details);
    }
}

function trimTrailingSlash(value) {
    return String(value || '').replace(/\/+$/, '');
}

export function getApiBaseUrl() {
    const configuredBaseUrl = trimTrailingSlash(window.__WAC_API_BASE_URL__);

    if (configuredBaseUrl) {
        return configuredBaseUrl;
    }

    return trimTrailingSlash(window.location.origin);
}

export function createApiUrl(path) {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${getApiBaseUrl()}${normalizedPath}`;
}

export async function requestJson(path, options = {}) {
    const url = createApiUrl(path);
    const headers = new Headers(options.headers || {});

    if (!headers.has('Accept')) {
        headers.set('Accept', 'application/json');
    }

    const response = await fetch(url, {
        ...options,
        headers
    });

    const contentType = response.headers.get('content-type') || '';
    const rawText = await response.text();
    let data = null;

    if (contentType.includes('application/json') && rawText.trim()) {
        try {
            data = JSON.parse(rawText);
        } catch {
            throw new ApiError('API returned invalid JSON.', {
                code: 'INVALID_JSON',
                status: response.status,
                url,
                rawText
            });
        }
    }

    if (!contentType.includes('application/json')) {
        throw new ApiError('API returned HTML instead of JSON.', {
            code: 'NON_JSON_RESPONSE',
            status: response.status,
            url,
            rawText
        });
    }

    if (!response.ok) {
        throw new ApiError(data?.message || 'Request failed.', {
            code: data?.code || 'REQUEST_FAILED',
            status: response.status,
            url,
            rawText,
            data
        });
    }

    return data;
}

export { ApiError };
