// app/facility/page.tsx
import Link from 'next/link'

const COMPANY_NAME = '다성 물류'
const COMPANY_NAME_EN = 'DASEONG LOGISTICS'

export const metadata = {
    title: `시설 소개 | ${COMPANY_NAME}`,
}

export default function FacilityPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-slate-100 text-slate-900">
            <div className="mx-auto max-w-6xl px-4 py-10 space-y-10">
                {/* 상단 헤더 / 브레드크럼 */}
                <header className="space-y-3">
                    <nav className="text-sm font-medium text-slate-600">
                        <Link href="/" className="hover:text-sky-700">
                            ← 메인으로 돌아가기
                        </Link>
                    </nav>
                    <div>
                        <p className="text-[11px] font-semibold tracking-[0.22em] text-sky-500 uppercase">
                            Facility
                        </p>
                        <h1 className="mt-1 text-2xl md:text-3xl font-semibold text-slate-900">
                            {COMPANY_NAME} 물류센터 시설 소개
                        </h1>
                        <p className="mt-2 text-sm md:text-base text-slate-600 leading-relaxed">
                            {COMPANY_NAME}는 적정 규모의 창고와 상·하차 설비, IT 시스템을 기반으로
                            고객사의 출고 패턴에 맞는 효율적인 물류 환경을 제공합니다.
                        </p>
                    </div>
                </header>

                {/* 핵심 제원 카드 */}
                <section className="space-y-4">
                    <h2 className="text-lg md:text-xl font-semibold text-slate-900">
                        기본 제원
                    </h2>
                    <div className="grid gap-4 md:grid-cols-4">
                        <div className="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm">
                            <p className="text-xs font-semibold text-slate-500">위치</p>
                            <p className="mt-1 text-sm text-slate-900">
                                서울 ○○구 ○○로 00
                            </p>
                            <p className="mt-1 text-[11px] text-slate-500">
                                수도권 주요 고객사 접근 용이
                            </p>
                        </div>
                        <div className="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm">
                            <p className="text-xs font-semibold text-slate-500">창고 면적</p>
                            <p className="mt-1 text-sm text-slate-900">약 600㎡ (200평)</p>
                            <p className="mt-1 text-[11px] text-slate-500">
                                출고 패턴에 맞춘 적정 규모
                            </p>
                        </div>
                        <div className="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm">
                            <p className="text-xs font-semibold text-slate-500">상·하차 도크</p>
                            <p className="mt-1 text-sm text-slate-900">Dock 2라인</p>
                            <p className="mt-1 text-[11px] text-slate-500">
                                5톤 / 11톤 차량 동시 작업 가능
                            </p>
                        </div>
                        <div className="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm">
                            <p className="text-xs font-semibold text-slate-500">운영 시간</p>
                            <p className="mt-1 text-sm text-slate-900">평일 08:00 ~ 18:00</p>
                            <p className="mt-1 text-[11px] text-slate-500">
                                긴급 출고 별도 대응 가능
                            </p>
                        </div>
                    </div>
                </section>

                {/* 레이아웃 / 존 구성 */}
                <section className="space-y-4">
                    <h2 className="text-lg md:text-xl font-semibold text-slate-900">
                        창고 레이아웃 및 존 구성
                    </h2>
                    <div className="grid gap-6 md:grid-cols-[1.4fr,1fr]">
                        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-3 text-sm text-slate-700 leading-relaxed">
                            <p>
                                {COMPANY_NAME} 물류센터는 입고, 보관, 피킹, 출고 구간이
                                명확하게 구분되어 있으며, 팔레트 랙 존과 플로어 스톡 존을 함께
                                운용하여 상품 특성에 따라 유연하게 공간을 사용할 수 있습니다.
                            </p>
                            <ul className="mt-2 list-disc pl-4 text-xs md:text-sm space-y-1">
                                <li>입·출고 전용 상·하차장과 피킹 작업 공간 분리</li>
                                <li>팔레트 랙 존 / 소형 박스 전용 피킹 존 별도 운영</li>
                                <li>반품·검수 전용 구역 운영으로 재고 정확도 확보</li>
                                <li>장기 보관, 단기 보관 구역 분리로 효율적인 공간 활용</li>
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-dashed border-sky-200 bg-sky-50/70 p-5 text-xs text-slate-600">
                            <p className="text-[11px] font-semibold text-sky-600 uppercase tracking-[0.18em] mb-2">
                                Layout (예시)
                            </p>
                            <p>
                                실제 도면은 고객사 협의 시 별도 제공되며,
                                입·출고 물량과 SKU 특성에 따라 레이아웃 최적화를 함께 검토합니다.
                            </p>
                            <div className="mt-4 h-40 rounded-xl bg-slate-100 flex items-center justify-center text-[11px] text-slate-400">
                                창고 도면 / 레이아웃 이미지 영역
                                <br />
                                (추후 실제 이미지로 교체 가능)
                            </div>
                        </div>
                    </div>
                </section>

                {/* 설비 / 장비 */}
                <section className="space-y-4">
                    <h2 className="text-lg md:text-xl font-semibold text-slate-900">
                        설비 및 장비
                    </h2>
                    <div className="grid gap-4 md:grid-cols-3 text-sm text-slate-700">
                        <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
                            <h3 className="text-sm font-semibold text-slate-900 mb-2">
                                물류 장비
                            </h3>
                            <ul className="list-disc pl-4 text-xs space-y-1">
                                <li>지게차 2대 (전동)</li>
                                <li>팔레트 트럭(핸드 파렛트) 다수</li>
                                <li>롤테이너 / 롤박스 팔레트</li>
                                <li>파손 방지용 랩핑 기기</li>
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
                            <h3 className="text-sm font-semibold text-slate-900 mb-2">
                                IT 시스템
                            </h3>
                            <ul className="list-disc pl-4 text-xs space-y-1">
                                <li>WMS(창고 관리 시스템) 기반 재고 관리</li>
                                <li>바코드 스캐너를 이용한 입·출고 처리</li>
                                <li>실시간 재고 / 로케이션 조회 가능</li>
                                <li>고객사 시스템 연동(파일/인터페이스 방식) 지원</li>
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
                            <h3 className="text-sm font-semibold text-slate-900 mb-2">
                                안전 / 환경
                            </h3>
                            <ul className="list-disc pl-4 text-xs space-y-1">
                                <li>CCTV 및 출입 통제 시스템 운용</li>
                                <li>소화기, 비상구, 피난 유도 등 안전 설비 구비</li>
                                <li>정기적인 정리·정돈 / 청소로 쾌적한 작업 환경 유지</li>
                                <li>작업자 안전 교육 및 장비 사용 교육 정기 시행</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 운영 프로세스 */}
                <section className="space-y-4">
                    <h2 className="text-lg md:text-xl font-semibold text-slate-900">
                        기본 운영 프로세스
                    </h2>
                    <p className="text-sm text-slate-600">
                        입고부터 출고까지의 프로세스를 표준화하여, 작업자에 따라 서비스 품질이
                        달라지지 않도록 관리하고 있습니다.
                    </p>
                    <div className="flex flex-col md:flex-row md:items-stretch md:justify-between gap-3 text-xs md:text-sm">
                        {[
                            {
                                step: '01',
                                title: '입고',
                                desc: '도착 차량 검수, 수량 확인, 라벨 부착 및 로케이션 배정',
                            },
                            {
                                step: '02',
                                title: '보관',
                                desc: '상품 특성에 맞는 존/랙에 보관, 재고 주기 점검 및 로케이션 관리',
                            },
                            {
                                step: '03',
                                title: '피킹',
                                desc: '출고 지시서 기준 피킹, 검수, 포장 및 출고 라벨 부착',
                            },
                            {
                                step: '04',
                                title: '출고',
                                desc: '상차, 출고 스캔, 운송장 연계 및 운송사 인계',
                            },
                        ].map((item) => (
                            <div
                                key={item.step}
                                className="flex-1 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                            >
                                <p className="text-[11px] font-semibold text-sky-600">
                                    STEP {item.step}
                                </p>
                                <p className="mt-1 text-sm font-semibold text-slate-900">
                                    {item.title}
                                </p>
                                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 하단 CTA */}
                <section className="mt-4 flex flex-col gap-3 rounded-3xl border border-sky-100 bg-sky-50/80 p-5 text-sm text-slate-800 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-xs font-semibold text-sky-700 uppercase tracking-[0.18em]">
                            CONTACT
                        </p>
                        <p className="mt-1 font-semibold">
                            실제 창고 방문 또는 상세 제원 자료가 필요하신가요?
                        </p>
                        <p className="mt-1 text-xs text-slate-600">
                            견적 및 운영 컨설팅 요청 시, {COMPANY_NAME} 물류센터 현장 방문 일정도 함께
                            조율해 드립니다.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <Link
                            href="/#contact"
                            className="rounded-full bg-sky-500 px-4 py-2 text-xs font-medium text-white hover:bg-sky-600 transition-colors"
                        >
                            문의 / 연락처 보기
                        </Link>
                        <a
                            href="tel:0200000000"
                            className="rounded-full border border-sky-300 bg-white px-4 py-2 text-xs font-medium text-sky-700 hover:bg-sky-50 transition-colors"
                        >
                            전화 문의 (02-000-0000)
                        </a>
                    </div>
                </section>
            </div>
        </main>
    )
}
