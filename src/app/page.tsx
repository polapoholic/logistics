// app/page.tsx
'use client'

import { useState } from 'react'

export default function HomePage() {
  const COMPANY_NAME = '다성 물류'
  const COMPANY_NAME_EN = 'DASEONG LOGISTICS'

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [subject, setSubject] = useState('운송 견적 문의')
  const [message, setMessage] = useState('')

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleSendMail = () => {
    if (!message.trim()) {
      alert('문의 내용을 입력해 주세요.')
      return
    }

    const to = 'sales@daseong-logis.co.kr' // 실제 사용할 영업 메일로 변경
    const mailSubject = encodeURIComponent(subject || '운송 견적 문의')
    const mailBody = encodeURIComponent(message)

    // 기본 메일 클라이언트 열기
    window.location.href = `mailto:${to}?subject=${mailSubject}&body=${mailBody}`

    // 메일창 띄운 후 모달 닫기
    setIsModalOpen(false)
  }

  return (
      <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-slate-100 text-slate-900">
        {/* 헤더 */}
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500 text-sm font-bold text-white shadow-sm">
                DS
              </div>
              <div>
                <div className="text-sm font-semibold tracking-tight">{COMPANY_NAME}</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  {COMPANY_NAME_EN}
                </div>
              </div>
            </div>
            <nav className="hidden gap-6 text-sm text-slate-700 md:flex">
              <a href="#services" className="hover:text-sky-600">
                서비스
              </a>
              <a href="#strengths" className="hover:text-sky-600">
                다성 물류의 강점
              </a>
              <a href="#network" className="hover:text-sky-600">
                네트워크
              </a>
              <a href="#contact" className="hover:text-sky-600">
                연락처
              </a>
            </nav>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-4 py-10 space-y-16">
          {/* HERO */}
          <section className="flex flex-col items-center gap-10 md:flex-row md:items-stretch">
            <div className="flex-1 space-y-5">
              <p className="text-xs font-semibold tracking-[0.25em] text-sky-500 uppercase">
                Integrated Logistics Service
              </p>
              <h1 className="text-3xl md:text-4xl font-semibold leading-snug text-slate-900">
                빠르고 정확한 물류,
                <br />
                <span className="text-sky-700">신뢰로 완성되는 {COMPANY_NAME}</span>
              </h1>
              <p className="text-sm md:text-base leading-relaxed text-slate-600">
                {COMPANY_NAME}는 국내·국제 운송, 창고 보관, 택배 연계, 통관까지
                고객사의 공급망을 처음부터 끝까지 책임지는 종합 물류 파트너입니다.
                실시간 화물 추적과 체계적인 운송 관리로 안정적인 리드타임을 제공합니다.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                    type="button"
                    onClick={handleOpenModal}
                    className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-sky-600 transition-colors"
                >
                  운송 견적 문의하기
                </button>
                <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-full border border-sky-200 bg-white px-5 py-2.5 text-sm font-medium text-sky-700 hover:bg-sky-50 transition-colors"
                >
                  서비스 소개 보기
                </a>
              </div>
              <div className="flex flex-wrap gap-4 pt-4 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500"/>
                  평균 정시 도착률 98% 이상
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-sky-500" />
                  24시간 모니터링 / 고객 지원
                </div>
              </div>
            </div>

            {/* 오른쪽: 요약 카드 */}
            <div className="w-full md:w-80">
              <div className="flex h-full flex-col justify-between rounded-3xl border border-sky-100 bg-white/90 p-6 shadow-lg">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-500">
                    KEY HIGHLIGHTS
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• 수도권 당일 / 전국 익일 배송 네트워크</li>
                    <li>• FTL / LTL / 컨테이너 운송 대응</li>
                    <li>• WMS 기반 창고 보관 및 재고 관리</li>
                    <li>• 고객사 전용 운송 현황 리포트 제공</li>
                  </ul>
                </div>
                <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-xs text-slate-600">
                  <p className="text-[11px] font-semibold text-slate-500 uppercase">
                    영업 문의
                  </p>
                  <p className="mt-1 text-sm text-slate-800">02-000-0000</p>
                  <p className="mt-1">sales@daseong-logis.co.kr</p>
                </div>
              </div>
            </div>
          </section>

          {/* SERVICE 섹션 */}
          <section id="services" className="space-y-6">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                서비스 영역
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                {COMPANY_NAME}는 다양한 산업군의 물류 특성을 이해하고,
                고객사의 상황에 맞는 운송·보관·관리 솔루션을 제공합니다.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">국내 운송</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  수도권 당일/지방 익일 배송, 혼적·전용 차량 운송, 정기 노선 운송 등
                  다양한 운송 옵션을 제공합니다.
                </p>
              </div>
              <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">국제 물류</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  항만·공항 연계 운송, 수출입 컨테이너 운송, 포워더와의 연계를 통한
                  Door-to-Door 국제 물류 서비스를 제공합니다.
                </p>
              </div>
              <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">창고 / 3PL</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  WMS 기반 재고 관리, 상/하차, 피킹·패킹, 라벨링, 고객사 전용 구역 운영 등
                  맞춤형 3PL 서비스를 제공합니다.
                </p>
              </div>
            </div>
          </section>

          {/* 강점 섹션 */}
          <section id="strengths" className="space-y-6">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                다성 물류의 강점
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                단순 운송을 넘어, 데이터 기반 관리와 실시간 소통으로
                고객사의 입장에서 생각하는 물류 파트너가 되겠습니다.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  title: '안정적인 리드타임',
                  desc: '표준화된 출고·운송 프로세스와 모니터링으로 정시 도착률을 유지합니다.',
                },
                {
                  title: '실시간 가시성',
                  desc: '운송 구간별 위치·상태를 실시간으로 조회하고, 이슈 발생 시 즉시 공유합니다.',
                },
                {
                  title: '전담 운영 담당자',
                  desc: '고객사별 전담 담당자를 배치하여, 영업·운영·CS를 One-Stop으로 지원합니다.',
                },
              ].map((item) => (
                  <div
                      key={item.title}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.desc}</p>
                  </div>
              ))}
            </div>
          </section>

          {/* 네트워크 / 숫자 섹션 */}
          <section id="network" className="space-y-6">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                전국 네트워크
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                수도권 허브와 전국 주요 거점을 기반으로, 고객사의 출고 패턴에 맞춘
                최적의 운송 동선을 설계합니다.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-4">
              {[
                { label: '연간 처리 물량', value: '120K+ 팔레트' },
                { label: '주요 고객사', value: '80+ 업체' },
                { label: '창고 보관 면적', value: '20,000㎡' },
                { label: '정시 도착률', value: '98% 이상' },
              ].map((item) => (
                  <div
                      key={item.label}
                      className="rounded-2xl border border-sky-100 bg-white p-4 text-center shadow-sm"
                  >
                    <p className="text-base font-semibold text-sky-700">{item.value}</p>
                    <p className="mt-1 text-[11px] text-slate-500">{item.label}</p>
                  </div>
              ))}
            </div>
          </section>

          {/* 문의 섹션 */}
          <section
              id="contact"
              className="rounded-3xl border border-sky-100 bg-white p-6 shadow-lg space-y-4"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
              문의 및 상담
            </h2>
            <p className="text-sm text-slate-600">
              운송 견적, 물류 아웃소싱, 시스템 연동 등 궁금한 사항을 남겨주시면
              담당자가 확인 후 빠르게 연락드리겠습니다.
            </p>
            <div className="grid gap-4 text-sm text-slate-700 md:grid-cols-3">
              <div>
                <p className="text-[11px] font-semibold uppercase text-slate-500">전화</p>
                <p className="mt-1">02-000-0000</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase text-slate-500">이메일</p>
                <p className="mt-1">sales@daseong-logis.co.kr</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase text-slate-500">주소</p>
                <p className="mt-1">서울시 ○○구 ○○로 00, 다성 물류 센터</p>
              </div>
            </div>
          </section>
          {/* 문의 모달 */}
          {isModalOpen && (
              <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40">
                <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-base font-semibold text-slate-900">
                      운송 견적 문의
                    </h2>
                    <button
                        type="button"
                        onClick={handleCloseModal}
                        className="text-slate-400 hover:text-slate-600 text-sm"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-slate-600">
                        제목
                      </label>
                      <input
                          type="text"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-200"
                          placeholder="예: ○○물류 운송 견적 문의 드립니다."
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-semibold text-slate-600">
                        문의 내용
                      </label>
                      <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={6}
                          className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-200"
                          placeholder={
                            '회사명 / 담당자명 / 연락처 / 출고지 / 도착지 / 물량 정보 등을 함께 적어 주시면 더 빠르게 안내 드릴 수 있습니다.'
                          }
                      />
                    </div>
                  </div>

                  <div className="mt-5 flex justify-end gap-2">
                    <button
                        type="button"
                        onClick={handleCloseModal}
                        className="rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50"
                    >
                      취소
                    </button>
                    <button
                        type="button"
                        onClick={handleSendMail}
                        className="rounded-full bg-sky-500 px-4 py-2 text-xs font-medium text-white hover:bg-sky-600"
                    >
                      문의 메일 열기
                    </button>
                  </div>
                </div>
              </div>
          )}

          {/* 푸터 */}
          <footer className="border-t border-slate-200 pt-4 pb-8 text-xs text-slate-500">
            <p>
              © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
            </p>
          </footer>
        </div>
      </main>
  )
}
