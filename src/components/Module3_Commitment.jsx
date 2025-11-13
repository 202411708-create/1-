import { useState } from 'react';

export default function Module3_Commitment({ timeThieves, onComplete }) {
  const [step, setStep] = useState('intro');
  const [selectedThief, setSelectedThief] = useState(null);

  const top3 = timeThieves?.top3 || [];

  if (step === 'intro') {
    return (
      <div className="max-w-lg mx-auto animate-fade-in px-6">
        <div className="bg-white rounded-2xl p-10 shadow-muji text-center space-y-8">
          <h2 className="text-3xl font-bold text-textDark">
            오늘 발견한 것들을<br />
            정리해볼까?
          </h2>

          <div className="text-6xl">🕵️</div>

          <p className="text-gray-700 text-lg leading-relaxed">
            시간탐정이 되어 나의 시간을<br />
            자세히 들여다봤어!
          </p>

          <button
            onClick={() => setStep('summary')}
            className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-beige-700 transition-colors"
          >
            확인하기
          </button>
        </div>
      </div>
    );
  }

  if (step === 'summary') {
    return (
      <div className="max-w-lg mx-auto animate-fade-in px-6">
        <div className="bg-white rounded-2xl p-8 shadow-muji space-y-6">
          <h2 className="text-2xl font-bold text-textDark text-center mb-6">
            🏆 내 시간도둑 TOP 3
          </h2>

          <div className="space-y-4">
            {top3.map((thief, index) => (
              <div
                key={thief.id}
                className="bg-beige-50 border-2 border-warning rounded-xl p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">
                    {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                  </div>
                  <div className="text-3xl">{thief.emoji}</div>
                  <div className="flex-1">
                    <div className="font-bold text-textDark text-lg">{thief.title}</div>
                    <div className="text-sm text-gray-600 mt-1">{thief.estimatedTime}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-beige-100 border-2 border-beige-300 rounded-xl p-6 space-y-3">
            <div className="text-4xl text-center">💡</div>
            <p className="text-center text-gray-800 font-semibold">
              이 시간도둑들을 알아차린 것만으로도<br />
              큰 발걸음이야!
            </p>
          </div>

          <button
            onClick={() => setStep('reflection')}
            className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-beige-700 transition-colors"
          >
            다음
          </button>
        </div>
      </div>
    );
  }

  if (step === 'reflection') {
    return (
      <div className="max-w-lg mx-auto animate-fade-in px-6">
        <div className="bg-white rounded-2xl p-10 shadow-muji space-y-8">
          <h2 className="text-2xl font-bold text-textDark text-center">
            이 중에서 어떤 것을<br />
            줄이고 싶어?
          </h2>

          <div className="space-y-4">
            {top3.map((thief, index) => (
              <button
                key={thief.id}
                onClick={() => {
                  setSelectedThief(thief);
                  setStep('final');
                }}
                className={`w-full p-5 rounded-xl border-2 transition-all text-left ${
                  selectedThief?.id === thief.id
                    ? 'border-primary bg-beige-100'
                    : 'border-beige-300 hover:border-beige-400 hover:bg-beige-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">
                    {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                  </div>
                  <div className="text-3xl">{thief.emoji}</div>
                  <div className="flex-1">
                    <div className="font-bold text-textDark text-lg">{thief.title}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="bg-beige-100 border-2 border-beige-300 rounded-xl p-6 text-center">
            <div className="text-3xl mb-2">🕵️</div>
            <p className="text-gray-700">
              선택하지 않아도 괜찮아!<br />
              생각해보는 것만으로도 충분해
            </p>
          </div>

          <button
            onClick={() => setStep('final')}
            className="w-full py-4 bg-beige-200 text-beige-700 rounded-xl font-bold text-lg hover:bg-beige-300 transition-colors"
          >
            넘어가기
          </button>
        </div>
      </div>
    );
  }

  if (step === 'final') {
    return (
      <div className="max-w-lg mx-auto animate-fade-in px-6">
        <div className="bg-white rounded-2xl p-10 shadow-muji space-y-8">
          <div className="text-center space-y-4">
            <div className="text-7xl">🎉</div>
            <h2 className="text-3xl font-bold text-textDark">잘했어!</h2>
          </div>

          {selectedThief && (
            <div className="bg-beige-100 border-2 border-primary rounded-2xl p-6 space-y-3">
              <div className="text-center">
                <div className="text-4xl mb-2">{selectedThief.emoji}</div>
                <p className="text-gray-800 font-semibold">
                  <span className="text-primary font-bold">{selectedThief.title}</span>를<br />
                  줄이고 싶다고 생각했구나!
                </p>
              </div>
            </div>
          )}

          <div className="bg-beige-50 border-2 border-beige-300 rounded-xl p-6 space-y-3">
            <div className="text-4xl text-center">🕵️</div>
            <p className="text-gray-800 font-semibold text-center">
              오늘은 여기까지!
            </p>
            <p className="text-gray-700 text-center leading-relaxed">
              다음 시간에는 시간도둑을 막는<br />
              구체적인 방법을 배워볼 거야
            </p>
          </div>

          <div className="bg-success/10 border-2 border-success rounded-xl p-6 space-y-3">
            <div className="text-3xl text-center">💪</div>
            <p className="text-gray-800 font-semibold text-center">
              잊지 마!
            </p>
            <div className="text-left space-y-2 text-gray-700">
              <p>✅ 시간도둑을 발견한 것만으로도 대단해</p>
              <p>✅ 완벽하게 안 해도 괜찮아</p>
              <p>✅ 조금씩 변화하면 돼</p>
            </div>
          </div>

          <button
            onClick={() => {
              const commitmentData = {
                selectedThief: selectedThief || null,
                date: new Date().toISOString()
              };
              onComplete(commitmentData);
            }}
            className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-beige-700 transition-colors"
          >
            마무리로 →
          </button>
        </div>
      </div>
    );
  }

  return null;
}
