class ApiError extends Error {
    constructor(message, details = {}) {
        super(message);
        this.name = 'ApiError';
        Object.assign(this, details);
    }
}

const staticHostApiBaseUrls = {
    'wappraisalcompany.com': 'https://waccheckout20260414.loca.lt',
    'www.wappraisalcompany.com': 'https://waccheckout20260414.loca.lt'
};

function trimTrailingSlash(value) {
    return String(value || '').replace(/\/+$/, '');
}

export function getApiBaseUrl() {
    const configuredBaseUrl = trimTrailingSlash(window.__WAC_API_BASE_URL__);

    if (configuredBaseUrl) {
        return configuredBaseUrl;
    }

    const staticHostBaseUrl = trimTrailingSlash(staticHostApiBaseUrls[window.location.hostname]);

    if (staticHostBaseUrl) {
        return staticHostBaseUrl;
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

    let response;

    try {
        response = await fetch(url, {
            ...options,
            headers
        });
    } catch (error) {
        throw new ApiError('API request could not reach the server.', {
            code: 'NETWORK_ERROR',
            url,
            cause: error
        });
    }

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
