const TOSS_SDK_URL = 'https://js.tosspayments.com/v2/standard';
const CUSTOMER_KEY_STORAGE = 'wac-toss-customer-key';

export function formatKrw(amount) {
    return new Intl.NumberFormat('ko-KR').format(Number(amount) || 0);
}

export function getGuestCustomerKey() {
    let customerKey = localStorage.getItem(CUSTOMER_KEY_STORAGE);

    if (!customerKey) {
        customerKey = `guest_${crypto.randomUUID()}`;
        localStorage.setItem(CUSTOMER_KEY_STORAGE, customerKey);
    }

    return customerKey;
}

export function loadTossPaymentsSdk() {
    if (window.TossPayments) {
        return Promise.resolve(window.TossPayments);
    }

    if (window.__wacTossSdkPromise) {
        return window.__wacTossSdkPromise;
    }

    window.__wacTossSdkPromise = new Promise((resolve, reject) => {
        const existingScript = document.querySelector(`script[src="${TOSS_SDK_URL}"]`);

        if (existingScript) {
            existingScript.addEventListener('load', () => resolve(window.TossPayments), { once: true });
            existingScript.addEventListener('error', () => reject(new Error('Failed to load TossPayments SDK.')), { once: true });
            return;
        }

        const script = document.createElement('script');
        script.src = TOSS_SDK_URL;
        script.async = true;
        script.onload = () => resolve(window.TossPayments);
        script.onerror = () => reject(new Error('Failed to load TossPayments SDK.'));
        document.head.appendChild(script);
    });

    return window.__wacTossSdkPromise;
}
