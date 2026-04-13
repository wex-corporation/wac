export const tossPublicConfig = {
    merchantName: '더블유감정평가사무소',
    mid: 'vkchicc3ms',
    clientKey: 'test_ck_GjLJoQ1aVZbLoE6WLY5AVw6KYe2R'
};

export const checkoutProducts = [
    {
        id: 'desktop-appraisal-standard',
        orderName: 'WAC Desktop Appraisal',
        nameEn: 'Desktop Appraisal Request',
        nameKr: '탁상 감정평가 요청',
        shortDescriptionEn: 'Single-property desktop appraisal with guest checkout and email delivery.',
        shortDescriptionKr: '비회원 결제가 가능한 단일 부동산 탁상 감정평가 상품입니다.',
        descriptionEn: 'This is a paid desktop appraisal request service for one property. After payment, W Appraisal Company reviews the submitted address, property type, size, timing, and intended use, then delivers a concise market-based appraisal summary by email.',
        descriptionKr: '본 상품은 단일 부동산 1건에 대한 유료 탁상 감정평가 신청 서비스입니다. 결제 후 입력된 주소, 물건 유형, 면적, 필요 시점, 이용 목적을 바탕으로 W Appraisal Company가 시장자료 기반의 요약형 탁상 감정 결과를 이메일로 제공합니다.',
        price: 1000,
        currency: 'KRW',
        deliveryEn: 'Email delivery within 48 hours after payment',
        deliveryKr: '결제 후 48시간 이내 이메일 발송',
        audienceEn: 'Members and non-members',
        audienceKr: '회원 및 비회원',
        reportTypeEn: 'Digital summary report',
        reportTypeKr: '디지털 요약 보고서',
        scopeEn: [
            'Desktop review for one property',
            'Indicative value range and market positioning',
            'Key assumptions and valuation commentary',
            'Bilingual-ready communication context on request'
        ],
        scopeKr: [
            '단일 부동산 1건 기준 탁상 검토',
            '추정 가치 범위 및 시장 포지셔닝 의견',
            '주요 가정 및 가치 판단 코멘트',
            '요청 시 이중 언어 커뮤니케이션 맥락 반영'
        ],
        limitationsEn: [
            'No on-site inspection is included',
            'No legal due diligence or title verification',
            'Not a formal full appraisal report for regulated filing',
            'Prepared from client inputs and market information available at review time'
        ],
        limitationsKr: [
            '현장 실사는 포함되지 않습니다',
            '법률 실사 및 권리관계 검토는 포함되지 않습니다',
            '법정 제출용 정식 감정평가서와는 다릅니다',
            '고객 제공 정보와 검토 시점의 시장자료를 기준으로 작성됩니다'
        ]
    }
];

export const checkoutUseCases = [
    {
        id: 'acquisition-screening',
        labelEn: 'Acquisition screening',
        labelKr: '매입 전 스크리닝',
        copyEn: 'Useful when a buyer wants a fast, paid market sanity check before deeper diligence or pricing negotiations.',
        copyKr: '본격적인 실사나 가격 협상 전에 빠르게 유료 시세 검토를 받고 싶은 매수자에게 적합합니다.'
    },
    {
        id: 'lender-pre-read',
        labelEn: 'Lender pre-read',
        labelKr: '대출 전 사전 검토',
        copyEn: 'Helpful for internal lending or finance discussions that need a lightweight view on value and key assumptions.',
        copyKr: '가치와 주요 가정에 대한 경량 검토가 필요한 내부 대출 또는 금융 검토 단계에 유용합니다.'
    },
    {
        id: 'rwa-underwriting',
        labelEn: 'RWA underwriting context',
        labelKr: 'RWA 언더라이팅 컨텍스트',
        copyEn: 'Designed for tokenization or onchain property workflows that still require grounded local property intelligence.',
        copyKr: '토큰화 또는 온체인 부동산 워크플로우에서도 필요한 현지 부동산 인텔리전스 기반 검토를 지원합니다.'
    }
];

export function getCheckoutProduct(productId) {
    return checkoutProducts.find(product => product.id === productId) || checkoutProducts[0];
}
