import { useState, useEffect } from 'react';

export default function Module0_Onboarding({ onComplete }) {
  const [screen, setScreen] = useState(0);
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    // Screen 0만 자동 넘김 (로고 화면)
    if (screen === 0) {
      const timer = setTimeout(() => setScreen(1), 2000);
      return () => clearTimeout(timer);
    }
  }, [screen]);

  useEffect(() => {
    if (countdown === null) return;

    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      // 카운트다운 끝나면 Module 1로
      const timer = setTimeout(() => onComplete(), 500);
      return () => clearTimeout(timer);
    }
  }, [countdown, onComplete]);

  const handleStartCountdown = () => {
    setCountdown(3);
  };

  return (
    <div className="flex items-center justify-center min-h-[600px]">
      {/* Screen 0: 로고 */}
      {screen === 0 && (
        <div className="text-center animate-fade-in">
          <div className="text-8xl mb-4">🕵️</div>
          <h1 className="text-3xl font-bold text-gray-800">시간 탐정 등장</h1>
        </div>
      )}

      {/* Screen 1: 첫 인사 */}
      {screen === 1 && (
        <div className="text-center animate-fade-in space-y-16 max-w-md px-6">
          <div className="text-8xl">🕵️</div>

          <div className="bg-white rounded-2xl p-12 shadow-lg animate-scale-in">
            <p className="text-3xl text-gray-800 leading-loose">
              안녕! 나는 시간 탐정이야
            </p>
          </div>

          <div className="bg-white rounded-2xl p-12 shadow-lg animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-3xl text-gray-800 leading-loose">
              오늘은 너의 시간을<br />
              자세히 들여다볼거야!
            </p>
          </div>

          <button
            onClick={() => setScreen(2)}
            className="px-16 py-6 bg-primary text-white rounded-2xl font-bold text-2xl hover:bg-beige-700 transition-colors shadow-muji"
          >
            다음
          </button>
        </div>
      )}

      {/* Screen 2: 미션 소개 */}
      {screen === 2 && (
        <div className="text-center animate-fade-in space-y-16 max-w-2xl px-8">
          <div className="bg-beige-100 border-2 border-beige-300 rounded-3xl p-16 shadow-muji-lg">
            <div className="text-7xl mb-10">🎯</div>
            <h2 className="text-5xl font-bold text-textDark mb-8">오늘의 목표</h2>
            <p className="text-4xl font-bold text-primary leading-relaxed">
              나의 시간 사용<br />
              알아보기
            </p>
          </div>

          <div className="bg-white rounded-2xl p-16 shadow-lg">
            <div className="text-8xl mb-12">🕵️</div>
            <p className="text-2xl text-gray-800 leading-loose mb-8">
              <span className="font-bold text-primary">시간은 정말 소중해!</span><br />
              한 번 지나간 시간은 절대 돌아오지 않거든.
            </p>
            <p className="text-2xl text-gray-800 leading-loose">
              그래서 이 소중한 시간을 너는 어떻게<br />
              쓰고 있는지 함께 알아보자
            </p>
          </div>

          <button
            onClick={() => setScreen(3)}
            className="px-16 py-6 bg-primary text-white rounded-2xl font-bold text-2xl hover:bg-beige-700 transition-colors shadow-muji"
          >
            다음
          </button>
        </div>
      )}

      {/* Screen 3: 카운트다운 */}
      {screen === 3 && (
        <div className="text-center animate-fade-in space-y-16 px-6">
          <h2 className="text-6xl font-bold text-gray-800">준비됐어?</h2>

          {countdown === null && (
            <button
              onClick={handleStartCountdown}
              className="px-20 py-8 bg-primary text-white rounded-2xl font-bold text-3xl hover:bg-beige-700 transition-colors shadow-muji-lg"
            >
              시작하기
            </button>
          )}

          {countdown !== null && countdown > 0 && (
            <div className="text-9xl font-bold text-primary animate-scale-in my-20">
              {countdown}
            </div>
          )}

          {countdown === 0 && (
            <div className="animate-scale-in space-y-10">
              <div className="text-9xl">🚀</div>
              <h2 className="text-7xl font-bold text-primary">출발!</h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
